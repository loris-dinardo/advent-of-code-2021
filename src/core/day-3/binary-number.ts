export class BinaryNumber {
    constructor(private _binary: Array<number>) {
    }

    public toDecimal() {
        const binaryInString = this._binary.join("");
        return parseInt(binaryInString, 2);
    }
}