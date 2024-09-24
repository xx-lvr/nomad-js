const toDoForm = document.getElementById("todo-form");
// ID가 "todo-form"인 요소를 선택하여 toDoForm 변수에 저장

const toDoInput = toDoForm.querySelector("#todo-form input");
// "todo-form" 내부의 input 요소를 선택하여 toDoInput 변수에 저장

const toDoList = document.getElementById("todo-list");
// ID가 "todo-list"인 요소를 선택하여 toDoList 변수에 저장

const TODOS_KEY = "todos";
// "todos"라는 문자열을 TODOS_KEY 변수에 저장 (localStorage의 키값으로 사용)

let toDos = [];
// 사용자가 추가한 할 일들을 저장할 배열

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // toDos 배열을 JSON 문자열로 변환하여 localStorage에 저장
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    // 클릭된 버튼의 부모 요소인 <li>를 선택하여 li 변수에 저장

    li.remove();
    // <li> 요소를 화면에서 제거

    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    // 삭제된 할 일의 id와 다른 id를 가진 할 일들만 toDos 배열에 남김

    saveToDos();
    // 변경된 toDos 배열을 다시 localStorage에 저장
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    // 새로운 <li> 요소를 생성하고 할 일의 id를 li의 id 속성으로 설정

    const span = document.createElement("span");
    span.innerText = newTodo.text;
    // 새로운 <span> 요소를 생성하고 할 일의 텍스트를 span에 설정

    const button = document.createElement("button");
    button.innerText = "❌";
    // 새로운 <button> 요소를 생성하고 "❌" 텍스트를 버튼에 설정

    button.addEventListener("click", deleteToDo);
    // 버튼에 클릭 이벤트 리스너를 추가하여 클릭 시 deleteToDo 함수 실행

    li.appendChild(span);
    li.appendChild(button);
    // <li> 요소에 <span>과 <button>을 자식 요소로 추가

    toDoList.appendChild(li);
    // <li> 요소를 toDoList(할 일 목록)에 추가하여 화면에 표시
}

function handleToDoSubmit(event) {
    event.preventDefault();
    // 폼 제출 시 페이지 새로고침을 막음

    const newTodo = toDoInput.value;
    // 사용자가 입력한 할 일 텍스트를 newTodo 변수에 저장

    toDoInput.value = "";
    // 입력 필드를 비워줌

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    // 할 일을 객체로 만들고 현재 시간을 id로 설정

    toDos.push(newTodoObj);
    // 새 할 일을 toDos 배열에 추가

    paintToDo(newTodoObj);
    // 새 할 일을 화면에 표시

    saveToDos();
    // toDos 배열을 localStorage에 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);
// 폼이 제출될 때 handleToDoSubmit 함수가 실행되도록 이벤트 리스너 추가

const savedToDos = localStorage.getItem(TODOS_KEY);
// localStorage에서 "todos" 키로 저장된 데이터를 가져옴

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    // 가져온 데이터를 배열로 변환하여 parsedToDos 변수에 저장

    toDos = parsedToDos;
    // toDos 배열에 저장된 할 일 목록을 복원

    parsedToDos.forEach(paintToDo);
    // 복원된 할 일 목록을 화면에 표시
}