const button = decoment.querySelector('button');
const input = document.querySelector('input');
const list = document.querySelector('ul');

button.addEventlistener('click', addProduct);

function addProduct() {
    let inputvalue = input.value;
    let listItem = document.createElement('li');
    
}