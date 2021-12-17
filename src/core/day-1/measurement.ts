export class Measurement {
    private constructor(private _value: number | undefined) {
    }

    public static of(stringValue: string | undefined): Measurement {
        return new Measurement(stringValue ? parseInt(stringValue) : undefined)
    }

    public static ofSet(stringValues: Array<string | undefined>): Measurement {
        return stringValues.reduce((combinedMeasurement, current) => {
            return combinedMeasurement.combineWith(current);
        }, new Measurement(0));
    }

    public hasIncreasedFromPrevious(previousMeasurement: Measurement): boolean {
        if (previousMeasurement._value === undefined || this._value === undefined) return false;
        return previousMeasurement._value < this._value;
    }

    public combineWith(stringValue: string | undefined): Measurement {
        if (stringValue === undefined || this._value === undefined) return new Measurement(undefined);
        return new Measurement(parseInt(stringValue) + this._value);
    }
}