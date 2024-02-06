document.addEventListener("DOMContentLoaded", function () {
    // Sayfa yüklendiğinde çalışacak kodları buraya ekleyebilirsiniz.

    // Başlıklara tıklama olayını dinle
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Hedef elementin ID'sini al
            const targetId = this.getAttribute('href').substring(1);

            // Hedef elementi bul
            const targetElement = document.getElementById(targetId);

            // Hedef elemente yavaşça kaydır
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
