import { HealthEntity } from "./healthEntity";

export class Prop extends HealthEntity {
    private _name: string;

    constructor(name: string, maxHealth: number) {
        super(maxHealth);
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    onDestroy(): void {
        console.log(`*${this._name}* has been destroyed!`);
    }
}