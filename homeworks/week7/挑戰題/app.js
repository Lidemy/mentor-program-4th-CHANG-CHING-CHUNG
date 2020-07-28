/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
document.addEventListener('DOMContentLoaded', () => {
  const btnBox = document.querySelectorAll('.round');
  const pics = document.querySelectorAll('.pic');
  const picsLength = pics.length - 1;
  let slide = 0;
  let moving = false;

  function disableBtns() {
    moving = true;

    setTimeout(() => {
      moving = false;
    }, 500);
  }

  function moveCarousel(slide) {
    if (!moving) {
      disableBtns();
      let newPrev = slide - 1;
      let newNext = slide + 1;
      if (newPrev < 0) {
        newPrev = picsLength;
      } else if (newNext > picsLength) {
        newNext = 0;
      }

      pics.forEach((pic) => {
        pic.className = 'pic';
      });


      pics[newPrev].classList.add('pic_prev');
      pics[slide].classList.add('pic_active');
      pics[newNext].classList.add('pic_next');
    }
  }

  function moveLeft() {
    if (!moving) {
      if (slide === 0) {
        slide = 2;
      } else {
        slide--;
      }
      moveCarousel(slide);
    }
  }

  function moveRight() {
    if (!moving) {
      if (slide === 2) {
        slide = 0;
      } else {
        slide++;
      }
      moveCarousel(slide);
    }
  }


  btnBox.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (e.target.classList.contains('arrow-left') || e.target.classList.contains('left')) {
        moveLeft();
        return;
      }

      if (e.target.classList.contains('arrow-right') || e.target.classList.contains('right')) {
        moveRight();
      }
    });
  });
});
