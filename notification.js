"use strict";

const allRead = document.querySelector("#all-read"),
  notificationNum = document.querySelector("#notification-num"),
  notificationCard = document.querySelectorAll(".post");

let notification = notificationCard.length;

allRead.addEventListener("click", function () {
  if (notification > 0) {
    notificationNum.innerHTML = `${notification - notificationCard.length}`;
    notificationCard.forEach((card) => card.classList.remove("unread-card"));
  }
});

notificationCard.forEach((card) => {
  card.addEventListener("click", function () {
    if (notification > 0) {
      notification = notification - 1;
      card.classList.remove("unread-card");
      notificationNum.innerHTML = `${notification}`;
    }
  });
});
