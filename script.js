const btnAll = document.querySelector(".btn-read");
const sections = document.querySelectorAll("section");
const dots = document.querySelectorAll(".section-notification-dot");
const notiQty = document.querySelector(".header-qty");

//Set Counter as Var for Notification Qty
let counter = 0;

//Set additional  classlist for btnAll
btnAll.classList.add("markAll");

function updateCounter() {
  counter = sections.filter((section) =>
    section.classList.contains("unread")
  ).length;
  notiQty.innerHTML = counter;
}

//Set additional classlists for all notifications
function firstState() {
  //setCounter(3);
  for (let i = 0; i < 3; i++) {
    sections[i].classList.add("unread");
  }
  updateCounter();
}
firstState();

//Set first State of Notifications
//Über CSS gelöst. standard als display: block und bei den unread sections auf display: inline-block gesetzt

//Button "Mark all as read" & "Unread all"
function markAllUnreadAll() {
  btnAll.addEventListener("click", () => {
    if (btnAll.classList.value === "btn-read markAll") {
      for (let i = 0; i < sections.length; i++) {
        btnAll.classList.remove("markAll");
        btnAll.classList.add("unreadAll");
        btnAll.innerHTML = "Unread All";
        sections[i].classList.remove("unread");
      }
    } else {
      for (let i = 0; i < sections.length; i++) {
        btnAll.innerHTML = "Mark all as read";
        btnAll.classList.add("markAll");
        btnAll.classList.remove("unreadAll");
        sections[i].classList.add("unread");
      }
    }
    updateCounter();
  });
}
markAllUnreadAll();

//Enable single read and unread
function singleReadAndUnread() {
  for (let i = 0; i < sections.length; i++) {
    sections[i].addEventListener("click", () => {
      if (sections[i].classList.value === "section-notification unread") {
        sections[i].classList.remove("unread");
      } else {
        sections[i].classList.add("unread");
      }
      updateCounter();
    });
  }
}
singleReadAndUnread();
