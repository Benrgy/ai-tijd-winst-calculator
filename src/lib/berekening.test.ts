import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { bereken, naarParams, STANDAARD_INVOER, uitParams } from "./berekening";

describe("Persoonsberekening", () => {
  test("standaardinvoer geeft totalH 8,75", () => {
    assert.equal(bereken(STANDAARD_INVOER).totalH, 8.75);
  });
  test("standaardinvoer geeft savedW 3,5", () => {
    assert.equal(bereken(STANDAARD_INVOER).savedW, 3.5);
  });
  test("maandberekening gebruikt 4,33 weken", () => {
    assert.equal(bereken(STANDAARD_INVOER).savedM, 3.5 * 4.33);
  });
  test("standaardinvoer geeft savedY 182", () => {
    assert.equal(bereken(STANDAARD_INVOER).savedY, 182);
  });
  test("standaardinvoer geeft valY 6370", () => {
    assert.equal(bereken(STANDAARD_INVOER).valY, 6370);
  });
  test("team 3 geeft teamSavedY 546", () => {
    assert.equal(bereken({ ...STANDAARD_INVOER, team: 3 }).teamSavedY, 546);
  });
  test("teamwaarden zijn de persoonswaarde maal team", () => {
    const result = bereken({ ...STANDAARD_INVOER, team: 3 });
    assert.equal(result.teamSavedM, 3.5 * 4.33 * 3);
    assert.equal(result.teamValY, 6370 * 3);
    assert.equal(result.savedY, 182);
    assert.equal(result.valY, 6370);
  });
  for (const percentage of [25, 40, 60]) {
    test(`bestaand scenario ${percentage}% blijft beschikbaar`, () => {
      const result = uitParams(new URLSearchParams({ s: String(percentage) }));
      assert.equal(result.eigenInschatting, false);
      assert.equal(result.invoer.scenario, percentage / 100);
      assert.equal(bereken(result.invoer).savedW, 8.75 * (percentage / 100));
    });
  }
});

describe("Deelbare parameters", () => {
  test("e=99999 wordt begrensd tot 500", () => {
    assert.equal(uitParams(new URLSearchParams("e=99999")).invoer.emails, 500);
  });
  test("e=abc wordt genegeerd", () => {
    assert.equal(uitParams(new URLSearchParams("e=abc")).invoer.emails, 40);
  });
  test("s=33 kiest eigen percentage 33", () => {
    const result = uitParams(new URLSearchParams("s=33"));
    assert.equal(result.eigenInschatting, true);
    assert.equal(result.eigenPercentage, 33);
    assert.equal(result.invoer.scenario, 0.33);
    assert.equal(bereken(result.invoer).savedW, 8.75 * 0.33);
  });
  test("teamgrootte standaard 1, minimum 1 en maximum 500", () => {
    assert.equal(uitParams(new URLSearchParams()).invoer.team, 1);
    assert.equal(uitParams(new URLSearchParams("n=0")).invoer.team, 1);
    assert.equal(uitParams(new URLSearchParams("n=99999")).invoer.team, 500);
  });
  test("eigen percentage wordt begrensd tussen 0 en 90", () => {
    assert.equal(uitParams(new URLSearchParams("s=-5")).eigenPercentage, 0);
    assert.equal(uitParams(new URLSearchParams("s=99999")).eigenPercentage, 90);
  });
  test("alle velden volgen hun bestaande grenzen", () => {
    const result = uitParams(new URLSearchParams("e=-1&me=999&v=999&mv=999&t=999&mt=999&u=999&n=999"));
    assert.deepEqual(result.invoer, { ...STANDAARD_INVOER, emails: 0, minPerEmail: 120, meetings: 50, minPerMeeting: 240, adminTexts: 100, minPerText: 240, rate: 500, team: 500 });
  });
  test("ongeldige lege, oneindige en niet-gehele percentages worden genegeerd", () => {
    assert.deepEqual(uitParams(new URLSearchParams("e=&me=Infinity&v=abc&s=33.5&n=2.5&u=0x20")).invoer, STANDAARD_INVOER);
  });
  test("naarParams gevolgd door uitParams geeft dezelfde invoer", () => {
    for (const invoer of [STANDAARD_INVOER, { emails: 50, minPerEmail: 7.5, meetings: 4, minPerMeeting: 60, adminTexts: 8, minPerText: 25, scenario: 0.33, rate: 52.5, team: 3 }]) {
      assert.deepEqual(uitParams(naarParams(invoer)).invoer, invoer);
    }
  });
  test("een eigen percentage van nul geeft nul besparing", () => {
    const result = bereken({ ...STANDAARD_INVOER, scenario: 0, team: 3 });
    assert.equal(result.savedW, 0);
    assert.equal(result.teamValY, 0);
  });
});