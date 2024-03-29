document.addEventListener("DOMContentLoaded", function () {
    // Sayfa yüklendiğinde başlıklara yavaşça kayma
    document.querySelectorAll('section h2').forEach(title => {
        title.addEventListener('mouseover', function () {
            this.style.transform = "translateX(10px)";
            this.style.transition = "transform 0.3s ease-in-out";
            this.style.transition = "transform 0.3s ease-in-out, color 0.3s ease-in-out"; // Birden fazla özelliğe geçiş ekle
        });

        title.addEventListener('mouseout', function () {
            this.style.transform = "translateX(0)";
            this.style.color = "#000"; // Rengi geri döndür
        });

        var cornerImage = document.getElementById("corner-image");

        cornerImage.addEventListener("mouseenter", function () {
            cornerImage.style.transform = "rotate(360deg)";
        });

        cornerImage.addEventListener("mouseleave", function () {
            cornerImage.style.transform = "rotate(0deg)";
        });
    });
});
