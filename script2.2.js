const first = () => {
    const greet = 'Hi';
   const second = () => {
        alert (greet);
    }
    return second;
}
 
const newFunc = first();
newfunc();

//Closure - a fun ran, the function executed . It's never going to executed again.
//But its going to remember that there are reference to those variable 
//so the child scope always has access to the parent scope.

//Currying
const mutiply =(a,b) => a * b;
const curriedMultiply = (a) => (b) =>  a * b;
curriedMultiply(3);

//Compose 
const compose = (f,g) => (a) => f(g(a));

const sum =(num) => num + 1;

compose(sum, sum) (5);


//Avoiding Side Effects and functional purity.


var a= 1;
function b() {
    a =2;
}