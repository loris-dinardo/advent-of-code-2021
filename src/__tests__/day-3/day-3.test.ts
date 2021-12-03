import {exampleData, realData} from "./day-3-dataset";
import {BinaryDiagnostic} from "../../core/day-3/binary-diagnostic";

describe("Advent of code 2021 - Day 3: Binary Diagnostic", () => {
    describe("Part 1, extract gamma rate and epsilon rate to check power consumption", () => {
        it("Using example data", () => {
            // then
            expect(BinaryDiagnostic.calcPowerConsumption(exampleData)).toEqual(198);
        });
        it("Using  real data", () => {
            // then
            expect(BinaryDiagnostic.calcPowerConsumption(realData)).toEqual(3687446);
        });
    });
    describe("Part 2, extract oxygen generator rating and CO2 scrubber rating to" +
        "verify life support rating", () => {
        it("Using example data", () => {
            // then
            expect(BinaryDiagnostic.calcLifeSupportRating(exampleData)).toEqual(230);
        });
        it("Using  real data", () => {
            // then
            expect(BinaryDiagnostic.calcLifeSupportRating(realData)).toEqual(4406844);
        });
    });
});

export {}