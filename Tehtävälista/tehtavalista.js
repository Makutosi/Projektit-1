//Projekti/3_Tehtävälista/JS-osuus/Eriko Korhonen/26.4.2021
//Tämä on vielä kesken/28.-30.4.2021
//Selectors
const listaInput = document.getElementById("lista-input");
const listaButton = document.querySelector(".lista-button");
const tehtavaLista = document.querySelector(".tehtava-lista");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
//submit buttonin event
listaButton.addEventListener("click", (e) => {
  e.preventDefault();
  if(listaInput.value.length > 0) {
      addLista();
  } else{
      alert("Tekstikenttä ei voi olla tyhjä");
  }
});
tehtavaLista.addEventListener("click", deleteCheck); //function deleteCheck
filterOption.addEventListener("click", filterTodo);

//Functions
function addLista()
{
  //console.log('hei');

  //Prevent form from submitting
  //event.preventDefault();

 //Todo DIV ->
  const listaDiv = document.createElement("div");
  listaDiv.classList.add("todo");

  //Create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = listaInput.value;
  newTodo.classList.add("todo-item");
  listaDiv.appendChild(newTodo);

  //ADD TODO TO lOCALSTORAGE
  saveLocalTodos(listaInput.value);

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
  tehtavaLista.appendChild(listaDiv);//<-

  //Poista todoInput Value
  listaInput.value = "";
}

function deleteCheck(e)
{
  console.log(e.target);
  const item = e.target;
  //DELETE TODO
  if (item.classList[0] === "roska-btn")
  {
    const todo = item.parentElement;
    //Animation
    todo.classList.add("fall");
    removeLocalTodos(todo);
    todo.addEventListener("transitionend",function()
    {
    todo.remove();
  });
  }
  //CHECK MARK
  if (item.classList[0] === "complete-btn")
  {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

function filterTodo(e)
{
   const todos = tehtavaLista.childNodes;
//  console.log(todos);
   todos.forEach(function(todo)
  {
  switch (e.target.value)// select>option>value "all"
   {
    case "all":
     todo.style.display = "flex";  //block
     break;
    case "completed":
      if(todo.classList.contains("completed"))
      {
        todo.style.display = "flex";
      }
      else
      {
        todo.style.display = "none";
      }
      break;
    case "uncompleted":
      if(todo.classList.contains("completed"))
      {
      todo.style.display = "flex";
      }
      else
      {
        todo.style.display = "none";
      }
      break;

    }
 });
}

function saveLocalTodos(todo)
{
  //CHECK -- Hey Do I already have thing in there?
  let todos;
  if (localStorage.getItem('todos') === null)
  {
    todos = [];
  }
  else
    {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
 }

function getTodos()
{
    //console.log("hello");
    //let todos;
    //CHECK --Hey Do I already have thing in there?
  let todos;
  if (localStorage.getItem("todos") === null)
  {
    todos = [];
  }
  else
    {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo)
    {
        //Todo DIV
         const todoDiv = document.createElement("div");
         todoDiv.classList.add("todo");

         //Create LI
         const newTodo = document.createElement("li");
         newTodo.innerText =listaInput.value;
         newTodo.classList.add("todo-item");
         todoDiv.appendChild(newTodo);

        /* //ADD TODO TO lOCALSTORAGE
         saveLocalTodos(todoInput.value);*/

         //CHECK MARK BUTTON
         const completedButton = document.createElement("button");
         completedButton.innerHTML = '<i class="fas fa-check"></i>';
         completedButton.classList.add("complete-btn");
         todoDiv.appendChild(completedButton);

         //CHECK trash BUTTON
         const trashButton = document.createElement("button");
         trashButton.innerHTML = '<i class="fas fa-trash"></i>';
         trashButton.classList.add("roska-btn");
         todoDiv.appendChild(trashButton);

         //Liitä TO LIST
         tehtavaLista.appendChild(listaDiv);
      });
 }

  function removeLocaltodos(todo)
  {
    //CHECK -- HEY Do I already have thing in there?
    let todos;
    if (localStorage.getItem("todos") === null)
    {
      todos = [];
    }
    else
      {
        todos = JSON.parse(localStorage.getItem("todos"));
      }
      console.log(todo.children[0].innerText);
      const todoIndex = todo.children[0].innerText;
      console.log(todos.indexOf("potato"));
      todos.splice(todos.indexOf(todoIndex),1);
      localStorage.setItem("todos", JSON.stringify(todos));
  }


  //const todos = ['apple', 'john', 'donut', 'babyboy'];

  //todos.indexOf('john') -> 1
  //console.log(todos.indexOf("john"));
  //const johnIndex = todos.indexOf("john");

  //todos.splice(johnIndex, 1);

  //console.log(todos);  -> john poistettu


////localStorage.clear();
