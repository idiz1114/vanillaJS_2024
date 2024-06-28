const clock = document.querySelector("h3#now-time");


function nowTime() {
  const date = new Date();
  const hour =  String(date.getHours()).padStart(2,"0");
  const minute = String(date.getMinutes()).padStart(2,"0");
  const second = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hour}:${minute}:${second}`;
}

nowTime();
setInterval(nowTime, 1000);



