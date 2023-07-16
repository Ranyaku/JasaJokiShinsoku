var garisList = document.querySelectorAll('.garis');
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var index = 0;

function gantiWarna() {
  garisList.forEach(function(garis) {
    garis.style.backgroundColor = colors[index];
  });
  index = (index + 1) % colors.length;
}

setInterval(gantiWarna, 800); // Ganti warna setiap 1 detik

