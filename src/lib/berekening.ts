export type Invoer = {
  emails: number;
  minPerEmail: number;
  meetings: number;
  minPerMeeting: number;
  adminTexts: number;
  minPerText: number;
  scenario: number;
  rate: number;
  team: number;
};

export const STANDAARD_INVOER: Readonly<Invoer> = {
  emails: 40,
  minPerEmail: 6,
  meetings: 3,
  minPerMeeting: 45,
  adminTexts: 5,
  minPerText: 30,
  scenario: 0.4,
  rate: 35,
  team: 1,
};

export function bereken(invoer: Invoer) {
  const { emails, minPerEmail, meetings, minPerMeeting, adminTexts, minPerText, scenario, rate, team } = invoer;
  const totalMin = emails * minPerEmail + meetings * minPerMeeting + adminTexts * minPerText;
  const totalH = totalMin / 60;
  const savedW = totalH * scenario;
  const savedM = savedW * 4.33;
  const savedY = savedW * 52;
  const valY = savedY * rate;
  return {
    totalH,
    savedW,
    savedM,
    savedY,
    valW: savedW * rate,
    valM: savedM * rate,
    valY,
    teamSavedM: savedM * team,
    teamSavedY: savedY * team,
    teamValY: valY * team,
  };
}

const VELDEN: ReadonlyArray<{
  param: string;
  veld: keyof Invoer;
  min: number;
  max: number;
  geheel?: boolean;
}> = [
  { param: "e", veld: "emails", min: 0, max: 500 },
  { param: "me", veld: "minPerEmail", min: 0, max: 120 },
  { param: "v", veld: "meetings", min: 0, max: 50 },
  { param: "mv", veld: "minPerMeeting", min: 0, max: 240 },
  { param: "t", veld: "adminTexts", min: 0, max: 100 },
  { param: "mt", veld: "minPerText", min: 0, max: 240 },
  { param: "s", veld: "scenario", min: 0, max: 90, geheel: true },
  { param: "u", veld: "rate", min: 0, max: 500 },
  { param: "n", veld: "team", min: 1, max: 500, geheel: true },
];

export function naarParams(invoer: Invoer): URLSearchParams {
  const params = new URLSearchParams();
  for (const { param, veld } of VELDEN) {
    const value = veld === "scenario" ? Math.round(invoer.scenario * 100) : invoer[veld];
    params.set(param, String(value));
  }
  return params;
}

export function uitParams(params: URLSearchParams, basis: Invoer = STANDAARD_INVOER) {
  const invoer = { ...basis };
  for (const { param, veld, min, max, geheel } of VELDEN) {
    const raw = params.get(param)?.trim();
    if (!raw || !/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i.test(raw)) continue;
    const value = Number(raw);
    if (!Number.isFinite(value) || (geheel && !Number.isInteger(value))) continue;
    const begrensd = Math.max(min, Math.min(max, value));
    invoer[veld] = veld === "scenario" ? begrensd / 100 : begrensd;
  }
  const percentage = Math.round(invoer.scenario * 100);
  const eigenInschatting = ![25, 40, 60].includes(percentage);
  return { invoer, eigenInschatting, eigenPercentage: eigenInschatting ? percentage : 30 };
}