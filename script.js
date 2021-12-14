// navbar
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

//we will add a new class called change to the navbar that using this class will create new styles in css, which will
//be applied to the number on click, then on the next click, the class change will be removed and therefore the new 
//styles will be removed. And therefore the new styles will be removed as well.
menu.addEventListener("click", () => {
    navbar.classList.toggle("change");
    menu.classList.toggle("change");
})
//End of Navbar

//Section 2 video
const video = document.querySelector(".video");
const btn = document.querySelector(".buttons i");
const bar = document.querySelector(".video-bar");

const playPause = () => {
    //so when we click the play button, we have to switch it to the pause button and also we need to play 
    //the video, and in order to play the video, we can use one of the built-in methids called play.

    //so we need to use if else statement in which we have to define if the video is paused or not, and then
    //we have to set className of the icons accordingly, in order to check if video is paused or not i am going
    //to use one of the propety called paused.
    if (video.paused) {
        video.play();
        btn.className = "far fa-pause-circle";
        video.style.cssText = "opacity : 0.7";
        //in order to make this effect smoother, we will use transiton.
    } else {
        video.pause();
        btn.className = "far fa-play-circle";
        video.style.cssText = "opacity : 0.3";
    }
    //so now if click the play button, then the video will start to play and the buttton will change. And then
    //on the next click the video will pause and the icon will switch back to the play button.
}

//so now to see this result, we have to call this function, but we have to call it once we click the icon.
//also we need to pass the arrow function which will be executed once we click the button.
btn.addEventListener("click", () => {
    playPause();
})

//so we have to increse the width of the video bar, according to the update of the video duration, we will
//use one of the DOM events called timeupdate ,this event ocuurs once the video or audio is playing.
//So on every update of the time of the video, this arrow function will be executed.

video.addEventListener("timeupdate", () => {
    // console.log(video.currentTime, video.duration);
    //video.currentTime will tell the current timeline of the video
    //video.duration will tell the total duration of the video;
    //so in order to define the width of the video bar, we have to divide the current time of the video by 
    //the duration of the video, and that we have to express in percentage value
    //1-way
    // bar.style.width = (video.currentTime / video.duration) * 100 + '%';
    //2 -way
    const barWidth = video.currentTime / video.duration;
    bar.style.width = `${barWidth * 100}%`;
    //Rn the loading effect doesn't look quite smooth, so we need to use transition.

    //We need to add couple of things, once the video is played, i mean once it is ended
    //i want to change the icon back to the play button, and also i am going to decrease
    //the opacity in order to figure out whether the video is ended or not, we will
    //going to use property called ended.
    if (video.ended) {
        btn.className = "far fa-play-circle";
        video.style.cssText = "opacity : 0.3";
    }
})

//End of section 2 video

//Section-3 pricing cards
var swiper = new Swiper(".swiper-container", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 70,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
      });
//End of section-3 