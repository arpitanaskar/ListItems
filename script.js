let newDiv = document.createElement('div');
let text = document.createTextNode("HEllo");
newDiv.appendChild(text);




let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);


let secDiv = document.createElement('div');
let secDivText = document.createTextNode("HEllo");
secDiv.appendChild(secDivText);

let listGroup = document.querySelector('.list-group'); // Select the container directly
let item1 = document.querySelectorAll('.list-group-item')[0];

listGroup.insertBefore(secDiv, item1);