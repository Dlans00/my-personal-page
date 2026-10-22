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

    const doorFrames = [
        "assets/images/door1.png",
        "assets/images/door2.png",
        "assets/images/door3.png",
        "assets/images/door4.png"
    ];

    const frameDuration = 300; // 한 장당 0.3초
    let isOpening = false;

    // 이미지를 미리 불러오기
    const framesReady = Promise.all(
        doorFrames.map(function (path) {
            return new Promise(function (resolve, reject) {
                const image = new Image();

                image.onload = resolve;
                image.onerror = function () {
                    console.error("이미지 불러오기 실패:", image.src);
                    reject(new Error(path));
                };

                image.src = path;
            });
        })
    ).then(
        function () { return true; },
        function () { return false; }
    );

    doorLink.addEventListener("click", async function (event) {
        if (event.ctrlKey || event.metaKey ||
            event.shiftKey || event.altKey) {
            return;
        }

        event.preventDefault();

        if (isOpening) return;
        isOpening = true;

        const loaded = await framesReady;

        if (!loaded) {
            alert("문 이미지 경로를 확인해줘. F12 → Console에 실패한 파일이 표시돼.");
            isOpening = false;
            return;
        }

        let frameIndex = 0;
        doorImage.src = doorFrames[0];

        function nextFrame() {
            frameIndex++;

            if (frameIndex >= doorFrames.length) {
                window.location.href = doorLink.href;
                return;
            }

            doorImage.src = doorFrames[frameIndex];
            setTimeout(nextFrame, frameDuration);
        }

        setTimeout(nextFrame, frameDuration);
    });

    // 뒤로가기로 돌아왔을 때 닫힌 문으로 복원
    window.addEventListener("pageshow", function () {
        doorImage.src = doorFrames[0];
        isOpening = false;
    });

});