const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Will you be my Valentine??.";
    gif.src = "<div class="tenor-gif-embed" data-postid="20341232" data-share-method="host" data-aspect-ratio="0.73125" data-width="100%"><a href="https://tenor.com/view/bemy-valentine-will-you-be-gif-20341232">Bemy Valentine GIF</a>from <a href="https://tenor.com/search/bemy-gifs">Bemy GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>";

    // Hide the No button
    noBtn.style.display = "none";
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate max positions to ensure the button stays within the wrapper
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    // Ensure randomX and randomY are within the wrapper bounds
    const randomX = Math.min(Math.floor(Math.random() * maxX), maxX);
    const randomY = Math.min(Math.floor(Math.random() * maxY), maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
