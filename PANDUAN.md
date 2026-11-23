# Panduan Mengelola Website Dusun Pagerjurang

Website ini sederhana: hanya berisi beberapa file teks dan foto. Tidak ada biaya bulanan, tidak perlu server, dan tetap bisa dibuka tanpa sinyal setelah pernah dibuka sekali.

## Isi folder

| File / folder | Isi | Seberapa sering diubah |
|---|---|---|
| `data/info.js` | Galeri, kontak, koordinat | **Sering**: ini yang biasanya diubah |
| `index.html` | Teks utama (7 bab: lanskap sampai harapan) | Jarang |
| `img/` | Foto | Saat ada foto baru |
| `css/`, `js/`, `sw.js` | Tampilan dan sistem | Jangan diubah |

## Cara mengubah data (galeri, kontak)

1. Buka repositori website di GitHub (minta akses ke pengelola).
2. Klik folder `data`, lalu file `info.js`, lalu ikon **pensil** (Edit).
3. Ubah tulisan **di antara tanda kutip** `"..."`. Jangan hapus tanda kutip, koma, atau kurung.
4. Tulisan yang diawali `[` (misalnya `"[NAMA DUKUH]"`) adalah isian yang belum diisi. Di website, isian ini tampil dengan latar **kuning**.
5. Gulir ke bawah dan klik **Commit changes**. Website akan diperbarui dalam 1–2 menit. Jika ada yang diubah, naikkan juga angka versi di baris pertama `sw.js` (misalnya `v3` menjadi `v4`) agar HP pengunjung memuat versi terbaru.

### Mengganti foto utama (paling atas)
Unggah foto lanskap mendatar ke folder `img` (lebar 1600 px, di bawah 250 KB), lalu di `data/info.js` isi `fotoUtama: "img/nama-foto.jpg"` dan ganti `fotoUtamaKredit` dengan nama fotografer, misalnya `"Foto: Dimas, 2026"`. Pilih foto yang bagian bawahnya agak gelap/polos supaya tulisan putih tetap terbaca.

### Menambah foto
1. Perkecil foto dulu supaya ringan dibuka di HP: lebar maksimal 1200 px dan ukuran di bawah 200 KB (bisa memakai squoosh.app).
2. Beri nama file tanpa spasi, misalnya `sawah-musim-hujan.jpg`.
3. Di GitHub, buka folder `img`, lalu **Add file → Upload files**.
4. Tulis namanya di `data/info.js`, misalnya `foto: "img/sawah-musim-hujan.jpg"`.

## Mengubah teks bab
Teks ada di `index.html`. Cari kalimat yang ingin diubah (tekan Ctrl+F di editor GitHub), ubah hanya tulisan di antara tanda `<p>` dan `</p>`, lalu Commit. Jangan menghapus tanda `<...>`.

## Jika website rusak setelah diedit
Biasanya penyebabnya tanda kutip atau koma yang terhapus. Di GitHub, buka **History** pada file `info.js`, pilih versi sebelumnya, lalu salin isinya kembali.

## Yang tidak boleh dilakukan
- Mengubah nama file atau folder.
- Menghapus isi `css/`, `js/`, atau `sw.js`.
- Mengunggah foto berukuran besar (lebih dari 1 MB), karena website jadi lambat di HP.
- Mencantumkan nomor HP atau foto warga tanpa izin orang tersebut.

## Kontak pengelola teknis
[NAMA & KONTAK PENGELOLA SETELAH KKN]
