const nums = [10, 20, 30 ];

nums.push(99)

console.log(nums)



function getLastValue (array) {
    const lastIndex = array.length - 1;
    return array[lastIndex];  
}


console.log(getLastValue([1, 20, 22, 24, 5]))
console.log(getLastValue(['hi', 'hello', 'hey']))


function arraySwap(array) {
    const lastIndex = array.length - 1;

    const lastValue = array[lastIndex];
    const firstValue = array[0];

    array[0] = lastValue;
    array[lastIndex] = firstValue;

    return array
}

console.log(arraySwap([1, 20, 22, 24, 5]))
console.log(arraySwap(['hi', 'hello', 'hey']))

console.log('------------------------------')


let evenNums = []

for (let i=0; i<=10; i += 2) {
    console.log(i)
}
console.log('------------------------------')

let i = 0;

while (i <= 10) {
    console.log(i)
    i += 2;
    console.log('------------------------------')
    
    console.log(i) // Why here goes up to 12?
}
console.log('------------------------------')

let decreaseNums = '';

for (let i=5; i>=0; i--) {
    console.log(i)
}
console.log('------------------------------')

i = 5;

while (i >= 0) {
    console.log(i)
    i--
}
console.log('------------------------------')

const numsAddedOne = [1, 2, 3]
const result = []

for (let i=0; i < numsAddedOne.length; i++) {
    result.push(numsAddedOne[i] + 1);
    
}
console.log(numsAddedOne)
console.log(result)



console.log('------------------------------')

function addOne (array){
    const result = [];
    for (let i=0; i<array.length; i++) {
        result.push(array[i] + 1)
    }
    return result
}

console.log(addOne([1, 2, 3]))
console.log(addOne([-2, -1, 0, 99]))



console.log('------------------------------')

function addNum(array, num) {
    let result = [];
    for (i=0; i<array.length; i++) {
        result.push(array[i] + num)
    }

    return result
}

console.log(addNum([1, 2, 3], 2))
console.log(addNum([1, 2, 3], 3))
console.log(addNum([-2, -1, 0, 99], 2))

console.log('------------------------------')

function addArrays(array1, array2) {
    let result = [];
    for (i=0; i<array1.length; i++) {
        for (i=0; i<array2.length; i++)
        result.push(array1[i] + array2[i])
    }
    return result
}

console.log(addArrays([1, 1, 2], [1, 1, 3]))
console.log(addArrays([1, 2, 3], [4, 5, 6]))

console.log('------------------------------')

function countPositive(nums) {
    let positiveNum = 0;
    for (i=0; i<nums.length; i++) {
        if (nums[i] > 0) {
            positiveNum++;
        }
    }
    return positiveNum;
}

console.log(countPositive([1, -3, 5]))
console.log(countPositive([-2, 3, -5, 7, 10]))

console.log('------------------------------')

function minMax(nums) {
    const result = {
        min: nums[0],
        max: nums[0]
    };
    for (i=0; i<nums.length; i++) {
        const value = nums[i];

        if (value < result.min) {
            result.min = value
        }

        if (value > result.max) {
            result.max = value
        }
    }
    return result;
}

console.log(minMax([1, -3, 5]))
console.log(minMax([-2, 3, -5, 7, 10]))
console.log(minMax([]))
console.log(minMax([3]))

console.log('------------------------------')

function countWords (words) {
    const result = {};

    for (i=0; i<words.length; i++) {
        const word = words[i];

        if (!result[word]) {
            result[word] = 1;
        } else {
            result[word]++;
        }
    }
    return result;
}

console.log(countWords(['apple', 'grape', 'apple', 'apple']))





console.log('------------------------------')