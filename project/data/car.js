export class Car {
    #brand;
    #model;
    speed = 0;
    isTrunkOpen = false;

    constructor(carDetails) {
        this.#brand = carDetails.brand;
        this.#model = carDetails.model;
    }

    displayInfo() {
        console.log(`${this.#brand} ${this.#model}, ${this.speed} km/h,
            ${this.isTrunkOpen}`)
    }

    go() {
        if (!this.isTrunkOpen) {
          this.speed += 5;
        }
    
        // Limit the speed to 200.
        if (this.speed > 200) {
          this.speed = 200;
        }
      }
    
      brake() {
        this.speed -= 5;
    
        // Limit the speed to 0.
        if (this.speed < 0) {
          this.speed = 0;
        }
      }

    openTrunk() {
        if (this.speed === 0) {
            this.isTrunkOpen = true;
        }
    }

    closeTrunk() {
            this.isTrunkOpen = false;
    }
}

class RaceCar extends Car {
    acceleration;
  
    constructor(carDetails) {
      super(carDetails);
      this.acceleration = carDetails.acceleration;
    }
    go() {
        if (!this.isTrunkOpen) {
          this.speed += this.acceleration;
        }
    
        // Limit the speed to 200.
        if (this.speed > 300) {
          this.speed = 300;
        }
    }

    openTrunk() {
        console.log("Race car has no trunk!")
    }

    closeTrunk() {
        console.log("Race car has no trunk!")
    }

}


const carObject1 = new Car({brand: 'Toyota', model: 'Corrola'});
const carObject2 = new Car({brand: 'Tesla', model: 'Model 3'});
const raceCarObject = new RaceCar({brand: 'McLaren', model: 'F1', acceleration: 20})


carObject1.go();
carObject1.go();
carObject1.openTrunk(); // tidak akan terbuka, mobil jalan
carObject1.brake();
carObject1.brake();
carObject1.openTrunk(); // sekarang terbuka, speed = 0
carObject1.go();        // tidak akan jalan, trunk terbuka
carObject1.displayInfo();

carObject2.go();
carObject2.go();
carObject2.displayInfo();

raceCarObject.go();
raceCarObject.go();
raceCarObject.displayInfo(); // harusnya speed = 40 (20+20)


