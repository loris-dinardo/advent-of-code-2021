import {BinaryNumber} from "./binary-number";

export class EpsilonRate {
    constructor(private _zerosInDataset: Array<number>,
                private _onesInDataset: Array<number>) {
    }

    public calcEpsilonRateInDecimal(): number {
        const numberOfBitsInDataset = this.numberOfBitsInDataset();
        const result: Array<number> = new Array<number>(numberOfBitsInDataset).fill(0);
        for (let i = 0; i < numberOfBitsInDataset; i++) {
            result[i] = this._zerosInDataset[i] < this._onesInDataset[i] ? 0 : 1;
        }
        return new BinaryNumber(result).toDecimal();
    }

    private numberOfBitsInDataset(): number {
        return this._zerosInDataset.length;
    }
}