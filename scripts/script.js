//DARK MODE
const darkmode = () => {
    const wasDarkmode = localStorage.getItem('darkmode') === 'true';
    localStorage.setItem('darkmode', !wasDarkmode);
    const element = document.body;
    element.classList.toggle('dark-mode', !wasDarkmode);
}

const onload = () => {
    document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true');
}
window.onload = function() {onload()};

const hamburgerClick = () => {
    let x = document.getElementById("hamburgerMenu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }