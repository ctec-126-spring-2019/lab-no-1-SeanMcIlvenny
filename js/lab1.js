// lab1.js

function reverseString(str) {
    return str.split("").reverse().join("");
}

function listSkills(){
    let skills = ['Web Development','Gardening','Drumming','Volunteering']; //missing end bracket
    let output = "<h2>Bruce's Skills</h2>"; //missing closing tag on h2
    output += '<ul>';
    for (let i = 0; i < skills.length; i++) {
    output += '<li>' + skills[i] + '</li>';
    }
    output += '</ul>';
    document.getElementById('skills').innerHTML = '<p>' + output + '</p>';
}

function getStarted(){
    let firstName = 'Bruce'; //missing semi colon and equal sign on variable assignment
    let lastName = 'Elgort';
    let collegeName = 'Clark College'; //missing semi colon
    let city = 'Vancouver, Washington';
    let gpa = 3.2;
    let output = `${firstName} ${lastName} is currently attending ${collegeName}, located in ${city} and has a grade point average of ${gpa}`;
    //output line was missing $ on lastName, city, and gpa

    document.getElementById('place1').innerHTML = '<p>' + output + '</p>';
    //quotes need to be same 
    document.getElementById('place2').innerHTML = '<p>' + reverseString(output) + '</p>';
}

window.onload = function(){
    getStarted();
    listSkills();
}