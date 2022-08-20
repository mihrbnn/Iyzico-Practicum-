let person = prompt("Lütfen isminizi giriniz.");
document.querySelector("#myName").innerHTML = person;
const days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];


function clock() {
  let dateTime = new Date();
  let day = days[dateTime.getDay()];
  let hrs = dateTime.getHours();
  let min = dateTime.getMinutes();
  let sec = dateTime.getSeconds();
  document.querySelector(
    "#myClock"
  ).innerHTML = `${hrs}: ${min}: ${sec} ${day} `;
}

setInterval(clock, 1000);
