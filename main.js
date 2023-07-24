
    const image = document.getElementById("image");
    const moveUpBtn = document.getElementById("moveUpBtn");
    const moveDownBtn = document.getElementById("moveDownBtn");
    

    // Функция для поднятия картинки
    function moveUp() {
      const screenWidth = window.innerWidth;
      if (screenWidth > 768) {
      gsap.to(image, {
        y: -100, // сдвиг вверх на 100 пикселей
        duration: 1 // длительность анимации в секундах
      });
    } else  {
        gsap.to(image, {
            y: -10, // сдвиг вверх на 100 пикселей
            duration: 1 // длительность анимации в секундах
          });
    }
    }

    // Функция для опускания картинки
    function moveDown() {
      gsap.to(image, {
        y: 0, // сдвиг вниз на 0 пикселей (исходное положение)
        duration: 1 // длительность анимации в секундах
      });
    }

    // Привязываем обработчики событий к кнопкам
    moveUpBtn.addEventListener("click", moveUp);
    moveDownBtn.addEventListener("click", moveDown);



    const hole = document.querySelector(".hole");
    const girl = document.querySelector(".girl");

    // Анимация появления отверстия
    gsap.to(hole, {
      duration: 1,
      scale: 1,
      opacity: 0.8,
      onComplete: function() {
        // Анимация появления девушки и движения вверх
        gsap.to(girl, {
          duration: 1,
          scale: 1,
          opacity: 1,
          y: -100,
          onComplete: function() {
            // Анимация движения девушки влево
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