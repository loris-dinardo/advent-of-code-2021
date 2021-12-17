import {exampleData, realData} from "./day-1-dataset";
import {SubmarineDepthMeasurement} from "../../core/day-1/submarine-depth-measurement";

describe("Advent of code 2021 - Day 1: Sonar Sweep", () => {
    describe("Part 1, count the number of times a depth measurement increases from the previous measurement", () => {
        it("Using example data", () => {
            // then
            expect(new SubmarineDepthMeasurement(exampleData).calcIncreasesFromPrevious()).toEqual(7);
        });
        it("Using  real data", () => {
            // then
            expect(new SubmarineDepthMeasurement(realData).calcIncreasesFromPrevious()).toEqual(1288);
        });
    });
    describe("Part 2, count the number of times the sum of measurements in this sliding window increases from the previous sum", () => {
        it("Using example data", () => {
            // then
            expect(new SubmarineDepthMeasurement(exampleData).calcIncreasesFromPreviousSum()).toEqual(5);
        });
        it("Using  real data", () => {
            // then
            expect(new SubmarineDepthMeasurement(realData).calcIncreasesFromPreviousSum()).toEqual(1311);
        });
    });
});