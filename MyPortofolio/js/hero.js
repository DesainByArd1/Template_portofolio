  (function () {
    const words = [
      "Developer",
      "UI Designer",
      "Laravel Dev",
      "React Enthusiast",
    ];
    const el = document.querySelector(".animate-text");
    const typingSpeed = 90; // ms per char
    const deletingSpeed = 45; // ms per char when deleting
    const pauseAfter = 1400; // pause after full word
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    if (!el) return;

    function tick() {
      const current = words[wordIndex];
      if (!deleting) {
        charIndex++;
        el.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(tick, pauseAfter);
          return;
        }
        setTimeout(tick, typingSpeed);
      } else {
        charIndex--;
        el.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(tick, 300);
          return;
        }
        setTimeout(tick, deletingSpeed);
      }
    }

    tick();
  })();