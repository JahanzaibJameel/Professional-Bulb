document.addEventListener('DOMContentLoaded', () => {
    // Initialize particles.js
    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle', stroke: { width: 0, color: '#000' }, polygon: { nb_sides: 5 } },
        opacity: { value: 0.3, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1 } },
        size: { value: 3, random: true, anim: { enable: true, speed: 2, size_min: 0.1 } },
        line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.2, width: 1 },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: true,
          out_mode: 'out',
          attract: { enable: true, rotateX: 600, rotateY: 1200 }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'push' },
          resize: true
        },
        modes: {
          grab: { distance: 140, line_linked: { opacity: 1 } },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });
  
    const powerBtn = document.getElementById('powerBtn');
    const bulb = document.getElementById('bulb');
    const glow = document.getElementById('glow');
    const lightCone = document.getElementById('lightCone');
    const btnText = document.querySelector('.btn-text');
    const statusDisplay = document.getElementById('statusDisplay');
    const intensityDisplay = document.getElementById('intensityDisplay');
  
    let isOn = false;
  
    const toggleBulb = () => {
      isOn = !isOn;
      const method = isOn ? 'add' : 'remove';
  
      bulb.classList[method]('on');
      glow.classList[method]('on');
      lightCone.classList[method]('on');
      powerBtn.classList[method]('on');
      bulb.style.animation = isOn ? 'float 3s ease-in-out infinite' : 'none';
      btnText.textContent = isOn ? 'POWER OFF' : 'POWER ON';
      statusDisplay.textContent = isOn ? 'ACTIVE' : 'STANDBY';
      intensityDisplay.textContent = isOn ? '100%' : '0%';
    };
  
    powerBtn.addEventListener('click', toggleBulb);
  
    powerBtn.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.left = `${e.clientX - this.getBoundingClientRect().left}px`;
      ripple.style.top = `${e.clientY - this.getBoundingClientRect().top}px`;
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1000);
    });
  
    const animateBackground = () => {
      const hues = [45, 60, 30];
      let current = 0;
      setInterval(() => {
        current = (current + 1) % hues.length;
        document.documentElement.style.setProperty('--shadow-color', `hsla(${hues[current]}, 100%, 50%, 0.4)`);
      }, 3000);
    };
  
    animateBackground();
  });
  