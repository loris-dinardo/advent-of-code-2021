export class BinaryDiagnostic {
    public static calcPowerConsumption(values: Array<string>): number {
        if (values.length === 0) return 0;
        const numberOfBitsPerItem = values[0].length;
        const numberOfOne: Array<number> = new Array<number>(numberOfBitsPerItem).fill(0);
        const numberOfZero: Array<number> = new Array<number>(numberOfBitsPerItem).fill(0);
        values.forEach(item => {
            for (let i = 0; i < numberOfBitsPerItem; i++) {
                const bit = item[i];
                if (bit === "0") {
                    numberOfZero[i] = numberOfZero[i] + 1;
                } else {
                    numberOfOne[i] = numberOfOne[i] + 1;
                }
            }
        });
        const gamma = BinaryDiagnostic.common(numberOfZero, numberOfOne, 1, 0);
        const epsilon = BinaryDiagnostic.common(numberOfZero, numberOfOne, 0, 1);
        return BinaryDiagnostic.toDecimal(gamma) * BinaryDiagnostic.toDecimal(epsilon);
    }

    private static common(zeros: Array<number>, ones: Array<number>, whenOneOver: number, whenZeroOver: number): Array<number> {
        const result: Array<number> = new Array<number>(zeros.length).fill(0);
        for (let i = 0; i < zeros.length; i++) {
            result[i] = zeros[i] < ones[i] ? whenOneOver : whenZeroOver;
        }
        return result;
    }

    private static toDecimal(val: Array<number>): number {
        const str = val.join("");
        return parseInt(str, 2);
    }

    public static calcLifeSupportRating(values: Array<string>): number {
        const oxygen = BinaryDiagnostic.extractingRate(values, true);
        const co2 = BinaryDiagnostic.extractingRate(values, false);
        return parseInt(oxygen, 2) * parseInt(co2, 2);
    }

    private static extractingRate(values: Array<string>, mostCommon: boolean): string {
        let calcValues = [...values];
        const maxIndex = values[0].length;
        let calcIndex = 0;
        while (calcValues.length > 1 && calcIndex < maxIndex) {
            const mostLessCommon = mostCommon
                ? BinaryDiagnostic.commonAtIndex(calcValues, calcIndex, 1, 0, 1)
                : BinaryDiagnostic.commonAtIndex(calcValues, calcIndex, 0, 1, 0);
            calcValues = calcValues.filter(item => item[calcIndex] === mostLessCommon.toString());
            calcIndex++;
        }

        return calcValues[0];
    }

    private static commonAtIndex(values: Array<string>, index: number, whenOneOver: number, whenZeroOver: number, ifEquals: number): number {
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