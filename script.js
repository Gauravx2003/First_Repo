const ball=document.querySelector(".toggle-ball");
const items=document.querySelectorAll(
    ".container,.movie-list-container,.navbar-container,.sidebar,.left-menu-icons,.toggle"
    );

ball.addEventListener("click",()=>{
    items.forEach(x=>{
        x.classList.toggle("active")
    });
    ball.classList.toggle("active")
});

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImg");
    const captionText = document.getElementById("caption");

    // Function to open the modal
    function openModal(movie) {
        modal.style.display = "block";
        modalImg.src = movie.image;
        captionText.innerHTML = `<div class=\"modaling\"><h2>${movie.title}</h2><p id=\"rat\">Rating: ${movie.rating}</p><p id=\"desc\">${movie.descrip}</p></div>`;
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Delegate click event handling to the movie list container
    const movieListContainer = document.querySelector(".movie-list");
    movieListContainer.addEventListener("click", function(event) {
        // Check if the clicked element is a review button
        if (event.target.classList.contains("movie-list-item-button")) {
            // Find the index of the clicked review button
            const buttonIndex = Array.from(movieListContainer.querySelectorAll(".movie-list-item-button")).indexOf(event.target);

            // Load data from JSON based on the index
            fetch("content.json")
                .then(response => response.json())
                .then(data => {
                    const movie = data[buttonIndex];
                    openModal(movie);
                })
                .catch(error => console.error("Error fetching data:", error));
        }
    });

    // Attach event listener to close modal button
    document.querySelector(".close").addEventListener("click", closeModal);
});

function scrollToSeries() {
    var seriesSection = document.getElementById("movies");
    seriesSection.scrollIntoView({behavior: "smooth"});
}

function redirect(){
    location.assign("movie.html");
}

function redirect2(){
    location.assign("series.html");
}
