// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

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
    wait = (minutes) => {
        this.tiredness += 2 * minutes;
        this.hunger += 2 * minutes;
        this.loneliness += 4 * minutes;
        this.happiness -= 2 * minutes;
    };
}

// B) Make Boots wait 20 minutes and call then console.log(boots);
let boots = new Cat('Boots', 'Simaese');
boots.wait(20);

console.log(boots);