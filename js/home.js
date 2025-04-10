// Search functionality for explore page
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('park-search');
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const parkCards = document.querySelectorAll('#park-results .park-card');
            
            parkCards.forEach(card => {
                const parkName = card.getAttribute('data-name').toLowerCase();
                if (parkName.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});