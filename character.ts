import { Range } from "./range";
export class Character {
	private _level: number;
	private _health: number;
	private _isAlive: boolean;
	private _range: Range;

	constructor() {
		this._level = 1;
		this._health = 1000;
		this._isAlive = true;
		this._range = new Range(2);
	}

	get maxRange() {
		return this._range.range;
	}

	set range(range: Range) {
		this._range = range
	}

	get level() {
		return this._level;
	}

	set level(level: number) {
		this._level = level
	}

	get health() {
		return this._health;
	}

	get isAlive() {
		return this._isAlive;
	}

	deliverDamage(character: Character, damage: number) {
		if (this == character) return;
		
		character.receiveDamage(this.calculateDamage(character, damage));
	}

	private calculateDamage(character: Character, damage: number) {
		let levelGap = this._level - character.level
		let damageModifier = 1
		if (levelGap >= 5) {
			damageModifier = 1.5
		} else if (levelGap <= -5) {
			damageModifier = 0.5
		}
		return damage * damageModifier
	}

	receiveHeal(amount: number) {
		if (this._isAlive) {
			this._health += amount
			if (this._health > 1000) {
				this._health = 1000;
			}
		}
	}

	private receiveDamage(damage: number) {
		if (damage >= this._health) {
			this._health = 0
			this._isAlive = false
		} else {
			this._health -= damage;
		}
	}
}
