// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Animate facts on page load
    const facts = document.querySelectorAll('.fun-fact');
    
    // Show facts one by one with delay
    facts.forEach((fact, index) => {
        setTimeout(() => {
            fact.classList.add('visible');
        }, index * 200);
    });

    // Add click event to show a random emoji
    facts.forEach(fact => {
        fact.addEventListener('click', () => {
            const emojis = ['✨', '🎈', '🎉', '🌟', '💫'];
            const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
            fact.style.setProperty('--emoji-content', `"${randomEmoji}"`);
            
            // Create and animate a floating emoji
            const floatingEmoji = document.createElement('span');
            floatingEmoji.textContent = randomEmoji;
            floatingEmoji.style.position = 'absolute';
            floatingEmoji.style.left = `${event.clientX}px`;
            floatingEmoji.style.top = `${event.clientY}px`;
            floatingEmoji.style.animation = 'float 1s ease-out forwards';
            document.body.appendChild(floatingEmoji);
            
            setTimeout(() => {
                floatingEmoji.remove();
            }, 1000);
        });
    });
});
