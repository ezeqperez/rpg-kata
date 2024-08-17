Para inicializar el proyecto, sigue estos pasos:

## Inicializa el proyecto y añade TypeScript:

---
npm init -y
npm install --save-dev typescript
---

## Configura TypeScript:

---
npx tsc --init
---

## Instala Jest y las demás dependencias:

---
npm install --save-dev jest ts-jest @types/jest
---

## Configura Jest para TypeScript:

---
npx ts-jest config:init
---

Esto te permitirá realizar pruebas unitarias con Jest en tu proyecto TypeScript.


## Ejemplo de clase Typescript

class User {
  // Atributos (propiedades)
  private firstName: string;
  private lastName: string;
  private age: number;

  // Constructor
  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // Métodos (funciones)
  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public isAdult(): boolean {
    return this.age >= 18;
  }

  public setAge(newAge: number): void {
    if (newAge >= 0) {
      this.age = newAge;
    } else {
      throw new Error("Age cannot be negative");
    }
  }
}

## Uso de la clase
const user = new User("John", "Doe", 25);
console.log(user.getFullName()); // "John Doe"
console.log(user.isAdult());     // true

user.setAge(30);
console.log(user.isAdult());     // true

## Intentar establecer una edad negativa arrojará un error
try {
  user.setAge(-5);
} catch (error) {
  console.error(error.message); // "Age cannot be negative"
}


## Ejemplo Jest

import { User } from './User'; // Asegúrate de que la ruta sea correcta

describe('User class', () => {
  it('should return the full name', () => {
    const user = new User('John', 'Doe', 25);
    expect(user.getFullName()).toBe('John Doe');
  });

  it('should return true if the user is an adult', () => {
    const adultUser = new User('Jane', 'Doe', 30);
    const minorUser = new User('Jane', 'Doe', 17);

    expect(adultUser.isAdult()).toBe(true);
    expect(minorUser.isAdult()).toBe(false);
  });

  it('should allow setting a valid age', () => {
    const user = new User('John', 'Doe', 25);
    user.setAge(30);
    expect(user.isAdult()).toBe(true);
  });

  it('should throw an error when setting a negative age', () => {
    const user = new User('John', 'Doe', 25);
    expect(() => user.setAge(-5)).toThrow('Age cannot be negative');
  });
});
