import { Character } from './character';
import { Faction } from './faction';

describe('Faction', () => {

    it('test faction', () => {
        const firstCharacter = new Character();
        const secondCharacter = new Character();

        const horda = new Faction("Horda");
        const alizanza = new Faction("Alianza");

        firstCharacter.addFaction(horda)
        secondCharacter.addFaction(alizanza)

        expect(firstCharacter.factions.includes(horda)).toBe(true)
        expect(secondCharacter.factions.includes(alizanza)).toBe(true)
    });


    it('test faction 2', () => {
        const firstCharacter = new Character();
        const secondCharacter = new Character();

        const horda = new Faction("Horda");
        const alizanza = new Faction("Alianza");

        firstCharacter.addFaction(horda)
        secondCharacter.addFaction(alizanza)

        expect(horda.characters.includes(firstCharacter)).toBe(true)
        expect(alizanza.characters.includes(secondCharacter)).toBe(true)
    });


    it('personajes son aliados', () => {
        const thrall = new Character();
        const sylvanas = new Character();
        const zuljin = new Character();

        const horda = new Faction("Horda");

        thrall.addFaction(horda)
        sylvanas.addFaction(horda)
        zuljin.addFaction(horda)

        expect(horda.areAllys([thrall, sylvanas, zuljin])).toBe(true)
    });

    it('personajes son aliados', () => {
        const thrall = new Character();
        const sylvanas = new Character();
        const zuljin = new Character();

        const anduin = new Character();

        const horda = new Faction("Horda");

        thrall.addFaction(horda)
        sylvanas.addFaction(horda)
        zuljin.addFaction(horda)

        expect(horda.areAllys([thrall, sylvanas, zuljin, anduin])).toBe(false)
    });
});