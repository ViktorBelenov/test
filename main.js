
    const image = document.getElementById("image");
    const moveUpBtn = document.getElementById("moveUpBtn");
    const moveDownBtn = document.getElementById("moveDownBtn");
    
    function moveUp() {
      const screenWidth = window.innerWidth;
      if (screenWidth > 768) {
      gsap.to(image, {
        y: -100, 
        duration: 1 
      });
    } else  {
        gsap.to(image, {
            y: -10,
            duration: 1 
          });
    }
    }

    function moveDown() {
      gsap.to(image, {
        y: 0, 
        duration: 1 
      });
    }


    moveUpBtn.addEventListener("click", moveUp);
    moveDownBtn.addEventListener("click", moveDown);


// voice
    const hole = document.querySelector(".hole");
    const girl = document.querySelector(".girl");


    gsap.to(hole, {
      duration: 1,
      scale: 1.3,
      opacity: 0.8,
      onComplete: function() {
        gsap.to(girl, {
          duration: 1,
          y: -900,
          onComplete: function() {
            gsap.to(hole, {
                duration: 1,
                scale: 1,
                opacity: 0.8,
            })
            gsap.to(girl, {
              duration: 1,
              x: -50,
              yoyo: true,
              repeat: -1,
              ease: "power1.inOut"
            });
          }
        });
      }
    });