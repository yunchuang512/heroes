export class Engine {
  public cylinders = 4;
}

export class Tires {
  public make = 'Fline';
  public model = 'Square';
}

export class Car {
  public engin: Engine;
  public tires: Tires;
  public description = 'No DI';

  constructor() {
    this.engin = new Engine();
    this.tires = new Tires();
  }

  drive() {
    return `${this.description} car with` +
      `${this.engin.cylinders} cylinders and ${this.tires.make} tires`;
  }
}
