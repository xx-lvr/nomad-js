const loginForm = document.querySelector("#login-form"); 
// ID가 "login-form"인 요소를 선택하여 loginForm 변수에 저장
const loginInput = document.querySelector("#login-form input");
// "login-form" 내부의 첫 번째 input 요소를 선택하여 loginInput 변수에 저장
const greeting = document.querySelector("#greeting");
// ID가 "greeting"인 요소를 선택하여 greeting 변수에 저장
const HIDDEN_CLASSNAME = "hidden";
// "hidden"이라는 문자열을 HIDDEN_CLASSNAME 변수에 저장 (숨김 처리를 위한 클래스명)
const USERNAME_KEY = "username";
// "username"이라는 문자열을 USERNAME_KEY 변수에 저장 (localStorage 키값으로 사용)
function onLoginSubmit(event) {
  event.preventDefault();
  // 폼 제출 시 발생하는 기본 동작(페이지 새로고침)을 막음
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // 폼에 "hidden" 클래스를 추가하여 폼을 숨김
  const username = loginInput.value;
  // loginInput에 입력된 값을 username 변수에 저장
  localStorage.setItem(USERNAME_KEY, username);
  // 입력된 username을 localStorage에 저장
  paintGreetings();
  // 저장된 username을 화면에 표시하는 함수 호출
}
function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  // localStorage에서 "username" 키로 저장된 값을 불러옴
  greeting.innerText = `Hello ${username}`;
  // 불러온 username 값을 포함하여 인사말을 greeting 요소에 표시
  greeting.classList.remove(HIDDEN_CLASSNAME);
  // greeting 요소에서 "hidden" 클래스를 제거하여 인사말을 화면에 표시
}
const savedUsername = localStorage.getItem(USERNAME_KEY);
// localStorage에서 "username" 키로 저장된 값을 savedUsername 변수에 저장
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // savedUsername이 없으면 loginForm에서 "hidden" 클래스를 제거하여 폼을 표시
  loginForm.addEventListener("submit", onLoginSubmit);
  // 폼이 제출될 때 onLoginSubmit 함수를 실행하도록 이벤트 리스너 추가
} else {
  paintGreetings(savedUsername);
  // savedUsername이 있으면 paintGreetings 함수를 호출하여 인사말을 표시
}