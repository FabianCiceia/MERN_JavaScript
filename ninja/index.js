class Ninja {
    constructor(nombre) {
        this.nombre = nombre;
        this.salud = 100; // Valor predeterminado de salud
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName() {
        console.log(`Nombre registrado: ${this.nombre}`);
    }

    showStats() {
        console.log(`Nombre: ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}, Salud: ${this.salud}`);
    }

    drinkSake() {
        this.salud += 10;
        console.log(`mas 10 de salud: ${this.salud}`);
    }
    }

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

class Sensei extends Ninja {
    constructor(nombre) {
        super(nombre);
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log(`Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.`);
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.sayName();
superSensei.showStats();
superSensei.speakWisdom();
