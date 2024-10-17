export class Damageable {
    protected _health: number;
    protected _maxHealth: number;

    constructor(maxHealth: number) {
        this._maxHealth = maxHealth;
        this._health = maxHealth;
    }

    get health(): number {
        return this._health;
    }

    receiveDamage(damage: number): void {
        this._health = Math.max(0, this._health - damage);
    }
}