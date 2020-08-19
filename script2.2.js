//Template string//
const name="Sally";
const age = 23;
const pet = "dog";

// const greeting = "hello" + name + "you seem to be doing " + greeting

const greetingBest = 'hello ${name} you seem to be ${age-10}. what a lovely ${pet} you have' ;

// default agrument //
 
function greet(name='', age = 29, pet="cat" ){
    return 'hello ${name} you seem to be ${age-10}. what a lovely ${pet} you have';
}