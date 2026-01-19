const linksImages = [
  "/assets/img/mitanatraining-angola.jpg",
  "/assets/img/silvfa.ao.png",
];

function shuffle(list) {
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

function renderGallery() {
  const gallery = document.getElementById("pin-gallery");
  const scrambledImages = shuffle([...linksImages]);

  gallery.innerHTML = "";

  scrambledImages.forEach((url) => {
    const img = document.createElement("img");
    img.src = url;
    gallery.appendChild(img);
  });
}

window.onload = renderGallery;
