// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  // Declare properties of the Motorbike class
  // The properties should include vin, color, make, model, year, weight, top speed, and wheels
  // The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  // Create a constructor that accepts the properties of the Motorbike class
  // The constructor should call the constructor of the parent class, Vehicle
  // The constructor should initialize the properties of the Motorbike class
  // The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    super();
    //
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = [];
  }

  // Implement the wheelie method
  // The method should log the message "Motorbike [make] [model] is doing a wheelie!"
  wheelie() {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  // Override the printDetails method from the Vehicle class
  // The method should call the printDetails method of the parent class
  // The method should log the details of the Motorbike
  // The details should include the VIN, make, model, year, weight, top speed, color, and wheels
  override printDetails(): void {
    console.log(`
      VIN: ${this.vin}
      Make: ${this.make}
      Model: ${this.model}
      Year: ${this.year}
      Weight: ${this.weight}
      Top Speed: ${this.topSpeed}
      Wheels: ${this.wheels};
    `);
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
