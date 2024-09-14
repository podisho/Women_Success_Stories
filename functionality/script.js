document.addEventListener("DOMContentLoaded", function(){
    const tabs = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const target = document.getElementById(tab.dataset.tab);

            tabs.forEach((t) => t.classList.remove("active"));
            contents.forEach((c) => c.classList.remove("active"));

            tab.classList.add("active");
            target.classList.add("active");
        });
    });
});

// Get the search icon, search bar, and search results container elements
const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');
const searchResultsContainer = document.getElementById('search-results-container');

// Add a click event listener to the search icon
searchIcon.addEventListener('click', function() {
  // Toggle the visibility of the search bar and search results container
  searchBar.style.display = searchBar.style.display === 'none' ? 'block' : 'none';
  searchResultsContainer.style.display = searchResultsContainer.style.display === 'none' ? 'block' : 'none';
});
