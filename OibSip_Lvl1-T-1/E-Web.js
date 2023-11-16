const videoContainer = document.querySelector("#video-container")
const video = document.querySelector("#video");

    videoContainer.addEventListener("mouseover", () => {
        video.style.display = "block";
        video.play();
    });

    videoContainer.addEventListener("mouseleave", () => {
        video.style.display = "none";
        video.pause();
    });

    video.addEventListener("ended", () => {
        video.style.display = "none";
    });

    video.addEventListener("click", () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

var Button = document.getElementById("email");
var Input = document.getElementById("input");

    Button.addEventListener("click", ()=>{
        Input.style.borderColor="black"
    })