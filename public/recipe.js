var x = document.getElementById("eng");
var y = document.getElementById("hindi");

function changeToEng() {
  if (x.style.display === "block") {
    x.style.display = "block";
    y.style.display = "none";
  } else if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  }

  //   if (x.style.display === "none") {
  //     x.style.display = "block";
  //     y.style.display = "none";
  //   } else {
  //     x.style.display = "none";
  //   }
}

function changeToHindi() {
  if (y.style.display === "none") {
    y.style.display = "block";
    x.style.display = "none";
  } else {
    y.style.display = "none";
  }
}
