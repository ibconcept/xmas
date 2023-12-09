function createConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
  
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      confetti.setAttribute('cx', Math.random() * 800); // Adjust the width as needed
      confetti.setAttribute('cy', -20);
      confetti.setAttribute('r', Math.random() * 6 + 3);
      confetti.setAttribute('fill', getRandomColor());
      confetti.setAttribute('opacity', '0.8');
      confettiContainer.appendChild(confetti);
  
      animateConfetti(confetti);
    }
  }
  
  function animateConfetti(confetti) {
    const duration = Math.random() * 5 + 3; // Random duration for confetti falling
    confetti.animate(
      [
        { transform: 'translate(0, 0)' },
        { transform: `translate(${Math.random() * 800 - 400}px, ${window.innerHeight}px)` }
      ],
      {
        duration: duration * 1000,
        easing: 'ease-out',
        iterations: Infinity,
        delay: Math.random() * 5 // Add delay for staggered animation
      }
    );
  }
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  createConfetti();
  
