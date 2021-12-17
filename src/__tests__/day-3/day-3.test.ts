import {exampleData, realData} from "./day-3-dataset";
import {SubmarineBinaryDiagnostic} from "../../core/day-3/submarine-binary-diagnostic";

describe("Advent of code 2021 - Day 3: Binary Diagnostic", () => {
    describe("Part 1, extract gamma rate and epsilon rate to check power consumption", () => {
        it("Using example data", () => {
            // then
            expect(new SubmarineBinaryDiagnostic(exampleData).calcPowerConsumption()).toEqual(198);
        });
        it("Using  real data", () => {
            // then
            expect(new SubmarineBinaryDiagnostic(realData).calcPowerConsumption()).toEqual(3687446);
        });
    });
    describe("Part 2, extract oxygen generator rating and CO2 scrubber rating to" +
        "verify life support rating", () => {
        it("Using example data", () => {
            // then
            expect(new SubmarineBinaryDiagnostic(exampleData).calcLifeSupportRating()).toEqual(230);
        });
        it("Using  real data", () => {
            // then
            expect(new SubmarineBinaryDiagnostic(realData).calcLifeSupportRating()).toEqual(4406844);
        });
    });
});