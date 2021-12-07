export class PowerConsumptionDatasetExtractor {
    constructor(private _dataset: Array<string>) {
    }

    public extractNumberOfZeros(): Array<number> {
        return this.extractNumberWithBit("0");
    }

    public extractNumberOfOnes(): Array<number> {
        return this.extractNumberWithBit("1");
    }

    private extractNumberWithBit(bitValue: string): Array<number> {
        const numberOfBitsPerItem = this.numberOfBitsPerItem();
        const resultArray: Array<number> = new Array<number>(numberOfBitsPerItem).fill(0);
        this._dataset.forEach(item => {
            for (let i = 0; i < numberOfBitsPerItem; i++) {
                const bit = item[i];
                if (bit === bitValue) {
                    resultArray[i] = resultArray[i] + 1;
                }
            }
        });
        return resultArray;
    }

    private numberOfBitsPerItem(): number {
        return this._dataset[0].length;
    }
}