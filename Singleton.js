class Singleton {
  static instance;
  name = "";

  constructor(name = "") {
    if (!!Singleton.instance) {
      return Singleton.instance;
    }

    Singleton.instance = this;
    this.name = name;
  }
}

const instanceOne = new Singleton("Class Singleton"); //One instance
const instanceTwo = new Singleton("Class Singleton Two"); // Second instance X

console.log(`I am ${instanceOne.name}`);
console.log(`I am ${instanceTwo.name}`); // It will return the same as the first
