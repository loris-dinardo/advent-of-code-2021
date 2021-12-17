import {Measurement} from "./measurement";

export class SubmarineDepthMeasurement {
    constructor(private _dataset: Array<string>) {
    }

    public calcIncreasesFromPrevious(): number {
        if (this._dataset.length <= 0) return 0;
        return this._dataset.reduce((acc, current, index, dataset) => {
            return Measurement.of(current).hasIncreasedFromPrevious(Measurement.of(dataset[index-1])) ? acc + 1: acc;
        }, 0);
    }

    public calcIncreasesFromPreviousSum(): number {
        if (this._dataset.length <= 0) return 0;
        return this._dataset.reduce((acc, current, index, dataset) => {
            return Measurement.ofSet([current, dataset[index + 1], dataset[index + 2]])
                .hasIncreasedFromPrevious(
                    Measurement.ofSet([ dataset[index - 1], current, dataset[index + 1]])
                ) ? acc + 1 : acc;
        }, 0);
    }
}