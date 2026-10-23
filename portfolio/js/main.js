document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll(".language-switch button");
  const profiles = document.querySelectorAll(".profile-content");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const selectedLanguage = button.dataset.lang;

      // 선택한 언어의 프로필만 표시
      profiles.forEach(function (profile) {
        profile.hidden = profile.lang !== selectedLanguage;
      });

      // 선택한 버튼 강조
      buttons.forEach(function (languageButton) {
        languageButton.setAttribute(
          "aria-pressed",
          String(languageButton === button)
        );
      });
    });
  });

  

    // 프로필이 보이기 시작하면 스크롤 안내 숨기기
  const scrollHint = document.getElementById("scroll-hint");
  const profileBox = document.querySelector(".profile-box");

  if (scrollHint && profileBox) {
    const profileObserver = new IntersectionObserver(function (entries) {
      const entry = entries[0];

      scrollHint.hidden =
        entry.isIntersecting || entry.boundingClientRect.top < 0;
    }, {
      threshold: 0
    });

    profileObserver.observe(profileBox);
  }
  
    const doorLink = document.querySelector(".door-link");
    const doorImage = document.querySelector("#door-image");

    if (doorLink && doorImage) {
        const doorFrames = [
            "assets/images/door1.png",
            "assets/images/door2.png",
            "assets/images/door3.png",
            "assets/images/door4.png"
        ];

        const frameDuration = 140; // 작을수록 빠르게
        let doorFrameIndex = 0;
        let doorTimer = null;

        // 이미지 미리 불러오기
        doorFrames.forEach(function (path) {
            const preload = new Image();
            preload.src = path;
        });

        function animateBlueNoteDoor(targetFrame) {
            clearInterval(doorTimer);

            if (doorFrameIndex === targetFrame) return;

            doorTimer = setInterval(function () {
                if (doorFrameIndex < targetFrame) {
                    doorFrameIndex++;
                } else {
                    doorFrameIndex--;
                }

                doorImage.src = doorFrames[doorFrameIndex];

                if (doorFrameIndex === targetFrame) {
                    clearInterval(doorTimer);
                }
            }, frameDuration);
        }

        // 커서를 올리면 열기
        doorLink.addEventListener("mouseenter", function () {
            animateBlueNoteDoor(3);
        });

        // 커서가 벗어나면 닫기
        doorLink.addEventListener("mouseleave", function () {
            if (!doorLink.matches(":focus")) {
                animateBlueNoteDoor(0);
            }
        });

        // 키보드로 선택해도 열기
        doorLink.addEventListener("focus", function () {
            animateBlueNoteDoor(3);
        });

        doorLink.addEventListener("blur", function () {
            if (!doorLink.matches(":hover")) {
                animateBlueNoteDoor(0);
            }
        });

        // 뒤로가기로 돌아오면 닫힌 상태로 복원
        window.addEventListener("pageshow", function () {
            clearInterval(doorTimer);
            doorFrameIndex = 0;
            doorImage.src = doorFrames[0];
        });
    }

    const tardis = document.querySelector(".tardis-link");

    if (!tardis) return;

    const image = tardis.querySelector("img");

    const frames = [
        "assets/images/tardis1.png",
        "assets/images/tardis2.png",
        "assets/images/tardis3.png",
        "assets/images/tardis4.png"
    ];

    let currentFrame = 0;
    let timer = null;

    // 미리 불러와서 처음 문이 열릴 때 깜빡임 줄이기
    frames.forEach(function (src) {
        const preload = new Image();
        preload.src = src;
    });

    function animateDoor(targetFrame) {
        clearInterval(timer);

        if (currentFrame === targetFrame) return;

        timer = setInterval(function () {
            if (currentFrame < targetFrame) {
                currentFrame++;
            } else {
                currentFrame--;
            }

            image.src = frames[currentFrame];

            if (currentFrame === targetFrame) {
                clearInterval(timer);
            }
        }, 140);
    }

    tardis.addEventListener("mouseenter", function () {
        animateDoor(3);
    });

    tardis.addEventListener("mouseleave", function () {
        if (!tardis.matches(":focus")) {
            animateDoor(0);
        }
    });

    // 키보드로 선택해도 문 열기
    tardis.addEventListener("focus", function () {
        animateDoor(3);
    });

    tardis.addEventListener("blur", function () {
        if (!tardis.matches(":hover")) {
            animateDoor(0);
        }
    });


    /* boodoor */

    const boodoor = document.querySelector(".boodoor-link");

    if (boodoor) {
        const image = boodoor.querySelector("img");

        const frames = [
            "assets/images/Boodoor1.png",
            "assets/images/Boodoor2.png",
            "assets/images/Boodoor3.png",
            "assets/images/Boodoor4.png"
        ];

        let currentFrame = 0;
        let timer = null;

        // 이미지 미리 불러오기
        frames.forEach(function (src) {
            const preload = new Image();
            preload.src = src;
        });

        function animateBoodoor(targetFrame) {
            clearInterval(timer);

            if (currentFrame === targetFrame) return;

            timer = setInterval(function () {
                if (currentFrame < targetFrame) {
                    currentFrame++;
                } else {
                    currentFrame--;
                }

                image.src = frames[currentFrame];

                if (currentFrame === targetFrame) {
                    clearInterval(timer);
                }
            }, 140);
        }

        boodoor.addEventListener("mouseenter", function () {
            animateBoodoor(3);
        });

        boodoor.addEventListener("mouseleave", function () {
            if (!boodoor.matches(":focus")) {
                animateBoodoor(0);
            }
        });

        boodoor.addEventListener("focus", function () {
            animateBoodoor(3);
        });

        boodoor.addEventListener("blur", function () {
            if (!boodoor.matches(":hover")) {
                animateBoodoor(0);
            }
        });

        window.addEventListener("pageshow", function () {
            clearInterval(timer);
            currentFrame = 0;
            image.src = frames[0];
        });
    }

    /* alicedoor */
    const alicedoor = document.querySelector(".alicedoor-link");
    
    if (alicedoor) {
        const image = alicedoor.querySelector(".alice-animation");

        const frames = [
            "assets/images/alicedoor1.png",
            "assets/images/alicedoor2.png",
            "assets/images/alicedoor3.png",
            "assets/images/alicedoor4.png"
        ];

        let currentFrame = 0;
        let timer = null;

        // 이미지 미리 불러오기
        frames.forEach(function (src) {
            const preload = new Image();
            preload.src = src;
        });

        function animateAlicedoor(targetFrame) {
            clearInterval(timer);

            if (currentFrame === targetFrame) return;

            timer = setInterval(function () {
                if (currentFrame < targetFrame) {
                    currentFrame++;
                } else {
                    currentFrame--;
                }

                image.src = frames[currentFrame];

                if (currentFrame === targetFrame) {
                    clearInterval(timer);
                }
            }, 140);
        }

        alicedoor.addEventListener("mouseenter", function () {
            animateAlicedoor(3);
        });

        alicedoor.addEventListener("mouseleave", function () {
            if (!alicedoor.matches(":focus")) {
                animateAlicedoor(0);
            }
        });

        alicedoor.addEventListener("focus", function () {
            animateAlicedoor(3);
        });

        alicedoor.addEventListener("blur", function () {
            if (!alicedoor.matches(":hover")) {
                animateAlicedoor(0);
            }
        });

        window.addEventListener("pageshow", function () {
            clearInterval(timer);
            currentFrame = 0;
            image.src = frames[0];
        });
    }

    /* 타이틀 라벨 */
    const label = document.getElementById("section-label-text");
    const profile = document.querySelector(".profile-box");

    if (!label || !profile) return;

    const steps = [
        "Projects",
        "Project",
        "Projec",
        "Proje",
        "Proj",
        "Pro",
        "Prof",
        "Profi",
        "Profil",
        "Profile"
    ];

    let scheduled = false;

    function updateLabel() {
        scheduled = false;

        const screenHeight = window.innerHeight;
        const scrollTop = Math.max(0, window.scrollY);

        // 문서 전체에서 프로필 박스가 시작되는 위치
        const profileTop =
            profile.getBoundingClientRect().top + scrollTop;

        // 프로필이 들어오는 시점부터 시작하되,
        // 처음부터 보이더라도 맨 위에서는 Projects 유지
        const start = Math.max(0, profileTop - screenHeight);

        // 작은 화면에서도 변화가 너무 빨리 끝나지 않도록
        const end = Math.max(
            start + screenHeight * 0.65,
            profileTop - screenHeight * 0.35
        );

        let progress = (scrollTop - start) / (end - start);
        progress = Math.max(0, Math.min(1, progress));

        const index = Math.min(
            steps.length - 1,
            Math.floor(progress * steps.length)
        );

        if (label.textContent !== steps[index]) {
            label.textContent = steps[index];
        }
    }

    function scheduleUpdate() {
        if (scheduled) return;

        scheduled = true;
        requestAnimationFrame(updateLabel);
    }

    window.addEventListener("scroll", scheduleUpdate, {
        passive: true
    });

    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("pageshow", scheduleUpdate);
    window.addEventListener("load", scheduleUpdate);

    updateLabel();

});