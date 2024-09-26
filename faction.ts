import { Character } from "./character";

export class Faction {
	private _name: string;
	private _characters: Character[];
	private _limit: number;


	constructor(name: string) {
		this._name = name;
		this._characters = new Array
		this._limit = 2;
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

	get characters() {
		return this._characters;
	}

	addCharacter(character: Character) {
		if(this.characters.length >= this.limit) return;
		this.characters.push(character);
	}

	areAllys(charactersToValidate: Character[]) {
		return charactersToValidate.every( c => this.characters.includes(c))
	}

	
	areAllyss(first: Character, second: Character) {
		return this.characters.includes(first) && this.characters.includes(second) 
	}

}
