
function ageInWeeks() {
    "use strict";
    const birthYear = prompt('What year were you born friend?');
    let ageInWeeks = (2022 - birthYear) * 52;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are ' + ageInWeeks + ' weeks old')
    h1.setAttribute('id', 'ageInWeeks');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInWeeks').remove();
}

/* With more learning in Vanilla JS, i need to add an eventListener and some other stuffs to make it more responsive. Especially if someone press alphabet, it should be displaying 'put in a number and not alphabet' */
    
    