// IMPORTANT: Replace this with your actual Google Form URL and entry ID
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScsKR76K-OE6N6PTQjHfp3-smbOhrAiKkHWOesgoSyTJErR6Q/formResponse';
const EMAIL_ENTRY_ID = 'entry.1884265043'; 

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Party Popper Animation Function
function triggerPartyPopper() {
    const overlay = document.getElementById('partyPopper');
    const celebrationEmoji = document.getElementById('celebrationEmoji');
    
    // Create multiple audio instances for louder sound
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Play multiple sound instances for increased volume
    for(let i = 0; i < 3; i++) {
        setTimeout(() => {
            const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZURE');
            audio.volume = 1.0; // Max volume
            audio.play().catch(e => console.log('Audio play failed:', e));
        }, i * 100);
    }
    
    // Also try Web Audio API for better sound
    try {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch(e) {
        console.log('Web Audio failed:', e);
    }
    
    // Show celebration emoji
    celebrationEmoji.style.display = 'block';
    
    // Show overlay
    overlay.classList.add('active');
    
    // Create LOTS more confetti to fill the page
    const colors = ['#FFD93D', '#6BCF7D', '#FF6B6B', '#2B2D42', '#FFBF00', '#FF1493', '#00CED1', '#FFD700', '#FF69B4', '#FFA500', '#9370DB'];
    
    for (let i = 0; i < 300; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = (Math.random() * 15 + 5) + 'px';
            confetti.style.height = confetti.style.width;
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            overlay.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 5000);
        }, i * 10);
    }
    
    // Add some larger emoji confetti
    const emojis = ['🎉', '🎊', '🎈', '🌟', '✨', '🎁', '🐾', '🐕', '❤️'];
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const emojiConfetti = document.createElement('div');
            emojiConfetti.style.position = 'absolute';
            emojiConfetti.style.left = Math.random() * 100 + '%';
            emojiConfetti.style.fontSize = (Math.random() * 30 + 20) + 'px';
            emojiConfetti.style.animation = `confetti-fall ${Math.random() * 3 + 2}s linear forwards`;
            emojiConfetti.style.animationDelay = Math.random() * 0.5 + 's';
            emojiConfetti.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
            overlay.appendChild(emojiConfetti);
            
            setTimeout(() => emojiConfetti.remove(), 5000);
        }, i * 30);
    }
    
    // Hide celebration emoji after animation
    setTimeout(() => {
        celebrationEmoji.style.display = 'none';
    }, 1500);
    
    // Hide overlay after animation
    setTimeout(() => {
        overlay.classList.remove('active');
        overlay.innerHTML = '';
    }, 5000);
}

// Form handling for Pet Owners with Google Forms integration
document.getElementById('ownerForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const email = document.getElementById('ownerEmail').value;
    const btn = this.querySelector('.submit-btn');
    const successMsg = document.getElementById('ownerSuccess');
    
    btn.textContent = 'Submitting...';
    btn.disabled = true;
    
    try {
        // Submit to Google Forms
        const formData = new FormData();
        formData.append(EMAIL_ENTRY_ID, email);
        
        // Using fetch with no-cors mode (Google Forms will process but won't return response)
        fetch(GOOGLE_FORM_URL, {
            method: 'POST',
            mode: 'no-cors',
            body: formData
        });
        
        // Also store locally as backup
        const userData = {
            email: email,
            role: 'pet_owner',
            timestamp: new Date().toISOString()
        };
        
        let users = JSON.parse(localStorage.getItem('fetchyUsers') || '[]');
        users.push(userData);
        localStorage.setItem('fetchyUsers', JSON.stringify(users));
        
        // Trigger party popper animation
        triggerPartyPopper();
        
        // Show success message
        successMsg.classList.add('show');
        this.querySelector('.email-input').value = '';
        
        console.log('Pet Owner registered:', userData);
        
        setTimeout(() => {
            btn.textContent = 'Join as Pet Parent';
            btn.disabled = false;
            successMsg.classList.remove('show');
        }, 3000);
        
    } catch (error) {
        console.error('Error:', error);
        
        // Still save locally even if Google Forms fails
        const userData = {
            email: email,
            role: 'pet_owner',
            timestamp: new Date().toISOString()
        };
        
        let users = JSON.parse(localStorage.getItem('fetchyUsers') || '[]');
        users.push(userData);
        localStorage.setItem('fetchyUsers', JSON.stringify(users));
        
        // Still show success to user
        triggerPartyPopper();
        successMsg.classList.add('show');
        this.querySelector('.email-input').value = '';
        
        setTimeout(() => {
            btn.textContent = 'Join as Pet Parent';
            btn.disabled = false;
            successMsg.classList.remove('show');
        }, 3000);
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and why items
document.querySelectorAll('.service-card, .why-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});