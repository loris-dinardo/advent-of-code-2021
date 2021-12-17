export class Command {
    private constructor(private _type: CommandType,
                        private _direction: number) {
    }

    public static of(stringValue: string): Command {
        const type = stringValue.split(" ")[0];
        const direction = Number.parseInt(stringValue.split(" ")[1]);
        return new Command(
            type === "forward" ? "HorizontalPosition" : "Depth",
            type === "up" ? direction * -1 : direction)
    }

    public calcNextHorizontalPosition(currentPosition: number): number {
        return this._type === "HorizontalPosition"
            ? currentPosition + this._direction
            : currentPosition;
    }

    public calcNextDepth(currentDepth: number): number {
        return this._type === "Depth"
            ? currentDepth + this._direction
            : currentDepth;
    }

    public calcNextDepthWithAim(currentDepth: number, currentAim: number): number {
        return this._type === "HorizontalPosition"
            ? currentDepth + (currentAim * this._direction)
            : currentDepth;
    }

    public calcNextAim(currentAim: number): number {
        return this._type === "Depth"
            ? currentAim + this._direction
            : currentAim;
    }
}

type CommandType = "HorizontalPosition" | "Depth"