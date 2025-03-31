// 11 n

let myArr = ['hello', 'world', 'search', 'good'];

let index = -1;

for (let i=0; i<myArr.length; i++) {
    if (myArr[i] === 'search') {
        index = i;
    }
}
console.log(index)

// 11 o


let words = ['not', 'found'];

index = -1;

for (let i=0; i<words.length; i++) {
    if (words[i] === 'search') {
        index = i;
    }
}
console.log(index)


// 11 p

let wordsNew = ['hello', 'world', 'search', 'good', 'search'];

index = -1;

for (let i=0; i<wordsNew.length; i++) {
    if (wordsNew[i] === 'search') {
        index = i;
       break
    }
}
console.log(index)

// 11 q

function findIndex(array, word) {

    for (let i=0; i<array.length; i++){
        if (word === array[i]) {
            return i
        }
    }
    return -1
}

console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'))
console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'))

// 11 r

function removeEgg(foods){
    const result = [];

    for (let i=0; i<foods.length; i++) {
        if (foods[i] === 'egg'){
            continue;
        }  
        result.push(foods[i]);
    }
    return result;
}
console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

// 11 s

function removeEgg2(foods){
    const result = [];
    let eggsRemoved = 0;

    for (let i=0; i<foods.length; i++) {
        if (foods[i] === 'egg' && eggsRemoved < 2){
            eggsRemoved++;
            continue;
        }  
        result.push(foods[i]);
    }
    return result;
}
console.log(removeEgg2(['egg', 'apple', 'egg', 'egg', 'ham']));

// 11 t

function removeEgg3(foods){
    const reverseFoods = foods.reverse();

    const result = [];
    let eggsRemoved = 0;

    for (let i=0; i<reverseFoods.length; i++) {
        if (reverseFoods[i] === 'egg' && eggsRemoved < 2){
            eggsRemoved++;
            continue;
        }  
        result.push(reverseFoods[i]);
    }
    return result.reverse();
}
console.log(removeEgg3(['egg', 'apple', 'egg', 'egg', 'ham']));

// 11 u

function removeEgg3(foods){
    const reverseFoods = foods.slice();

    const result = [];
    let eggsRemoved = 0;

    for (let i=0; i<reverseFoods.length; i++) {
        if (reverseFoods[i] === 'egg' && eggsRemoved < 2){
            eggsRemoved++;
            continue;
        }  
        result.push(reverseFoods[i]);
    }
    return result;
}
console.log(removeEgg3(['egg', 'apple', 'egg', 'egg', 'ham']));

// 11 v 

for ( let num = 1; num <= 20; num++) {
    if (num % 3 === 0  && num%5 === 0) {
        console.log('FizzBuzz');
    } else if(num % 3 === 0) {
        console.log('Fizz');
    } else if (num%5 === 0) {
        console.log('Buzz');
    } else  {
        console.log(num)
    }   
}


// 11 w

function findIndex(array, word) {

    for (let i=0; i<array.length; i++){
        if (word === array[i]) {
            return i
        }
    }
    return -1
}

console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'))
console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'))

function unique(array) {
    const result = [];

    for(let i=0; i<array.length; i++) {
        const word = array[i];
        if(findIndex(result,word) === -1) {
            result.push(word);
        }
    }
    return result;
}
console.log(unique(['green', 'red', 'blue', 'red']));
console.log(unique(['red', 'green', 'green', 'red']));