 function centerActiveCard(targetCard, isPageLoad = false) {
  if (!targetCard) return;

  // 1. Automatically find the scrollable container (the parent of the card)
  const container = targetCard.parentElement;

  // 2. Math: Calculate center position
  // (Card's Left offset + Half Card Width) - (Half Container Width)
  const cardLeft = targetCard.offsetLeft;
  const cardWidth = targetCard.offsetWidth;
  const containerWidth = container.offsetWidth;
  
  const centerPos = cardLeft + (cardWidth / 2) - (containerWidth / 2);

  // 3. Apply Scroll
  if (isPageLoad) {
    // On Refresh: Jump instantly to center (no animation, no page jump)
    container.scrollLeft = centerPos;
  } else {
    // On Click/Hover: Smooth scroll
    container.scrollTo({
      left: centerPos,
      behavior: "smooth",
    });
  }
}

// CONTAINER 5 LOGIC (Pricing Plans)
document.addEventListener("DOMContentLoaded", function () {
  // Select strictly inside Container 5
  const planCards = document.querySelectorAll(".container5 .card");

  function activatePlan(index, isPageLoad = false) {
    // 1. Reset Classes
    planCards.forEach((card) => card.classList.remove("active-plan"));

    // 2. Activate Target
    if (planCards[index]) {
      planCards[index].classList.add("active-plan");
      
      // 3. Center the card
      centerActiveCard(planCards[index], isPageLoad);
    }
  }

  // --- INITIAL LOAD ---
  // Wait 300ms to ensure browser layout is finished before centering
  setTimeout(() => {
    activatePlan(1, true); 
  }, 300);

  // --- INTERACTION ---
  planCards.forEach((card, index) => {
    card.addEventListener("mouseenter", () => activatePlan(index, false));
    card.addEventListener("click", () => activatePlan(index, false));
  });
});


// CONTAINER 10 LOGIC (Testimonials)
document.addEventListener("DOMContentLoaded", function () {
  // Select strictly inside Container 10
  // Note: Supports both '.testimonial-card' AND '.cards' just in case you didn't rename it
  const testimonials = document.querySelectorAll(".container10 .testimonial-card, .container10 .cards");
  const dots = document.querySelectorAll(".container10 .three-dots .dot");

  function activateTestimonial(index, isPageLoad = false) {
    // 1. Reset Classes
    testimonials.forEach((card) => card.classList.remove("active-card"));
    dots.forEach((dot) => dot.classList.remove("active"));

    // 2. Activate Target
    if (testimonials[index]) {
      testimonials[index].classList.add("active-card");
      
      // 3. Center the card
      centerActiveCard(testimonials[index], isPageLoad);
    }

    // 4. Update Dots
    if (dots[index]) {
      dots[index].classList.add("active");
    }
  }

  // --- INITIAL LOAD ---
  setTimeout(() => {
    activateTestimonial(1, true); 
  }, 300);

  // --- INTERACTION ---
  testimonials.forEach((card, index) => {
    card.addEventListener("mouseenter", () => activateTestimonial(index, false));
    card.addEventListener("click", () => activateTestimonial(index, false));
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => activateTestimonial(index, false));
  });
});