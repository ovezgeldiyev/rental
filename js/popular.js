function mobileOnlySlider() {
  $(".slider").slick({
    infinite: false,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: false,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1.12,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });
}
if (window.innerWidth < 751) {
  mobileOnlySlider();
}
function resizeListener(tabListener = false) {
  if (window.innerWidth < 751) {
    $(".slider").addClass("sliderMob");
    if (tabListener) {
      $(".slider").slick("unslick");
    }
    if (!$(".slider").hasClass("slick-initialized")) {
      mobileOnlySlider();
    }
  } else {
    $(".slider").removeClass("sliderMob");
    if ($(".slider").hasClass("slick-initialized")) {
      $(".slider").slick("unslick");
    }
  }
}
resizeListener();
$(window).resize(resizeListener);

// faq start

const popBtn = document.querySelectorAll(".popBtn");
const popEvent = document.querySelectorAll(".popEvent");
popBtn.forEach((e) => {
  onPopClick(popBtn, popEvent, e);
});
function onPopClick(popBtns, popItems, item) {
  item.addEventListener("click", function (e) {
    let currentPopBtn = item;
    let tabId = currentPopBtn.getAttribute("data-pop");
    let currentPop = document.querySelector(tabId);
    if (currentPopBtn.classList.contains("active")) {
      const faq = currentPopBtn.parentElement.querySelector(".popEvent");
      if (faq) {
        faq.classList.remove("active");
        currentPopBtn.classList.remove("active");
      }
    } else if (!currentPopBtn.classList.contains("active")) {
      popBtns.forEach(function (item) {
        item.classList.remove("active");
      });

      popItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentPopBtn.classList.add("active");
      currentPop.classList.add("active");
      resizeListener(true);
    }
  });
}
// faq end
