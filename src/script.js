document.addEventListener('DOMContentLoaded', () => {
    // 1. Loader Logic - Handles both fast and slow loads
    const loader = document.getElementById('loader');
    if (loader) {
        const hideLoader = () => {
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 800);
            }, 1000);
        };

        if (document.readyState === 'complete') {
            hideLoader();
        } else {
            window.addEventListener('load', hideLoader);
        }
    }

    // 2. Clock Logic
    function updateClock() {
        const now = new Date();
        const clockTime = document.getElementById('clock-time');
        const clockDate = document.getElementById('clock-date');
        
        if (!clockTime || !clockDate) return;
        
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        
        clockTime.textContent = now.toLocaleTimeString();
        clockDate.textContent = now.toLocaleDateString(undefined, options);
    }
    
    setInterval(updateClock, 1000);
    updateClock();

    // 3. Copy URL Logic
    const copyBtn = document.getElementById('copy-url');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const url = 'https://davkiller.com';
            navigator.clipboard.writeText(url).then(() => {
                const originalContent = copyBtn.innerHTML;
                copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
                copyBtn.classList.add('success');
                
                setTimeout(() => {
                    copyBtn.innerHTML = originalContent;
                    copyBtn.classList.remove('success');
                }, 2000);
            });
        });
    }

    // 4. Particle Background Logic
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.zIndex = '1'; // Above background, below container
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < 50; i++) { // Increased density
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 6 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Randomize brightness/colors slightly for more sparkle
        const hue = Math.random() * 40 + 180; // Blueish tones
        particle.style.background = `hsla(${hue}, 100%, 80%, 0.6)`;
        particle.style.boxShadow = `0 0 ${size * 2}px hsla(${hue}, 100%, 80%, 0.4)`;
        
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particle.style.animationDuration = `${Math.random() * 12 + 8}s`;
        
        particlesContainer.appendChild(particle);
    }
});
