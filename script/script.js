document.addEventListener("DOMContentLoaded", function () {
    const page1 = document.querySelector(".page-1");
    const page2 = document.querySelector(".page-2");
    const loadingProgress = document.querySelector(".loading-progress");
    const carousel = document.getElementById("carousel");
    const images = document.querySelectorAll(".carousel-image");
    const statusTime = document.getElementById("status-time");

    // Start loading animation immediately
    loadingProgress.style.width = "100%";

    // Update time every second
    function updateTime() {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      minutes = minutes < 10 ? "0" + minutes : minutes;
      const timeString = `${hours}:${minutes}`;
      statusTime.textContent = timeString;
    }

    updateTime();
    setInterval(updateTime, 1000);

    // Switch between splash screens after 4 seconds
    setTimeout(() => {
      page1.classList.remove("active");
      page1.classList.add("hidden");

      page2.classList.remove("hidden");
      page2.classList.add("active");

      // Start carousel auto-scroll after transition
      startCarousel();
    }, 4000);

    function startCarousel() {
      let currentIndex = 0;
      let direction = 1;
      const imageCount = images.length;
      const scrollInterval = 3000;
      let intervalId;

      function scrollToNextImage() {
        currentIndex += direction;

        if (currentIndex === imageCount - 1 || currentIndex === 0) {
          direction *= -1;
        }

        const scrollPosition = currentIndex * carousel.offsetWidth;
        carousel.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }

      function startInterval() {
        intervalId = setInterval(scrollToNextImage, scrollInterval);
      }

      function stopInterval() {
        clearInterval(intervalId);
      }

      startInterval();

      carousel.addEventListener("mouseenter", stopInterval);

      carousel.addEventListener("mouseleave", () => {
        currentIndex = Math.round(
          carousel.scrollLeft / carousel.offsetWidth
        );
        startInterval();
      });
    }
  });
