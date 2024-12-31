document.addEventListener('DOMContentLoaded', () => {
  const mobileSplashText = document.querySelector('[data-splash-animate-font-mobile]');
  const desktopSplashText = document.querySelector('[data-splash-animate-font-desktop]');
  const desktopSplashTexts = [
    'graphic design',
    'photography',
    'assisting',
    'retouching',
    'art direction',
    'cool things',
  ]
  let desktopSplashIndex = 0;

  const fetchImages = () => {
    const imagesWrapper = document.querySelector('[data-carousel]');
    const baseImages = imagesWrapper.querySelectorAll('img:not([data-carousel-mobile-only].hidden)').values();
    const mobileImages = imagesWrapper.querySelectorAll('img[data-carousel-mobile-only].hidden').values();

    return isMobile() ? [...baseImages, ...mobileImages] : [...baseImages];
  }

  const isMobile = () => {
    return window.matchMedia("screen and (max-width: 1024px) and (orientation: portrait)").matches;
  }

  const nextSplashText = () => {
    if (mobileSplashText.classList.contains('italic')) {
      mobileSplashText.classList.remove('italic');
    } else {
      mobileSplashText.classList.add('italic');
    }

    desktopSplashText.textContent = desktopSplashTexts[desktopSplashIndex];
    desktopSplashIndex = (desktopSplashIndex + 1) % desktopSplashTexts.length;
  }

  const nextImage = () => {
    const images = fetchImages();

    const currentIndex = images.findIndex(ele => !ele.classList.contains('hidden'));
    const nextIndex = (currentIndex + 1) % images.length;

    images[currentIndex].classList.add('hidden');
    images[nextIndex].classList.remove('hidden');
  };

  const prevImage = () => {
    const images = fetchImages();

    const currentIndex = images.findIndex(ele => !ele.classList.contains('hidden'));
    const nextIndex = currentIndex <= 0 ? images.length - 1 : currentIndex - 1;

    images[currentIndex].classList.add('hidden');
    images[nextIndex].classList.remove('hidden');
  };

  document.querySelector('[data-carousel-next-image]').addEventListener('click', nextImage);
  document.querySelector('[data-carousel-prev-image]').addEventListener('click', prevImage);


  setInterval(() => {
    if (isMobile()) nextImage();
    nextSplashText();
  }, 1250);
});
