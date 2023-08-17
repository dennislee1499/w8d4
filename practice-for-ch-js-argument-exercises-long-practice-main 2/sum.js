
function sumWithArg() {
    let total = 0;
    for(let i=0; i<arguments.length; i++){
        total += arguments[i];
    }
    return total;
}


// console.log(sumWithArg(1,2,3,4))

function sumWithArg2(...arg) {
    let total = 0;
    for(let i=0; i<arg.length; i++){
        total += arg[i];
    }
    return total;
}

// console.log(sumWithArg2(1,2,3,4))







Function.prototype.myBind2 = function(ctx, ...bindArgs) {
    let that = this;
    
    return function (...callArgs) {
        //t//his (ctx.slice[1])/////
        return that.apply(ctx,bindArgs.concat(callArgs));
    };
};
/////////////
class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind2(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind2(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true
//  says()  bind(pavlov)

// bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind2(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind2(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true
//////////////////////////////////