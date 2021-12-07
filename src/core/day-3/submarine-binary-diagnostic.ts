import {PowerConsumptionDatasetExtractor} from "./power-consumption-dataset-extractor";
import {GamaRate} from "./gama-rate";
import {EpsilonRate} from "./epsilon-rate";

export class SubmarineBinaryDiagnostic {
    constructor(private _dataset: Array<string>) {
    }

    public calcPowerConsumption(): number {
        if (this._dataset.length === 0) return 0;
        const dataExtractor = new PowerConsumptionDatasetExtractor(this._dataset);
        const numberOfOne = dataExtractor.extractNumberOfOnes();
        const numberOfZero = dataExtractor.extractNumberOfZeros();
        return new GamaRate(numberOfZero, numberOfOne).calcGamaRateInDecimal() *
            new EpsilonRate(numberOfZero, numberOfOne).calcEpsilonRateInDecimal();
    }

    public calcLifeSupportRating(): number {
        const oxygen = this.extractingRate(this._dataset, true);
        const co2 = this.extractingRate(this._dataset, false);
        return parseInt(oxygen, 2) * parseInt(co2, 2);
    }

    private extractingRate(values: Array<string>, mostCommon: boolean): string {
        let calcValues = [...values];
        const maxIndex = values[0].length;
        let calcIndex = 0;
        while (calcValues.length > 1 && calcIndex < maxIndex) {
            const mostLessCommon = mostCommon
                ? this.commonAtIndex(calcValues, calcIndex, 1, 0, 1)
                : this.commonAtIndex(calcValues, calcIndex, 0, 1, 0);
            calcValues = calcValues.filter(item => item[calcIndex] === mostLessCommon.toString());
            calcIndex++;
        }

        return calcValues[0];
    }

    private commonAtIndex(values: Array<string>, index: number, whenOneOver: number, whenZeroOver: number, ifEquals: number): number {
        let numberOfOne = 0;
        let numberOfZero = 0;
        values.forEach(item => {
            const bit = item[index];
            if (bit === "0") {
                numberOfZero = numberOfZero + 1;
            } else {
                numberOfOne = numberOfOne + 1;
            }
        });
        if (numberOfZero === numberOfOne) return ifEquals;
        return numberOfOne > numberOfZero ? whenOneOver : whenZeroOver;
    }
}