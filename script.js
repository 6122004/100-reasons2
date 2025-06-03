const reasons = [
      "Your smile brightens my day",
      "You always know how to make me laugh",
      "Your kindness inspires me (sabki help karti ho)",
      "You listen to me with genuine interest",
      "You support my dreams (BMW kharidna)",
      "You have the most beautiful eyes",
      "You make me feel safe",
      "Your hugs are the best",
      "Your kisses are the best (aaj wali)",
      "You bring out the best in me",
      "You are my best friend",
      "You accept me as I am (kabhi change hone ko nahi bola)",
      "Your love is an adventure",
      "You care for others",
      "Your creativity amazes me",
      "You make even ordinary moments special",
      "Your sense of humor",
      "The way you look at me",
      "You are so patient",
      "You never give up on us",
      "You are my biggest cheerleader",
      "Your intelligence (math bina padhe 16 👽)",
      "You are a great cook",
      "You are my confidant",
      "You surprise me in the best way",
      "You are always up for trying new things",
      "Your hair",
      "You are hardworking",
      "Your loyalty",
      "You make me feel appreciated",
      "Your laugh",
      "You make me a better person",
      "Your sense of adventure",
      "You are always there when I need you",
      "Your passion for life",
      "The way you hold my hand (future hope)",
      "You are an amazing listener",
      "You respect me",
      "You are honest with me",
      "You are my rock",
      "You make me feel cherished",
      "Your kisses are magical",
      "You are my favorite person",
      "Your resilience",
      "You are my partner in crime",
      "Your strength",
      "You make me feel alive",
      "Your dedication to our relationship",
      "You are always honest with me",
      "Your warm heart",
      "You make every day brighter",
      "Your sense of style",
      "You are my soulmate",
      "You always have the best ideas",
      "You are my inspiration",
      "Your selflessness",
      "You understand me",
      "You make me feel special",
      "Your positive attitude",
      "You are so caring",
      "You are my comfort",
      "Your smile is contagious",
      "You are my partner in everything",
      "Your laugh makes me happy",
      "You are my safe haven",
      "Your spontaneity",
      "You make me feel loved",
      "You are incredibly thoughtful",
      "You always make time for me",
      "You are my favorite person to talk to",
      "You make me feel important",
      "Your loyalty means the world to me",
      "You are my best friend and lover",
      "You are my constant support",
      "Your warmth",
      "You make me feel understood",
      "You are my perfect match",
      "Your patience with me",
      "You are my biggest fan",
      "You make me laugh like no one else",
      "Your loving nature",
      "You make life fun",
      "You are always there for me",
      "Your thoughtfulness",
      "You make my heart skip a beat",
      "You are my everything",
      "Your encouragement",
      "You are my greatest adventure",
      "You make me feel at home",
      "Your tenderness",
      "You make me smile",
      "Your dedication to us",
      "You are my forever",
      "You make life worth living",
      "You are my reason to smile",
      "You make me feel complete",
      "Your love is my strength",
      "You make even silence feel special",
      "You understand my heart without words",
      "You are my one love and only true love."
    ];

    let index = 0;
    const reasonsContainer = document.getElementById("reasonsContainer");
    const nextBtn = document.getElementById("nextBtn");
    const startBtn = document.getElementById("startBtn");

    nextBtn.addEventListener("click", () => {
      if (index < reasons.length) {
        const newDiv = document.createElement("div");
        newDiv.className = "reason-entry";
        newDiv.textContent = `${index + 1}. ${reasons[index]} 🌝`;
        reasonsContainer.appendChild(newDiv);
        index++;
      } else {
        const doneDiv = document.createElement("div");
        doneDiv.className = "reason-entry";
        doneDiv.textContent = "That's all the love I could fit in 100 reasons ❤️";
        reasonsContainer.appendChild(doneDiv);
        nextBtn.disabled = true;
        nextBtn.style.opacity = 0.5;
      }
    });

    startBtn.addEventListener("click", () => {
      startBtn.style.display = "none";
      nextBtn.style.display = "inline-block";
      nextBtn.click();
    });