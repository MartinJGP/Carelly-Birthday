// Obtén el modal
var modal = document.getElementById("videoModal");
var btn = document.getElementById("openVideo");
var video = document.getElementById("videoPlayer");


var modal2 = document.getElementById("videoModal2");
var btn2 = document.getElementById("openVideo2");
var video2 = document.getElementById("videoPlayer2");
// Cuando el usuario hace clic en el botón, abre el modal
btn.onclick = function() {
    video.play();
    modal.style.display = "block";
}
modal.onclick = function() {
    modal.style.display = "none";
    video.pause();
}
btn2.onclick = function() {
    video2.play();
    modal2.style.display = "block";
}
modal2.onclick = function() {
    modal2.style.display = "none";
    video2.pause();
}


document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".wrap1 .container .service img, .banner img");
    const modal = document.createElement("div");
    const modalContent = document.createElement("div");
    const modalImage = document.createElement("img");

    modal.classList.add("image-modal");
    modalContent.classList.add("modal-content");
    modalContent.appendChild(modalImage);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    images.forEach(image => {
        image.addEventListener("click", () => {
            modalImage.src = image.src;
            modal.style.display = "block";
            modalImage.style.marginTop = `${(window.innerHeight - modalImage.height) / 2}px`;

        });
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            modal.classList.remove("fade-in");
        }
    });
});