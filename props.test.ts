import { Character } from './character';
import { Combat } from './combat';
import { Faction } from './faction';
import { Prop } from './props';


describe('Faction', () => {

    it('cannot', () => {
        const enterCombat = new Combat();

        const Thing = new Prop("Tree", 2000);
        const Char1 = new Character();

        enterCombat.attack(Char1, Thing, 2, 2000)

        expect(Thing.health).toBe(0)
    });
});