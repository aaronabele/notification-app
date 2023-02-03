let visible = false;
let visible1 = false;
let visible2 = false;
let visible3 = false;
let visible4 = false;
let visible5 = false;
let visible6 = false;
let visible7 = false;

let counter = 3;

const btn = document.querySelector(".btn-read");
const notificationWebber = document.querySelector(
  ".section-notification-webber"
);
const notificationGray = document.querySelector(".section-notification-gray");
const notificationThompson = document.querySelector(
  ".section-notification-thompson"
);
const notificationRizky = document.querySelector(".section-notification-rizky");
const notificationSmith = document.querySelector(".section-notification-smith");
const notificationPeterson = document.querySelector(
  ".section-notification-peterson"
);
const notificationKim = document.querySelector(".section-notification-kim");

const quantity = document.querySelector(".header-qty");

document.body.style.setProperty("--dot-visibility-rizky", "none");
document.body.style.setProperty("--dot-visibility-smith", "none");
document.body.style.setProperty("--dot-visibility-peterson", "none");
document.body.style.setProperty("--dot-visibility-kim", "none");

function notificationAll() {
  btn.addEventListener("click", () => {
    visible = !visible;
    if (visible) {
      document.body.style.setProperty("--bg-color-webber", "white");
      document.body.style.setProperty("--bg-color-gray", "white");
      document.body.style.setProperty("--bg-color-thompson", "white");
      document.body.style.setProperty("--bg-color-rizky", "white");
      document.body.style.setProperty("--bg-color-smith", "white");
      document.body.style.setProperty("--bg-color-peterson", "white");
      document.body.style.setProperty("--bg-color-kim", "white");

      document.body.style.setProperty("--dot-visibility-webber", "none");
      document.body.style.setProperty("--dot-visibility-gray", "none");
      document.body.style.setProperty("--dot-visibility-thompson", "none");
      document.body.style.setProperty("--dot-visibility-rizky", "none");
      document.body.style.setProperty("--dot-visibility-smith", "none");
      document.body.style.setProperty("--dot-visibility-peterson", "none");
      document.body.style.setProperty("--dot-visibility-kim", "none");
      counter = 0;
      quantity.innerHTML = counter;
      btn.innerHTML = "Unread all";
    } else {
      document.body.style.setProperty(
        "--bg-color-webber",
        "hsl(211, 68%, 94%)"
      );
      document.body.style.setProperty("--bg-color-gray", "hsl(211, 68%, 94%)");
      document.body.style.setProperty(
        "--bg-color-thompson",
        "hsl(211, 68%, 94%)"
      );
      document.body.style.setProperty("--bg-color-rizky", "hsl(211, 68%, 94%)");
      document.body.style.setProperty("--bg-color-smith", "hsl(211, 68%, 94%)");
      document.body.style.setProperty(
        "--bg-color-peterson",
        "hsl(211, 68%, 94%)"
      );
      document.body.style.setProperty("--bg-color-kim", "hsl(211, 68%, 94%)");
      document.body.style.setProperty(
        "--bg-color-webber",
        "hsl(211, 68%, 94%)"
      );
      document.body.style.setProperty("--dot-visibility-webber", "");
      document.body.style.setProperty("--dot-visibility-gray", "");
      document.body.style.setProperty("--dot-visibility-thompson", "");
      document.body.style.setProperty("--dot-visibility-rizky", "");
      document.body.style.setProperty("--dot-visibility-smith", "");
      document.body.style.setProperty("--dot-visibility-peterson", "");
      document.body.style.setProperty("--dot-visibility-kim", "");
      counter = 7;
      quantity.innerHTML = counter;
      btn.innerHTML = "Mark all as read";
    }
  });
}

notificationAll();

function notifications() {
  notificationWebber.addEventListener("click", () => {
    visible1 = !visible1;
    if (visible1) {
      document.body.style.setProperty("--bg-color-webber", "white");
      document.body.style.setProperty("--dot-visibility-webber", "none");
      counter = counter - 1;
      quantity.innerHTML = counter;
    } else {
      document.body.style.setProperty(
        "--bg-color-webber",
        "hsl(211, 68%, 94%)"
      );
      document.body.style.setProperty("--dot-visibility-webber", "");
      counter = counter + 1;
      quantity.innerHTML = counter;
    }
  });

  notificationGray.addEventListener("click", () => {
    visible2 = !visible2;
    if (visible2) {
      document.body.style.setProperty("--bg-color-gray", "white");
      document.body.style.setProperty("--dot-visibility-gray", "none");
      counter = counter - 1;
      quantity.innerHTML = counter;
    } else {
      document.body.style.setProperty("--bg-color-gray", "hsl(211, 68%, 94%)");
      document.body.style.setProperty("--dot-visibility-gray", "");
      counter = counter + 1;
      quantity.innerHTML = counter;
    }
  });

  notificationThompson.addEventListener("click", () => {
    visible3 = !visible3;
    if (visible3) {
      document.body.style.setProperty("--bg-color-thompson", "white");
      document.body.style.setProperty("--dot-visibility-thompson", "none");
      counter = counter - 1;
      quantity.innerHTML = counter;
    } else {
      document.body.style.setProperty(
        "--bg-color-thompson",
        "hsl(211, 68%, 94%)"
      );
      document.body.style.setProperty("--dot-visibility-thompson", "");
      counter = counter + 1;
      quantity.innerHTML = counter;
    }
  });

  notificationRizky.addEventListener("click", () => {
    visible4 = !visible4;
    if (visible4) {
      document.body.style.setProperty("--bg-color-rizky", "hsl(211, 68%, 94%)");
      document.body.style.setProperty("--dot-visibility-rizky", "");
      counter = counter + 1;
      quantity.innerHTML = counter;
    } else {
      document.body.style.setProperty("--bg-color-rizky", "white");
      document.body.style.setProperty("--dot-visibility-rizky", "none");
      counter = counter - 1;
      quantity.innerHTML = counter;
    }
  });

  notificationSmith.addEventListener("click", () => {
    visible5 = !visible5;
    if (visible5) {
      document.body.style.setProperty("--bg-color-smith", "hsl(211, 68%, 94%)");
      document.body.style.setProperty("--dot-visibility-smith", "");
      counter = counter + 1;
      quantity.innerHTML = counter;
    } else {
      document.body.style.setProperty("--bg-color-smith", "white");
      document.body.style.setProperty("--dot-visibility-smith", "none");
      counter = counter - 1;
      quantity.innerHTML = counter;
    }
  });

  notificationPeterson.addEventListener("click", () => {
    visible6 = !visible6;
    if (visible6) {
      document.body.style.setProperty(
        "--bg-color-peterson",
        "hsl(211, 68%, 94%)"
      );
      document.body.style.setProperty("--dot-visibility-peterson", "");
      counter = counter + 1;
      quantity.innerHTML = counter;
    } else {
      document.body.style.setProperty("--bg-color-peterson", "white");
      document.body.style.setProperty("--dot-visibility-peterson", "none");
      counter = counter - 1;
      quantity.innerHTML = counter;
    }
  });

  notificationKim.addEventListener("click", () => {
    visible7 = !visible7;
    if (visible7) {
      document.body.style.setProperty("--bg-color-kim", "hsl(211, 68%, 94%)");
      document.body.style.setProperty("--dot-visibility-kim", "");
      counter = counter + 1;
      quantity.innerHTML = counter;
    } else {
      document.body.style.setProperty("--bg-color-kim", "white");
      document.body.style.setProperty("--dot-visibility-kim", "none");
      counter = counter - 1;
      quantity.innerHTML = counter;
    }
  });
}

notifications();
