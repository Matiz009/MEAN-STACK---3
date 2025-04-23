function applyJS() {
  let p = document.getElementById("p1");
  console.log(p);
  p.innerHTML = "Hello World!";
  p.style.fontSize = "30px";
  p.style.color = "red";
  p.style.fontFamily = "Arial, sans-serif";

  document.getElementById("img1").src =
    "https://media.istockphoto.com/id/2164899383/photo/crassula-ovata-gollum-succulent-plant-top-view.jpg?s=1024x1024&w=is&k=20&c=-Bttd-O-TuCItQADch_WfaDXInTyYWvPF6pxOCYpzkQ=";
}

let button = document.getElementById("btn");
button.addEventListener("click", applyJS);
