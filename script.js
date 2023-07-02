// 

document.querySelector('.list-group-item:nth-child(2)').style.backgroundColor = "green";
document.querySelector('.list-group-item:nth-child(3)').style.display = "none";


let list = document.querySelectorAll('.list-group-item');
list[1].style.color = "green"

for (let i=0; i<list.length; i+=2) { 
        list[i].style.backgroundColor = "green";
}