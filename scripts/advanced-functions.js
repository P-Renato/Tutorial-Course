const num = 2;
const function1 = function greeting() {
    console.log('hello');
}; 

console.log(function1)
console.log(typeof function1);
function1();

const obj1 = {
    num: 2, 
    fun:  function() {
        console.log('hello3')
    }
};
obj1.fun();

function display(param){
    console.log(param);
}
display(2);

function run(param) {
    param();
}
run(function() {   // Callback function
    console.log('hello4');
});


setTimeout(function() {
    console.log('timeout');
}, 3000);

console.log('next line') // This line appears before 'timeout'


setInterval(function(){
    // console.log('interval');
}, 3000);

console.log('next line 2')