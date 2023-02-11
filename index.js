/* document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    var link = document.createElement("a");
    link.download = "cv.pdf";
    link.href = "https://giuperrotta.github.io/docs/cv.pdf";
    link.click();
  });
 */
document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    window.open("https://giuperrotta.github.io/docs/cv.pdf");
  });
