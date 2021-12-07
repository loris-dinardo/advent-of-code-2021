export class LifeSupportDataExtractor {
    constructor(private _dataset: Array<string>) {
    }

    public extractingMostCommonRate(): string {
        let calcValues = [...this._dataset];
        const maxIndex = this._dataset[0].length;
        let calcIndex = 0;
        while (calcValues.length > 1 && calcIndex < maxIndex) {
            const mostCommon = this.commonAtIndex(calcValues, calcIndex, 1, 0, 1);
            calcValues = calcValues.filter(item => item[calcIndex] === mostCommon.toString());
            calcIndex++;
        }

        return calcValues[0];
    }

    public extractingLessCommonRate(): string {
        let calcValues = [...this._dataset];
        const maxIndex = this._dataset[0].length;
        let calcIndex = 0;
        while (calcValues.length > 1 && calcIndex < maxIndex) {
            const lessCommon = this.commonAtIndex(calcValues, calcIndex, 0, 1, 0);
            calcValues = calcValues.filter(item => item[calcIndex] === lessCommon.toString());
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