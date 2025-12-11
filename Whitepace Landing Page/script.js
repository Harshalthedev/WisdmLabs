
function selectCard(clickedCard, event) {
    event.stopPropagation();

    // 2. Remove 'active' class from ALL cards
    const allCards = document.querySelectorAll(".card");
    allCards.forEach((card) => {
        // If we want to toggle the same card off by clicking it again:
        if (card !== clickedCard) {
            card.classList.remove("active");
        }
    });

    // 3. Toggle 'active' on the clicked card
    clickedCard.classList.toggle("active");
}

// // 4. Global click listener to deselect when clicking "somewhere else"
// document.addEventListener("click", function () {
//   const allCards = document.querySelectorAll(".card");
//   allCards.forEach((card) => card.classList.remove("active"));
// });

function toggleCard(clickedCard, event) {
    // 1. Stop the click from bubbling to the window (prevents immediate reset)
    event.stopPropagation();

    // 2. Get all cards
    const allCards = document.querySelectorAll(".cards");

    // 3. Reset ALL cards to Default (Blue background, White Quote)
    allCards.forEach((card) => {
        card.classList.remove("active"); // Removes white background

        // Reset icon to White-Quote (because background is Blue)
        const img = card.querySelector(".quote-icon");
        if (img) img.src = "./images/White-Quote.svg";
    });

    // 4. Set ONLY the clicked card to Active (White background, Blue Quote)
    clickedCard.classList.add("active");

    const activeImg = clickedCard.querySelector(".quote-icon");
    if (activeImg) activeImg.src = "./images/Blue-Quote.svg";
}

// 5. Global Listener: If user clicks anywhere else, reset everything
document.addEventListener("click", function () {
    const allCards = document.querySelectorAll(".cards");
    allCards.forEach((card) => {
        card.classList.remove("active"); // Back to Blue

        // Back to White Quote
        const img = card.querySelector(".quote-icon");
        if (img) img.src = "./images/White-Quote.svg";
    });
});
