//1 code


const array = [1,2,10, 16];

const double =[]
const newArray = array.forEach((num) =>{
   double.push(num *2);
})
 console.log(double);
    




 //map, filter, reduce




 //2 code

 const array = [1,2,10, 16];

const double =[]
const newArray = array.forEach((num) =>{
   double.push(num *2);
})
 console.log(double);


 const mapArray = array.map((num)=>{
     return num *2;
 });

  console.log(mapArray);


//3 code


const array = [1,2,10, 16];

const double =[]
const newArray = array.forEach((num) =>{
   double.push(num *2);
})
 console.log('forEach',double);


 const mapArray = array.map((num)=>{
     return num *2;
 });

  console.log('map',mapArray);



//
//
//
//
const array = [2,4,6,8,10];

const double =[]
const newArray = array.forEach(num =>{
   double.push(num *4);
})
 console.log('forEach',double);
 
// array map

 const mapArray = array.map(num => num *4);

  console.log('map',mapArray);



  //
  //
  //
  //

const array = [2,4,6,8,10];

const double =[]
const newArray = array.forEach(num =>{
   double.push(num *4);
})
 console.log('forEach',double);

// arrat map

 const mapArray = array.map(num => num *4);

  console.log('map',mapArray);

//array filter

const filterArray = array.filter(num => num> 5);
console.log('filter', filterArray);

//
//
//
//
//

const array = [2,4,6,8,11];

const double =[]
const newArray = array.forEach(num =>{
   double.push(num *4);
})
 console.log('forEach',double);

// arrat map

 const mapArray = array.map(num => num *4);

  console.log('map',mapArray);

//array filter

const filterArray = array.filter(num => num> 5);
console.log('filter', filterArray);


// array reduce

const reducrArray = array.reduce((accumulator,num)=> {
    return accumulator + num;
}, 0)

console.log('reduce', reducrArray);



//
//
//
//
//basic 
const array = [10,11,14,5,90,22];

const double =[]
const newArray = array.forEach(num =>{
   double.push(num *5);
})
 console.log('forEach',double);

// arrat map

 const mapArray = array.map(num => num *4);

  console.log('map',mapArray);

//array filter

const filterArray = array.filter(num => num> 5);
console.log('filter', filterArray);


// array reduce

const reducrArray = array.reduce((accumulator,num)=> {
    return accumulator + num;
}, 10)

console.log('reduce', reduceArray);