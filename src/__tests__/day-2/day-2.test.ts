import {SubmarineDiveCommands} from "../../core/day-2/submarine-dive-commands";
import {exampleData, realData} from "./day-2-dataset";

describe("Advent of code 2021 - Day 2: Dive!", () => {
    describe("Part 1, multiply your final horizontal position by your final depth", () => {
        it("Using example data", () => {
            // then
            expect(new SubmarineDiveCommands(exampleData).calcHorizontalPosMultipliedByFinalDepth()).toEqual(150);
        });
        it("Using  real data", () => {
            // then
            expect(new SubmarineDiveCommands(realData).calcHorizontalPosMultipliedByFinalDepth()).toEqual(1727835);
        });
    });
    describe("Part 2, multiply your final horizontal position by your final depth : different meaning", () => {
        it("Using example data", () => {
            // then
            expect(new SubmarineDiveCommands(exampleData).calcHorizontalPosMultipliedByFinalDepthDiffMeaning()).toEqual(900);
        });
        it("Using  real data", () => {
            // then
            expect(new SubmarineDiveCommands(realData).calcHorizontalPosMultipliedByFinalDepthDiffMeaning()).toEqual(1544000595);
        });
    });
});