var anhSlide = [];
var anhHienTai = 0;
for (var i = 0; i < 6; i++) {
  anhSlide[i] = new Image();
  anhSlide[i].src = "img/slide" + i + ".jpg";
}

function next() {
  if (anhHienTai < 5) {
    anhHienTai++;
    document.getElementById("anh").src = anhSlide[anhHienTai].src;
  }
}

function back() {
  if (anhHienTai > 0) {
    anhHienTai--;
    document.getElementById("anh").src = anhSlide[anhHienTai].src;
  }
}

function first() {
  anhHienTai = 0;
  var anh = document.getElementById("anh");
  anh.src = anhSlide[anhHienTai].src;
}

function last() {
  anhHienTai = anhSlide.length - 1;
  var anh = document.getElementById("anh");
  anh.src = anhSlide[anhHienTai].src;
}

function diChuotVao() {
  document.getElementById("anh").src = "img/slide6.jpg";
}
function diChuotRa() {
  document.getElementById("anh").src = "img/slide0.jpg";
}
