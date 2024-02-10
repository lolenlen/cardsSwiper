let activeIndex = 0;

const groups = document.getElementsByClassName("cards");

const swiperRightClick = () => {
  // bump active index

  const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector (`[data-index="${nextIndex}"]`);

  // active group becomes after
  currentGroup.dataset.status = "after";
  //nect group becomes active
  nextGroup.dataset.status = "becoming-active-from-before";


  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  })
  
};

const swiperLeftClick = () => {
  // bump active index

  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;

  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector (`[data-index="${nextIndex}"]`);

  // active group becomes after
  currentGroup.dataset.status = "before";
  //nect group becomes active
  nextGroup.dataset.status = "becoming-active-from-after";


  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  })
  
}