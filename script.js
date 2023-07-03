let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

//Form Submit Event 
form.addEventListener('submit', addItem);

//Remove Event
itemList.addEventListener('click', removeItem);

//FilterItem
filter.addEventListener('keyup', filterItems);


function addItem(e) {
    e.preventDefault();

    //get Input value
    var newItem = document.getElementById('item').value;

    //create li element
    let li = document.createElement('li');

    //create delete button
    let delButton = document.createElement('button');

    //add class to the button
    delButton.className = 'btn btn-danger btn-sm float-right delete'

    //adding X into del button
    delButton.appendChild(document.createTextNode('X'));

    let editButton = document.createElement('button');

    editButton.className = 'btn btn-sm float-right'

    editButton.appendChild(document.createTextNode('Edit'));

    //li class
    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(newItem));

    li.appendChild(delButton)

    li.appendChild(editButton)

    itemList.appendChild(li);
}


//function to remove an item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//Edit Button
let items = document.getElementsByClassName('list-group-item');



for (let i = 0; i < items.length; i++) {
    //creating Edit element
    let editButton = document.createElement('button');

    editButton.className = 'btn btn-sm float-right'

    //adding text into it
    editButton.appendChild(document.createTextNode('Edit'));
    items[i].appendChild(editButton);
}

function filterItems(e) {
    var text = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName('li');

    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text)!== -1) {
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none'
        }
    })
}

// function filterItems(e){
//     // convert text to lowercase
//     var text = e.target.value.toLowerCase();
//     // Get lis
//     var items = itemList.getElementsByTagName('li');
//     // Convert to an array
//     Array.from(items).forEach(function(item){
//       var itemName = item.firstChild.textContent;
//       if(itemName.toLowerCase().indexOf(text) != -1){
//         item.style.display = 'block';
//       } else {
//         item.style.display = 'none';
//       }
//     });
//   }