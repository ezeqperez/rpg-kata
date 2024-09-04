import { CharacterFactory} from './characterFactory'; 

describe('Character', () => {

    it('Melee debe tener "maxRange = 2" y tener los valores de character', () => {
        const characterFactory = new CharacterFactory();
        const melee = characterFactory.createMelee()
        expect(melee.maxRange).toBe(2);
        expect(melee.level).toBe(1);
        expect(melee.isAlive).toBe(true);
    });

    it('Ranged debe tener "maxRange = 2" y tener los valores de character', () => {
        const characterFactory = new CharacterFactory();
        const ranged = characterFactory.createRanged()
        expect(ranged.maxRange).toBe(20);
        expect(ranged.level).toBe(1);
        expect(ranged.isAlive).toBe(true);
    });

})