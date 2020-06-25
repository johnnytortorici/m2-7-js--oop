// Exercise 1.3
// ------------
// Creating a Cat class - Part 3

// A) In the previous exercises, we created a Cat class and used it to create a
//    `boots` object.
//    Rewrite that Cat class, but let's also add some functions that will
//    modify the various porperties of a cat.
//    Write methods that will update tiredness, hunger, loneliness, and
//    happiness.

// HINT: You need to write arrow functions here. () => {}
// - Write a sleep method that accept hours and reduces tiredness by 5 times
//   that number. So if the cat has a tiredness of `50`, and sleeps for 10
//   hours, their tiredness will be reduced to 0 (10 * 5).
// - Write an eat method that accept number of kibbles and reduces hunger by 1/5
//   that number.
// - Write an play method that accept minutes and reduces loneliness by 3 times
//   that number.
// - the happiness property should be modified all of the above methods as well.
//
// You decide how much sleep, eat, and play affects your cat's happiness.

class Cat {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
        this.species = 'cat';
        this.tiredness = 0;
        this.hunger = 0;
        this.loneliness = 0;
        this.happiness = 0;
    };
    sleep = (hours) => {
        this.tiredness -= 5 * hours;
        this.happiness += hours;
    };
    eat = (kibbles) => {
        this.hunger -= (1/5) * kibbles;
        this.happiness += (1/5) * kibbles;
    };
    play = (minutes) => {
        this.loneliness -= 3 * minutes;
        this.tiredness += 5 * minutes;
        this.happiness += 5 * minutes;
    };
}

// B) call the different methods with appropriate values and then console.log boots to see what happened to the property values.
let boots = new Cat('Boots', 'Simaese');
boots.sleep(8);
boots.eat(50);
boots.play(10);

console.log(boots);
