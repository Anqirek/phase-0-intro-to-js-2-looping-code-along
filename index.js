// Code your solutions in this file
//for (let age = 30; age < 40; age++){
    //console.log(`I'm ${age} years old. Happy Birthday to me!`);
//}
//let age is the initialization, (creating a variable, age.)That's gonna be used
// in the next three phases of loop. Using "let" since value of age needs
// to be incremented. CONDITION is age < 40. 
//s, "Run the code in the loop body until age is NOT less than 40.
//The iteration is age++, which increments the value of age by 1 after every pass through the loop. 
//The loop body is the set of statements that we want to run when the condition evaluates to true.

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}
wrapGifts(gifts);

const names = ["Lisa", "Kaitlin", "Jan"];
const events = ["Surprise","Surprise", "Surprise"];
function writeCards(names, events){
    let newArray=[];
    for ( let i = 0; i < names.length; i++){
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
    }
    return newArray;
}

function countDown(number) {
    while (number >= 0) {
    console.log(number);
    number--;
    }
};
countDown(11);
    