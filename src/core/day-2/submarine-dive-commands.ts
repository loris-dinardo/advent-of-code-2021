import {CommandAnalyser} from "./command-analyser";

export class SubmarineDiveCommands {
    constructor(private _dataset: Array<string>) {
    }

    public calcHorizontalPosMultipliedByFinalDepth(): number {
        return CommandAnalyser
            .withDataset(this._dataset)
            .calcHorizontalPosMultipliedByFinalDepth();
    }

    public calcHorizontalPosMultipliedByFinalDepthDiffMeaning(): number {
        return CommandAnalyser
            .withDataset(this._dataset)
            .calcHorizontalPosMultipliedByFinalDepthDiffMeaning();
    }
}