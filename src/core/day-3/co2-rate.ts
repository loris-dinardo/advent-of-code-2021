import {LifeSupportDataExtractor} from "./life-support-data-extractor";
import {BinaryNumber} from "./binary-number";

export class Co2Rate {
    constructor(private _dataset: Array<string>) {
    }

    public calcInDecimal(): number {
        const lessCommonRate = new LifeSupportDataExtractor(this._dataset).extractingLessCommonRate();
        return new BinaryNumber(lessCommonRate.split("").map(s => parseInt(s))).toDecimal();
    }
}