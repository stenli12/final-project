const clockContainer = document.querySelector(".clock"); // зробили зміну для класу годиника
function updateClock() {
  clockContainer.innerText = new Date().toLocaleTimeString(); //якимось чином функція запрацювала
}
setInterval(updateClock, 1000); // зробили інтервал для годиника
