document.addEventListener('DOMContentLoaded', function() {
    const page1 = document.querySelector('.page-1');
    const page2 = document.querySelector('.page-2');
    const loadingProgress = document.querySelector('.loading-progress');
    
    // Start loading animation immediately
    loadingProgress.style.width = '100%';
    
    // Update time every minute
    function updateTime() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        minutes = minutes < 10 ? '0' + minutes : minutes;
        const timeString = `${hours}:${minutes}`;
        
        document.querySelectorAll('.time').forEach(el => {
            el.textContent = timeString;
        });
    }
    
    updateTime();
    setInterval(updateTime, 60000);
    
    // Switch between splash screens after 4 seconds (middle of 3-5 range)
    setTimeout(() => {
        page1.classList.remove('active');
        page1.classList.add('hidden');
        
        page2.classList.remove('hidden');
        page2.classList.add('active');
    }, 4000);
    
    // Auto-scroll carousel
    const carousel = document.querySelector('.image-carousel');
    let scrollAmount = 0;
    const scrollSpeed = 1;
    
    function autoScroll() {
        carousel.scrollLeft += scrollSpeed;
        scrollAmount += scrollSpeed;
        
        // Reset to start if reached end
        if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
            carousel.scrollLeft = 0;
            scrollAmount = 0;
        }
        
        requestAnimationFrame(autoScroll);
    }
    
    // Start auto-scroll after the splash screen transition
    setTimeout(() => {
        autoScroll();
    }, 4000);
});