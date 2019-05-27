const addItem = document.getElementById('initial-item-input');
const addItemBtn = document.getElementById('item-submit');
const list = document.querySelector('.list');


class Item {
  constructor (itemName){
    this.name = itemName;
    this.create();
  }

  create (){

    let listItem = document.createElement('div');
    listItem.classList.add('list-item');

    let input = document.createElement('input');
    input.type = "text";
    input.value = this.name;
    input.classList.add('item-edit-area');
    input.disabled = true;

    let editBtn = document.createElement('button');
    editBtn.type = "button";
    editBtn.innerText = 'edit';
    editBtn.classList.add('item-edit');
    editBtn.addEventListener('click', () => {
      this.edit(input);
    });

    let deleteBtn = document.createElement('button');
    deleteBtn.type = "button";
    deleteBtn.innerText = 'delete';
    deleteBtn.classList.add('item-delete');
    deleteBtn.addEventListener('click', () => {this.delete(listItem)});

    list.appendChild(listItem);
    listItem.appendChild(input);
    listItem.appendChild(editBtn);
    listItem.appendChild(deleteBtn);
  }

  edit (input){
    input.disabled = !input.disabled;
  }
  delete (listItem){
    listItem.parentNode.removeChild(listItem);
  }
}

addItemBtn.addEventListener('click', () => newItem());

function newItem(){
  if(addItem.value !== ''){
    new Item(addItem.value);
  }
}
