import { Character } from "./character";

export class CharacterFactory{
    constructor(){}

    createMelee() {
        const character = new Character
        return character
    }
    
    createRanged() {
        const character = new Character
        character.maxRange = 20
        return character
    }
}