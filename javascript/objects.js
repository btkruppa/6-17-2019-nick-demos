// in JS you can create objects using literal notation, function constructors, or ES6 classes
let ship = {
  name: 'SS Failure',
  weaponry: true,
  color: 'black and red',
  aliens: true
}

// accessing fields can be done through . (dot) notation or [] (bracket) notation
console.log(`ship name: ${ship.name}
color: ${ship['color']}`)


// function as a constructor 
function Ship(name, weaponry, color, aliens) {
  this.name = name;
  this.weaponry = weaponry;
  this.color = color;
  this.aliens = aliens;
}

let anotherShip = new Ship('SS Revature', false, 'orange', true);
console.log(anotherShip);


// ES6 Class notation
class Foam {
  constructor(bubbles, density, smell, color) {
    this.bubbles = bubbles;
    this.density = density;
    this.smell = smell;
    this.color = color;
    
    // this.inflate = (amount) => {
    //   this.density += amount;
    // }
  }

  inflate(amount) {
    this.density += amount;
  }

}

let someFoam = new Foam(true, 'light', 'oranges', 'purple');
console.log(someFoam);