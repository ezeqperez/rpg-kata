import { Faction } from "./faction";

export class Character {
	private _level: number;
	private _health: number;
	private _isAlive: boolean;
	private _maxRange: number;
	private _factions: Set<string>;
	private _factions2: Set<Faction>;

	constructor() {
		this._level = 1;
		this._health = 1000;
		this._isAlive = true;
		this._maxRange = 2;
		this._factions = new Set();
		this._factions2 = new Set();
	}

	get factions() {
		return this._factions;
	}


	get maxRange() {
		return this._maxRange;
	}

	set maxRange(maxRange: number) {
		this._maxRange = maxRange
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

	
	joinFaction(faction: string) {
		this._factions.add(faction)
	}

	leaveFaction(faction: string) {
		this._factions.delete(faction)
	}
	
	leaveFaction2(faction: Faction) {
		this._factions2.delete(faction)
	}

	joinFaction2(faction: Faction) {
		this._factions2.add(faction)
	}

	isAlly(character: Character) {
		for (let faction of this._factions) {
			if (character.factions.has(faction)) return true
		}
		return false
	}
	
	isInRange(distance: number) {
		return distance <= this._maxRange
	}

	private receiveDamage(damage: number) {
		if (damage >= this._health) {
			this._health = 0
			this._isAlive = false
		} else {
			this._health -= damage;
		}
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

	deliverHeal(character: Character, heal: number) {
		character.receiveHeal(heal)
	}
}
