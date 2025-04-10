document.addEventListener('DOMContentLoaded', function() {
        const searchInput = document.getElementById('park-search');
        const parkCards = document.querySelectorAll('.park-card');
        const activeFiltersContainer = document.getElementById('active-filters');
        
        // Function to display active filters (without clear all)
        function displayActiveFilters() {
            const selectedFilters = localStorage.getItem('selectedFilters') 
                ? JSON.parse(localStorage.getItem('selectedFilters')) 
                : [];
            
            activeFiltersContainer.innerHTML = '';
            
            selectedFilters.forEach(filter => {
                const filterChip = document.createElement('div');
                filterChip.className = 'filter-chip';
                filterChip.textContent = filter;
                
                // Add click to remove functionality
                filterChip.addEventListener('click', function() {
                    // Remove this filter
                    const updatedFilters = selectedFilters.filter(f => f !== filter);
                    localStorage.setItem('selectedFilters', JSON.stringify(updatedFilters));
                    
                    // Refresh the display and apply filters
                    displayActiveFilters();
                    applyFilters();
                });
                
                activeFiltersContainer.appendChild(filterChip);
            });
        }
        
        // Function to apply filters
        function applyFilters() {
            const searchTerm = searchInput.value.toLowerCase();
            const selectedFilters = localStorage.getItem('selectedFilters') 
                ? JSON.parse(localStorage.getItem('selectedFilters')) 
                : [];
            
            parkCards.forEach(card => {
                const name = card.getAttribute('data-name').toLowerCase();
                const location = card.getAttribute('data-location').toLowerCase();
                let matchesSearch = name.includes(searchTerm) || location.includes(searchTerm);
                
                let matchesFilters = true;
                if(selectedFilters.length > 0) {
                    matchesFilters = selectedFilters.some(filter => {
                        return (
                            card.getAttribute('data-trip')?.includes(filter) ||
                            card.getAttribute('data-scenery')?.includes(filter) ||
                            card.getAttribute('data-activities')?.includes(filter) ||
                            card.getAttribute('data-amenities')?.includes(filter) ||
                            card.getAttribute('data-budget')?.includes(filter) ||
                            card.getAttribute('data-media')?.includes(filter)
                        );
                    });
                }
                
                card.style.display = (matchesSearch && matchesFilters) ? 'block' : 'none';
            });
        }
        
        // Initialize
        displayActiveFilters();
        applyFilters();
        
        // Search input event
        searchInput.addEventListener('input', applyFilters);
    });