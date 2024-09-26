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

    it('un jugador nuevo no debe pertenecer a ninguna faccion', () => {
        const characterFactory = new CharacterFactory();
        const character1 = characterFactory.createMelee()
        expect(character1.factions).toBeNull;
    });

    it('un jugador puede unirse a una o mas facciones', () => {
        const characterFactory = new CharacterFactory();
        const character1 = characterFactory.createMelee()
        character1.joinFaction("Mordor")
        character1.joinFaction("La Comunidad")
        expect(character1.factions.has("Mordor")).toBe(true);
        expect(character1.factions.has("La Comunidad")).toBe(true);
    });

    it('un jugador puede dejar a una o mas facciones', () => {
        const characterFactory = new CharacterFactory();
        const character1 = characterFactory.createMelee();
        character1.joinFaction("Mordor");
        character1.joinFaction("La Comunidad");
        character1.joinFaction("La Campora");
        character1.leaveFaction("Mordor");
        character1.leaveFaction("La Comunidad");
        expect(character1.factions.has("Mordor")).toBe(false);
        expect(character1.factions.has("La Comunidad")).toBe(false);
        expect(character1.factions.has("La Campora")).toBe(true);
    });

    it('Jugadores de la misma faccione son considerados aliados', () => {
        const characterFactory = new CharacterFactory();
        const ally1 = characterFactory.createMelee();
        const ally2 = characterFactory.createMelee();
        const enemy1 = characterFactory.createMelee();
        const enemy2 = characterFactory.createMelee();
        ally1.joinFaction("La Campora");
        ally2.joinFaction("La Campora");
        expect(ally1.isAlly(ally2)).toBe(true);
        expect(ally2.isAlly(ally1)).toBe(true);
        expect(ally1.isAlly(enemy1)).toBe(false);
        expect(enemy1.isAlly(enemy2)).toBe(false);
    });

    it('Jugadores aliados no pueden hacer daño el uno al otro', () => {
        const characterFactory = new CharacterFactory();        
        const enterCombat = new Combat();
        const allyAttaker = characterFactory.createMelee();
        const allyDefender = characterFactory.createMelee();
        const enemyAttaker = characterFactory.createMelee();        
        allyAttaker.joinFaction("La Campora");
        allyDefender.joinFaction("La Campora");
        enemyAttaker.joinFaction("LLA");
        enterCombat.attack(allyAttaker, allyDefender, 2, 100);
        expect(allyDefender.health).toBe(1000);
        enterCombat.attack(enemyAttaker, allyDefender, 2, 100);
        expect(allyDefender.health).toBe(900);
    });

    it('Solo jugadores aliados pueden curarse entre si', () => {
        const characterFactory = new CharacterFactory();        
        const enterCombat = new Combat();
        const allyHealer = characterFactory.createMelee();
        const allyToHeal = characterFactory.createMelee();        
        const enemy = characterFactory.createMelee();        
        allyHealer.joinFaction("La Campora");
        allyToHeal.joinFaction("La Campora");
        enemy.joinFaction("LLA");
        enterCombat.attack(enemy, allyToHeal, 2, 200);
        enterCombat.heal(allyHealer, allyToHeal, 50);
        expect(allyToHeal.health).toBe(850);
        enterCombat.heal(enemy, allyToHeal, 150);
        expect(allyToHeal.health).toBe(850);
    });
})