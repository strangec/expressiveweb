document.addEventListener("DOMContentLoaded", () => {

  let clickCount = 0;

  const colorPairs = [
    { bg: "#eefcfd", text: "#11c1f1", aActive: "#ff0000" },
    { bg: "#ccffff", text: "#003b99", aActive: "#ff0000" },
    { bg: "#9cc2c8", text: "#05b99e", aActive: "#ff0000" },
    { bg: "#f1f1f1", text: "#333333", aActive: "#ff0000" },
    { bg: "#ade4ff", text: "#ffffff", aActive: "#ff0000" }
  ];

  let currentIndex = -1;

  function getNextThreshold() {
    return Math.floor(Math.random() * 5) + 6;
  }

  let nextThreshold = getNextThreshold();

  const wrapper = document.querySelector(".wrapper");
  if (!wrapper) return;

  const links = wrapper.querySelectorAll("a");

  function triggerColorChange() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * colorPairs.length);
    } while (newIndex === currentIndex);

    currentIndex = newIndex;

    document.body.style.backgroundColor = colorPairs[currentIndex].bg;
    document.body.style.color = colorPairs[currentIndex].text;

    links.forEach(link => {
      link.style.color = colorPairs[currentIndex].text;
    });

    document.body.style.setProperty("--link-active-color", colorPairs[currentIndex].aActive);
  }

  wrapper.addEventListener("click", () => {
    clickCount++;
    if (clickCount >= nextThreshold) {
      triggerColorChange();
      clickCount = 0;
      nextThreshold = getNextThreshold();
    }
  });

  const pages = [
    "1.html","2.html","3.html","4.html","5.html",
    "6.html","7.html","8.html","9.html","10.html",
  ];

  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();

      clickCount++;
      if (clickCount >= nextThreshold) {
        triggerColorChange();
        clickCount = 0;
        nextThreshold = getNextThreshold();
      }

      const randomPage = pages[Math.floor(Math.random() * pages.length)];
      window.location.href = randomPage;
    });
  });

});