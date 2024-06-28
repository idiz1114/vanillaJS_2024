//로그인 폼과 그 하위 인풋, 버튼을 지정
const loginForm = document.querySelector("#login-form");
const loginButton = loginForm.querySelector("button");
const loginInput = loginForm.querySelector("input");

//로그인 성공 후 표시하는 프로필 UI를 지정
const profile = document.querySelector("#profile");
const greeting = profile.querySelector("h3");





const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY =""


//이벤트 리스너
//폼이 제출될 경우, 함수 onLoginSubmit을 실행한다.
loginForm.addEventListener("submit", onLoginSubmit);



//함수
//입력값을 로컬저장소에 저장하고 폼을 숨긴다.
function onLoginSubmit(event) {
  //HTML 폼의 기본(Default) 기능(이 경우 새로고침)을 없앤다.
  event.preventDefault();
  //로컬 저장소에 사용자명을 저장한다.
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  //로그인 폼을 숨긴다.
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // 로컬에 잘 저장이 되었는지 콘솔에 출력한다.
  console.log(USERNAME_KEY);
}



//선언
//로컬에 저장된 사용자명을 변수로 한 번 더 선언하고, 확인한다.
const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);



//함수
//저장한 사용자명을 언급하는 profile을 표시한다.
function paintGreetings() {
  profile.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `안녕하세요 ${savedUsername}님!`;
}



//조건문
//유저명이 저장되어 있지 않다면
if (savedUsername === null) {
  //로그인 폼을 표시한다.
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  //유저명이 저장되어 있다면.
} else {
  //paintGreetings 함수를 실행한다.
  paintGreetings();
}