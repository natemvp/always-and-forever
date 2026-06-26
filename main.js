/*==================================================
        ALWAYS & FOREVER
        MAIN JAVASCRIPT
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==========================================
            SMOOTH SCROLL
    ==========================================*/

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    });


    /*==========================================
          RELATIONSHIP COUNTER
    ==========================================*/

    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    if (days && hours && minutes && seconds) {

        const relationshipDate = new Date("2025-08-08T00:00:00");

        function updateCounter() {

            const now = new Date();

            const difference = now - relationshipDate;

            if (difference < 0) return;

            const totalSeconds = Math.floor(difference / 1000);

            const totalDays = Math.floor(totalSeconds / 86400);

            const totalHours = Math.floor((totalSeconds % 86400) / 3600);

            const totalMinutes = Math.floor((totalSeconds % 3600) / 60);

            const totalSecs = totalSeconds % 60;

            days.textContent = totalDays;
            hours.textContent = String(totalHours).padStart(2, "0");
            minutes.textContent = String(totalMinutes).padStart(2, "0");
            seconds.textContent = String(totalSecs).padStart(2, "0");

        }

        updateCounter();

        setInterval(updateCounter, 1000);

    }


    /*==========================================
            PHOTO LIGHTBOX
    ==========================================*/

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeLightbox = document.getElementById("closeLightbox");

    if (lightbox && lightboxImage && closeLightbox) {

        const galleryImages = document.querySelectorAll(".gallery-image");

        galleryImages.forEach(image => {

            image.addEventListener("click", () => {

                lightbox.style.display = "flex";

                lightboxImage.src = image.src;

                lightboxImage.alt = image.alt;

            });

        });

        closeLightbox.addEventListener("click", () => {

            lightbox.style.display = "none";

        });

        lightbox.addEventListener("click", (event) => {

            if (event.target === lightbox) {

                lightbox.style.display = "none";

            }

        });

        document.addEventListener("keydown", (event) => {

            if (event.key === "Escape") {

                lightbox.style.display = "none";

            }

        });

    }

});