import { CharacterFactory} from './characterFactory'; 
import { Combat } from './combat'; 

describe('Character', () => {

    it('Melee debe tener "maxRange = 2" y tener los valores de character', () => {
        const characterFactory = new CharacterFactory();
        const melee = characterFactory.createMelee()
        expect(melee.maxRange).toBe(2);
        expect(melee.level).toBe(1);
        expect(melee.isAlive).toBe(true);
    });

    it('Ranged debe tener "maxRange = 20" y tener los valores de character', () => {
        const characterFactory = new CharacterFactory();
        const ranged = characterFactory.createRanged()
        expect(ranged.maxRange).toBe(20);
        expect(ranged.level).toBe(1);
        expect(ranged.isAlive).toBe(true);
    });

    it('Si está en rango, debe realizar el ataque', () => {
        const characterFactory = new CharacterFactory();
        const enterCombat = new Combat();
        const attacker = characterFactory.createMelee()
        const defender = characterFactory.createMelee()
        enterCombat.attack(attacker, defender, 1, 100)
        expect(defender.health).toBe(900);
    });

    it('Si el rango es igual a la distancia, debe realizar el ataque', () => {
        const characterFactory = new CharacterFactory();
        const enterCombat = new Combat();
        const attacker = characterFactory.createMelee()
        const defender = characterFactory.createMelee()
        enterCombat.attack(attacker, defender, 2, 100)
        expect(defender.health).toBe(900);
    });

    it('Si no está en rango, no debe realizar el ataque', () => {
        const characterFactory = new CharacterFactory();
        const enterCombat = new Combat();
        const attacker = characterFactory.createMelee()
        const defender = characterFactory.createMelee()
        enterCombat.attack(attacker, defender, 3, 100)
        expect(defender.health).toBe(1000);
    });
})