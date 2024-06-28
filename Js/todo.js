const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

//TODo 목록
let toDos = [];
//로컬저장소에서 불러올 이름 따로 지정
const TODOS_KEY ="toDos";

// [함수] 로컬저장소에 TODO 목록을 저장
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


// [함수] 입력되었을 때 실행할 함수들
function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text:newToDo,
    id:Date.now(),
  }
  console.log(toDos);
  //배열에 newToDo를 넣는다.
  toDos.push(newTodoObj);
  //newToDo를 HTML로 표시한다.
  paintToDo(newTodoObj);
  //로컬저장소에 저장한다.
  saveToDos(newToDo);
  }


// [함수] HTML로 입력한 TODO를 표시
function paintToDo(newToDo) {
  //입력된 TODO를 표시할 HTML Tag들을 생성
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.setAttribute("class","button");
  button.addEventListener("click", deleteToDo);
  //만든 Tag들의 하이라키를 정리
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}


toDoForm.addEventListener("submit", handleToDoSubmit);

// [함수] list에서 항목 삭제
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  console.log(li.id);
  //배열 내에서 이 함수의 조건문에 True를 반환하는 object만 남도록 함.
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  console.log(toDos);
  saveToDos();
}

function sayHello(item) {
  console.log("this is", item);
}

//함수 saveToDos와 헷갈리지 말기
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  let parsedToDos = JSON.parse(savedToDos);
  toDos= parsedToDos;
  parsedToDos.forEach(paintToDo);
}


