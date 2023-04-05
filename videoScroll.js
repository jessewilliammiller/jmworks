const scrollContainer = document.getElementById('vid-container');
const scrollLeftButton = document.getElementById('scroll-left-button');
const scrollRightButton = document.getElementById('scroll-right-button');

scrollLeftButton.addEventListener('click', () => {
    if (scrollContainer.scrollLeft - (scrollContainer.scrollWidth / 13) <= 0) {
        scrollContainer.scrollLeft = scrollContainer.scrollWidth
    }
    else scrollContainer.scrollLeft -= scrollContainer.scrollWidth / 13;
});

scrollRightButton.onclick = () => {
    if (scrollContainer.scrollLeft + (scrollContainer.scrollWidth / 13) >= scrollContainer.scrollWidth) {
        scrollContainer.scrollLeft = 0
    }
    else {
        scrollContainer.scrollLeft += scrollContainer.scrollWidth / 13;
    }
};