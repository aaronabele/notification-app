const btnAll = document.querySelector(".btn-read");
const sections = document.querySelectorAll("section");
const dots = document.querySelectorAll(".section-notification-dot");
const notiQty = document.querySelector(".header-qty");

//Set Counter as Var for Notification Qty
let counter = 3;
notiQty.innerHTML = counter;

//Set additional  classlist for btnAll
btnAll.classList.add("markAll");

//Set additional classlists for all notifications
function firstState() {
  for (let i = 0; i < sections.length; i++) {
    if (
      sections[i] != sections[0] &&
      sections[i] != sections[1] &&
      sections[i] != sections[2]
    ) {
      sections[i].classList.add("read");
    } else {
      sections[i].classList.add("unread");
    }
  }
}
firstState();

//Set first State of Notifications
function initializeNotifications() {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].classList.value === "section-notification unread") {
      sections[i].style.backgroundColor = "hsl(211, 68%, 94%)";
      dots[i].style.display = "";
    } else {
      sections[i].style.backgroundColor = "white";
      dots[i].style.display = "none";
    }
  }
}
initializeNotifications();

//Button "Mark all as read" & "Unread all"
function markAllUnreadAll() {
  btnAll.addEventListener("click", () => {
    if (btnAll.classList.value === "btn-read markAll") {
      for (let i = 0; i < sections.length; i++) {
        sections[i].style.backgroundColor = "white";
        dots[i].style.display = "none";
        btnAll.classList.remove("markAll");
        btnAll.classList.add("unreadAll");
        btnAll.innerHTML = "Unread All";
        sections[i].classList.remove("unread");
        sections[i].classList.add("read");
        counter = 0;
        notiQty.innerHTML = counter;
      }
    } else {
      for (let i = 0; i < sections.length; i++) {
        sections[i].style.backgroundColor = "hsl(211, 68%, 94%)";
        dots[i].style.display = "";
        btnAll.innerHTML = "Mark all as read";
        btnAll.classList.add("markAll");
        btnAll.classList.remove("unreadAll");
        sections[i].classList.add("unread");
        sections[i].classList.remove("read");
        counter = 7;
        notiQty.innerHTML = counter;
      }
    }
  });
}
markAllUnreadAll();

//Enable single read and unread
function singleReadAndUnread() {
  for (let i = 0; i < sections.length; i++) {
    sections[i].addEventListener("click", () => {
      if (sections[i].classList.value === "section-notification unread") {
        sections[i].style.backgroundColor = "white";
        dots[i].style.display = "none";
        sections[i].classList.remove("unread");
        sections[i].classList.add("read");
        counter -= 1;
        notiQty.innerHTML = counter;
      } else {
        sections[i].style.backgroundColor = "hsl(211, 68%, 94%)";
        dots[i].style.display = "";
        sections[i].classList.add("unread");
        sections[i].classList.remove("read");
        counter += 1;
        notiQty.innerHTML = counter;
      }
    });
  }
}

singleReadAndUnread();
