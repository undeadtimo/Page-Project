const Cl = document.querySelector("#clock");

function everyClock() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1
  const day = date.getDate();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  Cl.innerText = `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분 ${seconds}초`;
}

everyClock();
setInterval(everyClock, 1000);