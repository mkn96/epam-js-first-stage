// Create 2 objects: animal and cat, add move property to animal object, cat object must inherit move property from object animal

class Animal {
    constructor(name) {
      this.animalName = name;
    }
    move() {
      return this.animalName + 'is moving';
    }
  }
  
  class Cat extends Animal {
    constructor(name, breed) {
      super(name);
      this.animalBreed = breed;
    }
    show() {
      return this.animalBreed + this.move();
    }
  }
  
  let myAnimal = new Cat("Kokos", "Scotish");
  console.log(myAnimal)


