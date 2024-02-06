document.addEventListener("DOMContentLoaded", function () {
    // Sayfa yüklendiğinde başlıklara yavaşça kayma
    document.querySelectorAll('section h2').forEach(title => {
        title.addEventListener('mouseover', function () {
            this.style.transform = "translateX(10px)";
            this.style.transition = "transform 0.3s ease-in-out";
        });

        title.addEventListener('mouseout', function () {
            this.style.transform = "translateX(0)";
        });
    });
});

