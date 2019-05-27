function onReady(){
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');

    if(!newToDoText.value){return;}

    toDos.push({
      title: newToDoText.value,
      complete: false
    });

    newToDoText.value= '';

    renderTheUI();

  };


  addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    createNewToDo();

    //get the text
    let title = newToDoText.value;

    //create a new li
    let newLi= document.createElement('li');

    //create a new input
    let checkbox = document.createElement('input');

    //set the input's type to checkbox
    checkbox.type = "checkbox";

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener('click', function(event){
      // this.parentElement
      toDoList.removeChild(this.parentElement);
    });

    //set the title
    newLi.textContent = title;

    //attach the checkbox to the li
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteBtn);
    //attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = "";

  });

  renderTheUI(){
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo){
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      newLi.textContent = toDo.title;

      toDoList.appendchild(newLi);
      newLi.appendChild(checkbox);

    });

  };

};


window.onload = function() {
  //alert("The window has loaded!");
  onReady();
};
