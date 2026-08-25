# Do'a Ibu — GitHub Website

Repository ini sudah disiapkan untuk website Do'a Ibu Bengkel Las & Konstruksi Besi, Bojong Gede.

## Struktur folder

- `index.html` — halaman website
- `style.css` — desain website
- `media.js` — daftar foto dan video
- `assets/images/` — tempat upload FOTO
- `assets/videos/` — tempat upload VIDEO

## Cara menambah FOTO

1. Buka folder `assets/images` di GitHub.
2. Pilih **Add file → Upload files**.
3. Pilih foto dari HP/komputer.
4. Klik **Commit changes**.
5. Buka `media.js`.
6. Isi contoh berikut sesuai nama file foto:

```js
const images = [
  { file: "pagar-1.jpg", title: "Pagar tralis rumah" },
  { file: "kusen-1.jpg", title: "Kusen aluminium" },
];
```

## Cara menambah VIDEO

Upload video ke `assets/videos`, kemudian isi:

```js
const videos = [
  { file: "proses-las-1.mp4", title: "Proses pengerjaan di workshop" },
];
```

### Penting untuk video
Video sebaiknya dikompres agar tidak terlalu besar. File video yang besar membuat website lebih berat dan deploy Netlify lebih lama. Netlify menyarankan deploy kecil; dokumentasinya juga memperingatkan file individual berukuran besar dapat menyebabkan deploy tersendat.

## Jika GitHub sudah terhubung ke Netlify

Setelah Anda **Commit changes** di GitHub, Netlify dapat menjalankan continuous deployment dan memperbarui website dari repository tersebut.

Website target:
https://doaibu-bojonggede.netlify.app/

## Catatan

Website statis tidak bisa membuat pengunjung mengunggah file langsung ke GitHub. Folder ini membuat Anda bisa mengelola foto/video dari GitHub. Jika yang diinginkan adalah tombol **"Upload Foto/Video" langsung dari website**, kita perlu menambahkan penyimpanan/backend khusus.
