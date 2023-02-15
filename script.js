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

// document.getElementById("color").addEventListener("change", onChangeColor);
// function onChangeColor() {
//   console.log(this.value); //this.value contains the hexadecimal value of your input
//   //change your canvas color
// }

// This allow color in color picker change along the input
$(document).on("change", "input[type=color]", function () {
  this.parentNode.style.backgroundColor = this.value;
});

// This is color picker for Fill color
let fillcolor = document.getElementById("ColorPicker");
// function changeColor() {
setInterval(() => {
  document.getElementsByClassName("fill-color").style.fill = fillcolor.value;
});

// This is color picker for website's Background color
let colorpicker = document.getElementById("colorpicker");
setInterval(() => {
  let color = colorpicker.value;
  document.body.style.backgroundColor = color;
}, 200);

function download(href, name) {
  var a = document.createElement("a");

  a.download = name;
  a.href = href;

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function downloadPNG() {
  // specify png with and height in pixels
  var png_width = 1024;
  var png_height = 768;

  var inline_svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50">
     <circle cx="25" cy="25" r="20"/>
  </svg>`; // code of inline SVG

  var canvas = document.createElement("canvas"); // create <canvas> element
  // The 2D Context provides objects, methods, and properties to draw
  // and manipulate graphics on a canvas drawing surface.
  var context = canvas.getContext("2d");

  // set canvas with and height equal to png with and height
  canvas.width = png_width;
  canvas.height = png_height;

  let image = new Image(); // create <img> element
  image.onload = function () {
    // define fill (specify 'no-repeat' if you don't want it to repeat
    context.fillStyle = context.createPattern(image, "repeat");
    // fill rectangle with defined fill
    context.fillRect(0, 0, canvas.width, canvas.height);
    this.download(canvas.toDataURL("image/png"), "example.png");
  }.bind(this);

  // btoa — binary string to ASCII (Base64-encoded)
  image.src = "data:image/svg+xml;base64," + btoa(inline_svg);
}

document.getElementById("dl-png").addEventListener("click", () => {
  console.log("click");
  downloadPNG();
  // let face = document.getElementById("face");
  //   const svg = `
  // <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50">
  //    <circle cx="25" cy="25" r="20"/>
  // </svg>`;
  //   download(
  //     window.URL.createObjectURL(new Blob([svg], { type: "image/svg" })),
  //     "face.svg"
  //   );
});

// document.getElementById("dl-png").addEventListener("click", () => {
//   console.log("click");
//   const screenshotTarget = document.getElementById("face");

//   html2canvas(screenshotTarget).then((canvas) => {
//     const base64image = canvas.toDataURL("image/png");
//     var anchor = document.createElement("a");
//     anchor.setAttribute("herf", base64image);
//     anchor.setAttribute("download", "cute-avatar.png");
//     anchor.click();
//     anchor.remove();
//   });
// });

// var svg = document.querySelector("#dl-png");
// var data = new XMLSerializer().serializeToString(svg);
// var canvas = document.createElement("canvas");
// canvg(canvas, data, {
//   renderCallback: function () {
//     canvas.toBlob(function (blob) {
//       download("cute-avatar.png", blob);
//     });
//   },
// });

// function download(href, name) {
//   var a = document.createElement("a");

//   a.download = name;
//   a.href = href;

//   document.body.appendChild(a);
//   a.click();
//   document.body.removeChild(a);
// }

// download(
//   window.URL.createObjectURL(
//     new Blob(["code of inline SVG"], { type: "image/svg" })
//   ),
//   "svg"
// );
