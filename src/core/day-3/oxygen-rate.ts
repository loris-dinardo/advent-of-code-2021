import {LifeSupportDataExtractor} from "./life-support-data-extractor";
import {BinaryNumber} from "./binary-number";

export class OxygenRate {
    constructor(private _dataset: Array<string>) {
    }

    public calcInDecimal(): number {
        const mostCommonRate = new LifeSupportDataExtractor(this._dataset).extractingMostCommonRate();
        return new BinaryNumber(mostCommonRate.split("").map(s => parseInt(s))).toDecimal();
    }
}