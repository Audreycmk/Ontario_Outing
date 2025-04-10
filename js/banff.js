function changeMainImage(imageUrl) {
    document.getElementById('main-bg').style.backgroundImage = `url('${imageUrl}')`;
}

// Smooth scrolling for the gallery
document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    let isDown = false;
    let startX;
    let scrollLeft;
    
    gallery.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - gallery.offsetLeft;
        scrollLeft = gallery.scrollLeft;
    });
    
    gallery.addEventListener('mouseleave', () => {
        isDown = false;
    });
    
    gallery.addEventListener('mouseup', () => {
        isDown = false;
    });
    
    gallery.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - gallery.offsetLeft;
        const walk = (x - startX) * 2;
        gallery.scrollLeft = scrollLeft - walk;
    });
    
    // Touch support for mobile
    gallery.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - gallery.offsetLeft;
        scrollLeft = gallery.scrollLeft;
    });
    
    gallery.addEventListener('touchend', () => {
        isDown = false;
    });
    
    gallery.addEventListener('touchmove', (e) => {
        if(!isDown) return;
        const x = e.touches[0].pageX - gallery.offsetLeft;
        const walk = (x - startX) * 2;
        gallery.scrollLeft = scrollLeft - walk;
    });
});