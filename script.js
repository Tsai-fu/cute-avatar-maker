"use strict";

// $('.component-option').on('click', function () {
//     let $this = $(this);
//     $this.siblings().removeClass('active');
//     $this.addClass('active');

//     let $avatar_component = $('#' + $this.data('id'));
//     $avatar_component.siblings().removeClass('show');
//     $avatar_component.addClass('show');
// })

document.querySelectorAll(".component-option").forEach((item) => {
  item.addEventListener("click", () => {
    item.parentNode.querySelector(".active").classList.remove("active");
    item.classList.add("active");
    let avatar_component = document.getElementById(item.dataset.id);
    avatar_component.parentNode.querySelector(".show").classList.remove("show");
    avatar_component.classList.add("show");
  });
});

// This allow color in color picker change along the input
document.querySelectorAll("input[type=color]").forEach((item) => {
  item.addEventListener("input", (event) => {
    item.parentNode.style.backgroundColor = event.target.value;
  });
});

// Color picker for fill color
document
  .querySelector("#fill-color-picker")
  .addEventListener("input", (event) => {
    document.querySelectorAll(".fill-color").forEach((item) => {
      item.style.fill = event.target.value;
    });
  });

// Color picker for stroke color
document
  .querySelector("#stroke-color-picker")
  .addEventListener("input", (event) => {
    document.querySelectorAll(".stroke-color").forEach((item) => {
      item.style.stroke = event.target.value;
    });
    document.querySelectorAll(".special-fill").forEach((item) => {
      item.style.fill = event.target.value;
    });
  });

// Color picker for website's Background color
// document
//   .querySelector("#background-color-picker")
//   .addEventListener("input", (event) => {
//     console.log(event.target.value);
//     document.body.style.backgroundColor = event.target.value;
//   });

// Color picker for avatar's Background color
document
  .querySelector("#background-color-picker")
  .addEventListener("input", (event) => {
    console.log(event.target.value);
    document.querySelector("#avatar-bg").style.fill = event.target.value;
  });

/////////////////////////////////////////////////

// document
//   .querySelector(".download-button")
//   .addEventListener("click", function () {
//     html2canvas(document.querySelector("#avatar")).then((canvas) => {
//       return Canvas2Image.saveAsPNG(canvas);
//     });
//   });

/////////////////////////////////////////////////

function download(href, name) {
  var a = document.createElement("a");

  a.download = name;
  a.href = href;

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

////////////////////////////////////////////////

function downloadSVGAsPNG(e) {
  const canvas = document.createElement("canvas");
  const svg = document.querySelector("#avatar");
  console.log(svg.outerHTML);
  const base64doc = btoa(decodeURIComponent(encodeURIComponent(svg.outerHTML)));
  const w = parseInt(svg.getAttribute("width"));
  const h = parseInt(svg.getAttribute("height"));
  const img_to_download = document.createElement("img");
  img_to_download.src = "data:image/svg+xml;base64," + base64doc;
  console.log(w, h);
  img_to_download.onload = function () {
    console.log("img loaded");
    canvas.setAttribute("width", w);
    canvas.setAttribute("height", h);
    const context = canvas.getContext("2d");
    //context.clearRect(0, 0, w, h);
    context.drawImage(img_to_download, 0, 0, w, h);
    const dataURL = canvas.toDataURL("image/png");
    if (window.navigator.msSaveBlob) {
      window.navigator.msSaveBlob(canvas.msToBlob(), "download.png");
      e.preventDefault();
    } else {
      const a = document.createElement("a");
      const my_evt = new MouseEvent("click");
      a.download = "cute-avatar.png";
      a.href = dataURL;
      a.dispatchEvent(my_evt);
    }
    //canvas.parentNode.removeChild(canvas);
  };
}

const downloadPNG = document.querySelector("#downloadPNG");
downloadPNG.addEventListener("click", downloadSVGAsPNG);
