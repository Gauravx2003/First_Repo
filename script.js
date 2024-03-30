/*const arrows=document.querySelectorAll(".arrow");
const Lists=document.querySelectorAll(".movie-list");

arrows.forEach((arrow,i)=>{
    arrow.addEventListener("click",()=>{
        Lists[i].style.transform=`translateX(${
            Lists[i].computedStyleMap().get("transform")[0].x.value
    -270}px)`;
    });
});*/

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


/*const search = document.querySelector(".search-wrapper");
const input = search.querySelector("input");

search.addEventListener("mouseenter", () => {
  if (!input.matches(":focus")) {
    search.classList.add("active");
  }
});

search.addEventListener("mouseleave", () => {
  if (!input.matches(":focus") && !input.value.trim()) {
    search.classList.remove("active");
  }
});*/

  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.querySelectorAll(".movie-list-item-img");
  var modalImg = document.getElementById("img01");
  var modals=document.getElementsByClassName("modal-img");
  var captionText = document.getElementById("caption");
  //console.log(img)
  var movieListItems = document.querySelectorAll('.movie-list-item');

            // Function to handle image click
            function handleImageClick(index) {
                Index=index;
                // Add your logic here
            }

            // Attach click event listeners to movie list items
            movieListItems.forEach(function(item, index) {
                var img = item.querySelector('.movie-list-item-img');
                img.onclick = function() {
                    //console.log(index);
                    modal.style.display = "block";
                    modalImg.src = modals[index].src;
                    captionText.innerHTML = this.alt;
                };
            });
  
        

  // When the user clicks on <span> (x), close the modal
  function closeModal() {
      modal.style.display = "none";
  }