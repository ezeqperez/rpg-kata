import { Character } from "./character";
import { Range } from "./range";

export class CharacterFactory{
    constructor(){}

    createMelee() {
        const character = new Character
        return character
    }
    
    createRanged() {
        const character = new Character
        const range = new Range(20)
        character.range = range
        return character
    }
}