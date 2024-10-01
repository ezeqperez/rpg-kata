import { Character } from "./character";

export class Faction {
	private _name: string;
	private _members: Character[];
	private _limit: number;


	constructor(name: string) {
		this._name = name;
		this._members = new Array
		this._limit = 3;
	}

	get name() {
		return this._name;
	}

	get limit() {
		return this._limit;
	}

	set name(name: string) {
		this._name = name
	}

	get members() {
		return this._members;
	}

	addCharacter(character: Character) {
		if(this.members.length >= this.limit) return;
		this.members.push(character);
	}

	areAllys(membersToValidate: Character[]) {
		return membersToValidate.every( c => this.members.includes(c))
	}

	
	areAllyss(first: Character, second: Character) {
		return this.members.includes(first) && this.members.includes(second) 
	}

}
