//Projekti/3_Tehtävälista/CSS-osuus/Eriko Korhonen/26.4.2021
//Tämä on vielä kesken/28.4.2021
//Selectors
const listaInput = document.querySelector(".lista-input");
const listaButton = document.querySelector(".lista-button");
const tehtavaLista = document.querySelector(".tehtava-lista");

//Event Listeners
listaButton.addEventListener("click", addLista);
tehtavaLista.addEventListener('click'deleteCheck); //function deleteCheck
//Functions
function addLista(event)
{
  //console.log('hei');

  //Prevent form from submitting
  event.preventDefault();}

  //Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //Create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //CHECK VALMIS BUTTON
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  listaDiv.appendChild(completedButton);

  //CHECK ROSKA BUTTON
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("roska-btn");
  listaDiv.appendChild(trashButton);

  //Liitä TO LIST
  todoList.appendChild(listaDiv);

  //Poista todoInput Value
  todoInput.value = "";
}

function deleteCheck(e)
{
//  console.log(e.target);
  const item = e.target;
  //DELETE TODO
  if (item.classList[0] === "roska-btn")
  {
    const todo = item.parentElement;
    todo.remove();
  }

  //CHECK MARK
  if (item.classList[0] === "valmis-btn")
  {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}
