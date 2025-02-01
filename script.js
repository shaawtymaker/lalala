const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");


yesBtn.addEventListener("click", () => {
    question.innerHTML = "Being with you is my biggest blessing. I Love you.";
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGNhdXh1b252b2F2b2U4cHRlNGkwMDZsajllaGF1cDJyb2p4NXl2YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/G6N0pDDgDpLjUvNoyQ/giphy.gif";

    noBtn.style.display = "none";
});


noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Ensure there's enough space to prevent overflow
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    // Get a safe position inside the wrapper
    const randomX = Math.max(0, Math.min(Math.random() * maxX, maxX));
    const randomY = Math.max(0, Math.min(Math.random() * maxY, maxY));

    // Move the No button
    noBtn.style.position = "absolute";  // Ensure it moves properly
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});
