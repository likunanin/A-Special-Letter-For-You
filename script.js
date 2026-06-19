// Toggle Envelope Open/Close
const envelope = document.getElementById('envelope');
const hintText = document.getElementById('hintText');

envelope.addEventListener('click', () => {
    envelope.classList.toggle('open');
    if(envelope.classList.contains('open')) {
        hintText.textContent = "Click again to close ❤️";
    } else {
        hintText.textContent = "Click to open your letter! 💌";
    }
});

// Floating Emojis Generator (Red heart, elephant, 8-ball)
const emojiBg = document.getElementById('emojiBg');
const emojis = ['❤️', '🐘', '🎱'];

function createEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('floating-emoji');
    
    // Randomly select one of your 3 special emojis
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    
    // Randomize position across screen width
    emoji.style.left = Math.random() * 100 + 'vw';
    
    // Randomize animation duration (between 4s and 7s)
    emoji.style.animationDuration = (Math.random() * 3 + 4) + 's'; 
    
    // Randomize font size (between 18px and 32px)
    emoji.style.fontSize = (Math.random() * 14 + 18) + 'px'; 
    
    emojiBg.appendChild(emoji);

    // Clean up old elements
    setTimeout(() => {
        emoji.remove();
    }, 7000);
}

// Generate an emoji every 400ms
setInterval(createEmoji, 400);