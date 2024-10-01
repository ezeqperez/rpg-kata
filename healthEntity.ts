export abstract class HealthEntity {
    protected _health: number;
    protected _maxHealth: number;
    protected _isAlive: boolean;

    constructor(maxHealth: number) {
        this._maxHealth = maxHealth;
        this._health = maxHealth;
        this._isAlive = true;
    }

    get health(): number {
        return this._health;
    }

    get isAlive(): boolean {
        return this._isAlive;
    }

    receiveDamage(damage: number): void {
        this._health = Math.max(0, this._health - damage);
        if (this._health === 0) {
            this._isAlive = false;
            this.onDestroy();
        }
    }

    abstract onDestroy(): void;
}