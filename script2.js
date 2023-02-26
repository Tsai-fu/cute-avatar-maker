// document.querySelector("button").addEventListener("click", function () {
//   html2canvas(document.querySelector(".specific"), {
//     onrendered: function (canvas) {
//       // document.body.appendChild(canvas);
//       return Canvas2Image.saveAsPNG(canvas);
//     },
//   });
// });
document.querySelector("button").addEventListener("click", function () {
  html2canvas(document.querySelector(".specific")).then((canvas) => {
    const dataURL = canvas.toDataURL();
    console.log(dataURL);
    return Canvas2Image.saveAsPNG(canvas);
  });
});
