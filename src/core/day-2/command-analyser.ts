import {Command} from "./command";

export class CommandAnalyser {
    private _commands: Array<Command>
    private _position: number = 0;
    private _depth: number = 0;
    private _aim: number = 0;

    private constructor(dataset: Array<string>) {
        this._commands = dataset.map(value => Command.of(value));
    }

    public static withDataset(dataset: Array<string>): CommandAnalyser {
        return new CommandAnalyser(dataset);
    }

    public calcHorizontalPosMultipliedByFinalDepth(): number {
        this.resetResultValues();
        this._commands.forEach((command) => {
            this._position = command.calcNextHorizontalPosition(this._position);
            this._depth = command.calcNextDepth(this._depth);
        });
        return this._position * this._depth;
    }

    public calcHorizontalPosMultipliedByFinalDepthDiffMeaning(): number {
        this.resetResultValues();
        this._commands.forEach((command) => {
            this._position = command.calcNextHorizontalPosition(this._position);
            this._aim = command.calcNextAim(this._aim);
            this._depth = command.calcNextDepthWithAim(this._depth, this._aim);
        });
        return this._position * this._depth;
    }

    private resetResultValues() {
        this._position = 0;
        this._depth = 0;
        this._aim = 0;
    }
}