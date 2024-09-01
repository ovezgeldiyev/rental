// modals start
const modal = document.querySelector("#modal-1");
const content1 = modal.querySelector(".content1");
const content2 = modal.querySelector(".content2");
const content3 = modal.querySelector(".content3");

const closeBtns = document.querySelectorAll(".modallClose").forEach((e) => {
  e.addEventListener("click", function (x) {
    var ModalId = x.target.dataset.modal;
    document.querySelector("#" + ModalId).classList.remove("active");
    content2.classList.remove("active");
    content3.classList.remove("active");
    content1.classList.add("active");
  });
});
const modallBtn = document.querySelectorAll(".modallBtn");
const modallItems = document.querySelectorAll(".modall");
modallBtn.forEach((e) => {
  onTabClick3(modallBtn, modallItems, e);
});
function onTabClick3(modallBtns, modallItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-mod");
    let currentTab = document.querySelector(tabId);
    if (e.srcElement.classList.contains("active")) {
      e.srcElement.classList.remove("active");
    } else if (!currentBtn.classList.contains("active")) {
      modallBtns.forEach(function (item) {
        item.classList.remove("active");
      });
      modallItems.forEach(function (item) {
        item.classList.remove("active");
      });
      //currentBtn.classList.add('active');
      currentTab.classList.add("active");
    }
  });
  window.addEventListener("click", () => {
    modallItems.forEach((black) => {
      if (black == event.target) {
        black.classList.remove("active");
        content2.classList.remove("active");
        content3.classList.remove("active");
        content1.classList.add("active");
      }
    });
  });
}
// modals end

const introItems = document.querySelectorAll(".introRent__item");
introItems.forEach((introItem) => {
  const drop = introItem.querySelector(".introRent__drop");
  introItem.onclick = () => {
    if (drop) {
      if (drop.classList.contains("active")) {
        drop.classList.remove("active");
      } else {
        drop.classList.add("active");
        introItems.forEach((introItem2) => {
          const drop2 = introItem2.querySelector(".introRent__drop");
          if (drop2) {
            if (introItem !== introItem2) {
              if (drop2.classList.contains("active")) {
                drop2.classList.remove("active");
              }
            }
          }
        });
      }
    }
  };
});
const datetimes = document.querySelector("#datetimes");
if (datetimes) {
  datetimes.onfocus = () => {
    introItems.forEach((introItem) => {
      const drop = introItem.querySelector(".introRent__drop");
      if (drop) {
        drop.classList.remove("active");
      }
    });
  };
}
window.addEventListener("click", (e) => {
  introItems.forEach((introItem) => {
    const drop = introItem.querySelector(".introRent__drop");

    if (!introItem.contains(e.target)) {
      if (drop) {
        drop.classList.remove("active");
      }
    }
  });
});

const content1Btns = content1.querySelectorAll("button");
content1Btns.forEach((content1Btn) => {
  content1Btn.onclick = () => {
    content1.classList.remove("active");
    content2.classList.add("active");
  };
});

const content2Btns = content2.querySelectorAll("button");
content2Btns.forEach((content2Btn) => {
  content2Btn.onclick = () => {
    content2.classList.remove("active");
    content3.classList.add("active");
  };
});

const content3Btns = content3.querySelectorAll("button");
content3Btns.forEach((content3Btn) => {
  content3Btn.onclick = () => {
    content2.classList.remove("active");
    content3.classList.remove("active");
    content1.classList.add("active");
    modal.classList.remove("active");
  };
});

const back1Btns = document.querySelectorAll(".backBtn1");
const back2Btns = document.querySelectorAll(".backBtn2");

back1Btns.forEach((back1Btn) => {
  back1Btn.onclick = () => {
    content2.classList.remove("active");
    content3.classList.remove("active");
    content1.classList.add("active");
  };
});
back2Btns.forEach((back2Btn) => {
  back2Btn.onclick = () => {
    content2.classList.add("active");
    content3.classList.remove("active");
    content1.classList.remove("active");
  };
});
