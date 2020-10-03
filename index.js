window.onhashchange = function() {
  if (location.hash === "#home" || location.hash === "") {
    var cs = document.querySelector("body").className;
    document.querySelector("body").removeAttribute('class');
    console.log(cs);
    document.getElementById(cs).classList.add("hide");
  }else {
    console.log(loaction.hash);
  }
};
