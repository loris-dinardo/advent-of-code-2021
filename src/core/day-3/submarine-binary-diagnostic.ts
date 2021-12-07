import {PowerConsumptionDatasetExtractor} from "./power-consumption-dataset-extractor";
import {GamaRate} from "./gama-rate";
import {EpsilonRate} from "./epsilon-rate";
import {OxygenRate} from "./oxygen-rate";
import {Co2Rate} from "./co2-rate";

export class SubmarineBinaryDiagnostic {
    constructor(private _dataset: Array<string>) {
    }

    public calcPowerConsumption(): number {
        if (this._dataset.length === 0) return 0;
        const dataExtractor = new PowerConsumptionDatasetExtractor(this._dataset);
        const numberOfOne = dataExtractor.extractNumberOfOnes();
        const numberOfZero = dataExtractor.extractNumberOfZeros();
        return new GamaRate(numberOfZero, numberOfOne).calcInDecimal() *
            new EpsilonRate(numberOfZero, numberOfOne).calcInDecimal();
    }

    public calcLifeSupportRating(): number {
        const oxygen = new OxygenRate(this._dataset).calcInDecimal();
        const co2 = new Co2Rate(this._dataset).calcInDecimal();
        return oxygen * co2;
    }
}