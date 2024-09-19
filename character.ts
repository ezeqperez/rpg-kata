export class Character {
	private _level: number;
	private _health: number;
	private _isAlive: boolean;
	private _maxRange: number;
	private _factions: string[];

	constructor() {
		this._level = 1;
		this._health = 1000;
		this._isAlive = true;
		this._maxRange = 2;
		this._factions = [];
	}

	get health() {
		return this._health;
	}

	get factions() {
		return this._factions;
	}

	get isAlive() {
		return this._isAlive;
	}

	get level() {
		return this._level;
	}

	set level(level: number) {
		this._level = level
	}

	get maxRange() {
		return this._maxRange;
	}

	set maxRange(maxRange: number) {
		this._maxRange = maxRange
	}

	deliverDamage(character: Character, damage: number) {
		if (this == character || this.isAlly(character)) return;
		
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

	enterFaction(faction: string){
		if(!this.factions.includes(faction)){
			return this.factions.push(faction)
		}
	}

	leaveFaction(faction: string){
		this.factions.forEach((item, index) => {
			if(item === faction) return this.factions.splice(index,1);
		  });
	}

	isAlly(character: Character){
		return this.factions.some(fation => character.factions.includes(fation))
	}

	isInRange(distance: number) {
		return distance <= this._maxRange
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
