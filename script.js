document.addEventListener("DOMContentLoaded", function () {
    const christmasWishes = [
      "Your gift this Christmas is to give courage and hope, having made it this far.",
      "May your heart be filled with joy and your home with warmth this Christmas.",
      "Wishing you a Merry Christmas filled with love, laughter, and good times.",
      "May the magic of Christmas bring peace, love, and happiness to your life.",
      "Sending you warm wishes and joyous moments this festive season.",
      "May your days be Merry and Bright, and your Christmas be filled with delight.",
      "Wishing you a season of joy, a season of cheer, and to top it all off, a wonderful year.",
      "May the spirit of Christmas fill your home with love, peace, and joy.",
      "Sending you warm wishes for a festive holiday season.",
      "May this Christmas be a time of reflection, love, and good cheer."
    ];
  
    const logoElements = document.querySelectorAll('.logo');
    const messagePopup = document.getElementById('messagePopup');
  
    logoElements.forEach(logo => {
      logo.addEventListener('click', showRandomMessage);
    });
  
    function showRandomMessage() {
      const randomIndex = Math.floor(Math.random() * christmasWishes.length);
      const randomMessage = christmasWishes[randomIndex];
      console.log("Clicked logo. Showing message:", randomMessage);
  
      messagePopup.textContent = randomMessage;
      messagePopup.style.display = 'block';
    }
  
    function hideMessagePopup() {
      console.log("Clicked message. Hiding message popup.");
      messagePopup.style.display = 'none';
    }
  });
  