
function ageInWeeks() {
    "use strict";
    var birthYear = prompt('What year were you born friend?');
    var ageInWeeks = (2022 - birthYear) * 52;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInWeeks + ' weeks old')
    h1.setAttribute('id', 'ageInWeeks');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInWeeks').remove();
}


    
    