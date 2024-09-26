import { Character } from "./character";

export class Faction {
    private _name: string;
    private _members: Character[];
    private _maxMembers: number;

    constructor() {
        this._maxMembers = 2
    }

    get name() {
        return this._name
    }

    set name(name: string) {
        this._name = name
    }

    get members() {
        return this._members
    }
    
    set members(member: Character) {
        this._members 
    }
} 