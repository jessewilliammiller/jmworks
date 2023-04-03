const scrollContainer = document.getElementById('vid-container');
const scrollLeftButton = document.getElementById('scroll-left-button');
const scrollRightButton = document.getElementById('scroll-right-button');

scrollLeftButton.addEventListener('click', () => {
    if (scrollContainer.scrollLeft === 0) {
        scrollContainer.scrollLeft = 7280
    }
    else scrollContainer.scrollLeft -= 500;
});

scrollRightButton.onclick = () => {
    if (scrollContainer.scrollLeft > 6750) {
        scrollContainer.scrollLeft = 0
    }
    else scrollContainer.scrollLeft += 500;
};