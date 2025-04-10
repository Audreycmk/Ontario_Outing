document.addEventListener('DOMContentLoaded', function() {
        // Get all filter options
        const filterOptions = document.querySelectorAll('.filter-option');
        const clearAllBtn = document.querySelector('.clear-all');
        const applyBtn = document.querySelector('.apply-button');
        
        let selectedFilters = [];
        
        // Load any previously selected filters from localStorage
        if(localStorage.getItem('selectedFilters')) {
            selectedFilters = JSON.parse(localStorage.getItem('selectedFilters'));
        }
        
        // Highlight already selected filters
        filterOptions.forEach(option => {
            if(selectedFilters.includes(option.textContent)) {
                option.classList.add('selected');
            }
        });
        
        // Toggle filter selection
        filterOptions.forEach(option => {
            option.addEventListener('click', function() {
                this.classList.toggle('selected');
                const filterText = this.textContent;
                
                if(this.classList.contains('selected')) {
                    if(!selectedFilters.includes(filterText)) {
                        selectedFilters.push(filterText);
                    }
                } else {
                    selectedFilters = selectedFilters.filter(f => f !== filterText);
                }
            });
        });
        
        // Clear all filters
        clearAllBtn.addEventListener('click', function() {
            selectedFilters = [];
            filterOptions.forEach(option => {
                option.classList.remove('selected');
            });
        });
        
        // Apply filters and go back to explore
        applyBtn.addEventListener('click', function() {
            localStorage.setItem('selectedFilters', JSON.stringify(selectedFilters));
        });
    });