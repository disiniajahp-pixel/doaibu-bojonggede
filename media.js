/*
  GALERI FOTO & VIDEO
  1. Upload foto ke: assets/images/
  2. Upload video ke: assets/videos/
  3. Tambahkan nama file di daftar di bawah.
  4. Commit changes di GitHub. Netlify akan otomatis memperbarui website
     jika repository GitHub sudah terhubung ke Netlify.
*/

const images = [
  // Contoh:
  // { file: "kanopibojonggede.jpg", title: "Pagar tralis" },
];

const videos = [
  // Contoh:
  // { file: "proses-las-1.mp4", title: "Proses pengerjaan" },
];

const gallery = document.getElementById("gallery");

function addCard(type, item) {
  const card = document.createElement("div");
  card.className = "media-card";

  if (type === "image") {
    const img = document.createElement("img");
    img.src = `assets/images/${item.file}`;
    img.alt = item.title || "Hasil pekerjaan Do'a Ibu";
    img.loading = "lazy";
    card.appendChild(img);
  } else {
    const video = document.createElement("video");
    video.src = `assets/videos/${item.file}`;
    video.controls = true;
    video.preload = "metadata";
    card.appendChild(video);
  }

  const caption = document.createElement("div");
  caption.className = "caption";
  caption.textContent = item.title || "Hasil pekerjaan Do'a Ibu";
  card.appendChild(caption);
  gallery.appendChild(card);
}

images.forEach(item => addCard("image", item));
videos.forEach(item => addCard("video", item));

if (!images.length && !videos.length) {
  gallery.innerHTML = `<div class="empty">Galeri masih kosong. Upload foto/video ke folder <b>assets/images</b> atau <b>assets/videos</b>, lalu tambahkan nama filenya di <b>media.js</b>.</div>`;
}
