let image = document.getElementById("img");
let uploadImg = document.getElementById("upload");
let canvas = document.getElementById("canvas");
let myContext = canvas.getContext("2d");
let download = document.getElementById("download");
let reset = document.getElementById("reset");
let blurm = document.getElementById("blur");
let brightness = document.getElementById("brightness");
let contrast = document.getElementById("contrast");
let grayscale = document.getElementById("grayscale");
let hueRotate = document.getElementById("hue-rotate");
let invert = document.getElementById("invert");
let saturate = document.getElementById("saturate");
let sepia = document.getElementById("sepia");
let filters = document.querySelectorAll("input[type='range']");

window.onload = () => {
  reset.style.display = "none";
  download.style.display = "none";
  canvas.style.display = "none";
};

uploadImg.addEventListener("change", () => {
  resetFun();
  reset.style.display = "block";
  download.style.display = "block";
  canvas.style.display = "block";
  let reader = new FileReader();
  reader.readAsDataURL(uploadImg.files[0]);
  reader.onload = () => {
    image.src = reader.result;
  };
  image.onload = () => {
    canvas.width = image.width;
    canvas.height = image.height;
    myContext.drawImage(image, 0, 0, canvas.width, canvas.height);
    image.style.display = "none";
  };
});

filters.forEach((filter) => {
  filter.addEventListener("input", function () {
    myContext.filter = `
        blur(${blurm.value}px)
        brightness(${brightness.value}%)
        contrast(${contrast.value}%)
        grayscale(${grayscale.value})
        hue-rotate(${hueRotate.value}deg)
        invert(${invert.value}%)
        saturate(${saturate.value}%) 
       sepia(${sepia.value}%)
        `;
    myContext.drawImage(image, 0, 0, canvas.width, canvas.height);
  });
});

download.onclick = () => {
  download.href = canvas.toDataURL();
};

reset.onclick = resetFun;

function resetFun() {
  myContext.filter = "none";
  myContext.drawImage(image, 0, 0, canvas.width, canvas.height);
  blurm.value = "0";
  brightness.value = "100";
  contrast.value = "100";
  grayscale.value = "0";
  hueRotate.value = "0";
  invert.value = "0";

  saturate.value = "100";
  sepia.value = "0";
}



let mode = document.getElementById("mode")
let turn = document.getElementById("turn")
mode.onclick=()=>{
  turn.classList.toggle("toggle")
  document.body.classList.toggle("mode")
  
 
}