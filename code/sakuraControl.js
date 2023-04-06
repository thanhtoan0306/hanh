var petal1pos = document.querySelector('#petal1');
var petal2pos = document.querySelector('#petal2');
var petal3pos = document.querySelector('#petal3');
var petal4pos = document.querySelector('#petal4');
var petal5pos = document.querySelector('#petal5');
var petal6pos = document.querySelector('#petal6');

var randomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
var max = window.innerWidth
// Logs something like 37
var rand = randomNumber(-30, max);
var rand2 = randomNumber(-30, max);
var rand3 = randomNumber(-30, max);
var rand4 = randomNumber(-30, max);
var rand5 = randomNumber(-30, max);
var rand6 = randomNumber(-30, max);
var rand7 = randomNumber(-30, max);
var rand8 = randomNumber(-30, max);
var rand9 = randomNumber(-30, max);
var rand10 = randomNumber(-30, max);
var rand11 = randomNumber(-30, max);
var rand12 = randomNumber(-30, max);
var rand13 = randomNumber(-30, max);
var rand14 = randomNumber(-30, max);
var rand15 = randomNumber(-30, max);
var rand16 = randomNumber(-30, max);
var rand17 = randomNumber(-30, max);
var rand18 = randomNumber(-30, max);
var rand19 = randomNumber(-30, max);
var rand20 = randomNumber(-30, max);
console.log(rand);

// Set left position to a random number between 85px and 210px
petal1pos.style.left = rand + 'px';
petal2pos.style.left = rand2 + 'px';
petal3pos.style.left = rand3 + 'px';
petal4pos.style.left = rand4 + 'px';
petal5pos.style.left = rand5 + 'px';
petal6pos.style.left = rand6 + 'px';
