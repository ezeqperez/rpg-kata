import { Damageable } from "./Damageable";

export class Prop extends Damageable {
    private _name: string;

    constructor(name: string, maxHealth: number) {
        super(maxHealth);
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    get isDestroyed(): boolean {
        return this.health <= 0
    }
}