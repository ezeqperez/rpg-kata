import { Faction } from "./faction";
import { Damageable } from "./Damageable";

export class Character extends Damageable {
	private _name: string;
	private _level: number;
	private _maxRange: number; 
	private _factions: Faction[];

	constructor() {
		super(1000)
		this._name = "Character Unknown"
		this._level = 1;
		this._maxRange = 2;
		this._factions = []
	}

	get name() {
		return this._name;
	}

	set name(name: string) {
		this._name = name
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

	get isAlive() {
		return this.health > 0;
	}

	addFaction(faction: Faction) {
		this.factions.push(faction);
		faction.addCharacter(this)
	}

	deliverDamage(target: Damageable, damage: number) {
		if (this == target) return;
		if (target instanceof Character) {
			if (this.isAlly(target)) return;
			return target.receiveDamage(this.calculateDamage(target, damage));
		}
		target.receiveDamage(damage)

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

	receiveHeal(amount: number): void {
        if (this.isAlive) {
            this._health = Math.min(this._maxHealth, this._health + amount);
        }
    }

	deliverHeal(target: Character, heal: number) {
		if (!this.factions.some(fac => fac.areAllyss(this, target))) return;
		target.receiveHeal(heal);
	}

	isAlly(target: Character): boolean {
        return this.factions.some(faction => faction.areAllys([this, target]));
    }
	
	isInRange(distance: number) {
		return distance <= this._maxRange
	}
}
