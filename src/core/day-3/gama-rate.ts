import {BinaryNumber} from "./binary-number";

export class GamaRate {
    constructor(private _zerosInDataset: Array<number>,
                private _onesInDataset: Array<number>) {
    }

    public calcInDecimal(): number {
        const numberOfBitsInDataset = this.numberOfBitsInDataset();
        const result: Array<number> = new Array<number>(numberOfBitsInDataset).fill(0);
        for (let i = 0; i < numberOfBitsInDataset; i++) {
            result[i] = this._zerosInDataset[i] < this._onesInDataset[i] ? 1 : 0;
        }
        return new BinaryNumber(result).toDecimal();
    }

    private numberOfBitsInDataset(): number {
        return this._zerosInDataset.length;
    }
}