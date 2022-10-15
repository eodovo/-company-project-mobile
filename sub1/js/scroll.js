$(document).ready(function () {
    const circle = document.querySelector('.selectCircle');
    const scrollItems = document.querySelectorAll('.contentArea .year');
    const windowHeight = window.innerHeight / 1.4;

    window.addEventListener('scroll', scrollHistory);

    function scrollHistory() {
        scrollItems.forEach(function (item) {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < windowHeight) {
                item.classList.add('scroll-active');
                circle.style.top = (item.offsetTop + 28) + 'px';
            } else {
                item.classList.remove('scroll-active');
            };

            if (itemTop < 30) {
                item.classList.remove('scroll-active');
            };
        });
    };
});