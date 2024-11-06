// Interactive To-Do List: Create a simple to-do list app that allows users to add, remove, and mark tasks as completed.

const toDoLists = document.querySelector(".toDoList ");
const listValue = document.querySelector(".todoValue");
let display = document.querySelector(".toDoList");
const refreshedata = JSON.parse(localStorage.getItem("todoData")) || [];
console.log(refreshedata, "datataaaa");
loadTask();

let todoListValue = [];
let list = [];
let idAssign;

const getTodoListFromLS = () => {
  return JSON.parse(localStorage.getItem("todoData")) || [];
};

const addTodoListLocalStorage = (todo) => {
  console.log(todo, "todo>>>>>>>>>>>>");
  //   return localStorage.setItem("todoData", JSON.stringify(prev=>[...prev, data]));
};
const showTodoList = () => {
  todoListValue = getTodoListFromLS();
  toDoLists.innerHTML = "";
  todoListValue.forEach((curTodo) => {
    console.log("curreentt ", curTodo);

    const liContainer = document.createElement("div");
    const liElement = document.createElement("li");

    liElement.innerHTML = curTodo;
    liContainer.appendChild(liElement);
    toDoLists.appendChild(liContainer);
  });
};

function loadTask() {
  refreshedata.forEach(printTodos);
}
const removeTodoList = (e) => {
  console.log("broo", e.target.value);
  const elemTarget = e.target;

  const todoItem = elemTarget.closest("li");
  const elemText = e.target.textContent.trim();
  const updatedTodoList = todoListValue.filter(
    (curTodoValue) => curTodoValue !== elemText
  );
  printTodos(updatedTodoList);
  console.log(updatedTodoList, "update");
  //   toDoLists.innerHTML = "";
  if (todoItem && typeof elemTarget.remove === "function") {
    todoItem.remove();
  } else {
    console.log("error");
  }
  toDoLists.innerHTML = "";
  localStorage.clear();
  //   showTodoList();
  console.log(updatedTodoList);
};
// const generateId=(len)=>{

//     let id='';
//     for(let i=0;i<=len; i++){
//         const random=Math.floor(Math.random()*1000)

//         id+=random;
//       console.log(id)

//     }
//     return id;
// }
// generateId(3);

// const generateId= function(size){
//     let newId=Math.random();
//    if( newId===0){
//     newId=newId.Floor(newId*1000)
//    }
// }

// }

// const gen=(round)=>{
//     while( round > 0 ) {
//     round--;
//   let id=  Math.random().toString().concat("0".repeat(3));
//  id=id.substring(2,3);

//  console.log(id)}
//     }
//     gen(3);

const genid = () => {
  //   let rand = "";
  //   let d = 0;
  //   while (d < 3) {
  //     rand += Math.floor(Math.random() * 10);
  //     console.log(rand);
  //     d++;
  //   }
  //   console.log(rand);
  return new Promise((resolve) => {
    let genId = Math.floor(Math.random() * 1000);
    console.log(typeof genId);
    genId = genId.toString();
    console.log("ehhh", typeof genId);
    genId = genId.padStart(3, 0);
    genId = Number(genId);
    resolve(genId);
  });
};

// const addToDoList = (e) => {
//   e.preventDefault();
//   todoListValue = getTodoListFromLS();
//   console.log("object>>>>>>", todoListValue)
//   let newToDo = listValue.value.trim();

//   //    newToDo=newToDo.split(" ")
//   //    newToDo.push(idVal);
//   //    console.log(newToDo,newToDo.push(idVal))
//   if (newToDo.length !== 0) {
//     let idVal ={id: "", value:""}
//     async function idCall() {
//        idVal = {
//         id: await genid(),
//         value: newToDo,
//       };
//     }
//     idCall()
//     todoListValue.push(idVal);
//     console.log('yoooo',todoListValue)
//     // todoListValue = [
//     //   ...todoListValue
//     // ]; /* duplicate value in local storage dlt  */
//     /* after refreshing UI same data as local storage will be shownin it */
//     addTodoListLocalStorage(todoListValue);
//     // l    ocation.reload();

//     const liElement = document.createElement("li");
//     liElement.innerHTML = newToDo;
//     toDoLists.appendChild(liElement);
//     // liElement.className = "listC";

//     const checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.setAttribute("id", "checkB");
//     checkbox.className = "checkbox";
//     liElement.appendChild(checkbox);
//     console.log(checkbox);
//   } else {
//     alert("plese enter valid input");
//   }
// };
// function printToDoList(){
//     let display=''
// for(let i=0;i<list.length;i++){

//    display +=`<div>${list[i]}</div>`
// }
// console.log(display)
// }

/*const todos=[];
//     const input= document.querySelector('.taskField');
//     const taskInput=input.value;
// function addtodo(){

//     todos.push(taskInput);

// }

//     // const input= document.querySelector('.taskField');
//     // const taskInput=input.value;
//     if(taskInput.length===0){
//         alert('please enter a task')
//     }
//   else{
//  function printTodos(){
//     const list=document.querySelector('.toDoList');
//     list.innerHTML=''
//     for(let i=0;i<todos.length;i++){
//     const alist=document.createElement('li');
//    const listItem= alist.appendChild(document.createTextNode(todos[i]));
//     list.appendChild(listItem);*/

function printTodos() {
  if (!display) {
    alert("plese enter a task !dISPLAY");
    return;
  } else {
    if (refreshedata.length !== 0) {
      display.textContent = refreshedata.value;
    } else {
      while (display.hasChildNodes()) {
        display.removeChild(display.firstChild);
      }
    }
    printList();
    listValue.value = "";
    // console.log("listtttt>>>", display, liElement);
  }
}

function printList() {
  let localStorageList = JSON.parse(localStorage.getItem("todoData")) || [];
  localStorageList &&
    localStorageList.map((item) => {
      console.log("list is here coming from local>>>>>>>>.", item);

      let spanContainer = document.createElement("div");
      let liContainer = document.createElement("div");
      liContainer.className = "liCont";

      toDoLists.appendChild(liContainer);
      let liElement = document.createElement("li");
      console.log("liiii>>>", liElement);
      liElement.innerHTML = item.value;
      liElement.id = item.id;
      liContainer.appendChild(liElement);
      spanContainer.className = "spanContainer";

      let containerButtons = document.createElement("div");
      containerButtons.className = "buttonCon";
      spanContainer.appendChild(containerButtons);
      liContainer.appendChild(spanContainer);
      console.log("check", containerButtons);

      const doneButton = document.createElement("button");
      doneButton.textContent = "Done";
      
      doneButton.addEventListener("click", (e) => {
           e.preventDefault();
            liElement.classList.toggle("lineThrough");   
            console.log("doneeee>>>>")  
      });

      doneButton.className = "deleteTask done";
      doneButton.id = "done";
      containerButtons.appendChild(doneButton);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "deleteTask delete";
      deleteButton.id = "delete";
      containerButtons.appendChild(deleteButton);

      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.className = "deleteTask edit";
      containerButtons.appendChild(editButton);
      deleteButton.addEventListener("click", () => {
        let localStorageToDO =
          JSON.parse(localStorage.getItem("todoData")) || [];
        const itemId = liElement.id;
        console.log("localStorageToDO", localStorageToDO);
        liContainer.removeChild(liElement);
        const updatedList = localStorageToDO.filter((task) => {
          return task.id !== Number(itemId);
        });       
        console.log("updated", updatedList);
        localStorage.setItem("todoData", JSON.stringify(updatedList));


        //     myTask.remove()
        //     // window.location.href="in"

        //   for(let i=0;i<refreshedata.length;i++){
        //     idCall()
        // const arrayRem= document.getElementById('idAssign')
        // console.log( "id",arrayRem)
        //   localStorage.removeItem('idAssign')}

        //   / removeTodoList(remove)
        // removeTodoList()
        // localStorage.removeItem(e.target)
        // localStorage.removeItem(
        //     "todoData",

        //   );
      }); 

    
      editButton.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("edit")
        const update=prompt("edit task:", liElement.textContent);
        liElement.innerText=update;
        console.log("edittttt", liElement)
      });
    });
}

function addToDoListTest(e) {
  e.preventDefault();
  console.log(listValue.value);

  if (listValue.length !== 0) {
    async function idCall() {
      console.log("iddddddd");
      idVal = {
        id: await genid(),
        value: listValue.value.trim(),
      };

      list.push(idVal);
      idAssign = idVal.id;
      const localStorageLS = localStorage.setItem(
        "todoData",
        JSON.stringify(list)
      );
      printTodos();
    }
    idCall();
  }
}

const btn = document.querySelector("#btn1");
btn.addEventListener("click", (e) => {
  addToDoListTest(e);
  //   printTodos();
});
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", (e) => removeTodoList(e));

//     e.preventDefault();
//     const todos=[];
//     const input= document.querySelector('.taskField');
//     const taskInput=input.value;
// function addtodo(){

//     todos.push(taskInput);

// }

//     // const input= document.querySelector('.taskField');
//     // const taskInput=input.value;
//     if(taskInput.length===0){
//         alert('please enter a task')
//     }
//   else{
//  function printTodos(){
//     const list=document.querySelector('.toDoList');
//     list.innerHTML=''
//     for(let i=0;i<todos.length;i++){
//     const alist=document.createElement('li');
//    const listItem= alist.appendChild(document.createTextNode(todos[i]));
//     list.appendChild(listItem);

//     // const checkbox=document.createElement('input');
//     // checkbox.type='checkbox';
//     // listItem.appendChild(checkbox);

//     list.appendChild(listItem);
//     }
//     }
//     addtodo();
//     printTodos()
// //     document.querySelector('.toDoList').innerHTML=
// //     `
// //    <li> ${taskInput}</li>
// //    <input type="checkbox">
// //     </div>`;

// }
// document.getElementsByClassName('listContainer')[0].style.display='block';

// })
//
