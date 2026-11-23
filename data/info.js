/*
  DATA YANG SERING DIUBAH – Website Dusun Pagerjurang
  ---------------------------------------------------
  Cara mengubah: lihat PANDUAN.md.
  Aturan penting:
   - Teks selalu di antara tanda kutip "...".
   - Setiap baris diakhiri koma, kecuali yang terakhir dalam kurung.
   - Tulisan yang diawali "[" dianggap BELUM DIISI dan tampil kuning.
*/
window.INFO = {

  /* ---------- FOTO UTAMA (paling atas) ---------- */
  // Foto lanskap mendatar, lebar 1600 px, ukuran sebaiknya < 250 KB.
  fotoUtama: "",               // contoh: "img/utama.jpg"
  // Setelah foto dipasang, ganti kredit, contoh: "Foto: Dimas, 2026"
  fotoUtamaKredit: "[FOTO UTAMA: perbukitan Pagerjurang · nama fotografer]",

  /* ---------- GALERI ---------- */
  // Foto disimpan di folder img/, lebar maksimal 1200 px, ukuran < 200 KB.
  galeri: [
    { foto: "", keterangan: "[FOTO: perbukitan Pagerjurang saat musim hujan]" },
    { foto: "", keterangan: "[FOTO: tegalan / sawah tadah hujan]" },
    { foto: "", keterangan: "[FOTO: hutan rakyat – pohon jati di lereng]" },
    { foto: "", keterangan: "[FOTO: kandang sapi atau kambing warga]" },
    { foto: "", keterangan: "[FOTO: kenduri Rasulan di balai dusun]" },
    { foto: "", keterangan: "[FOTO: kerja bakti / gotong royong]" }
  ],

  /* ---------- KONTAK & LOKASI ---------- */
  kontak: [
    { label: "Dukuh Pagerjurang", nama: "[NAMA DUKUH]", whatsapp: "" }
  ],
  // Buka Google Maps, tekan lama titik dusun, salin angka koordinat ke sini.
  koordinat: "",               // contoh: "-7.9xxxx,110.6xxxx"
  websiteKalurahan: "",        // alamat website resmi Kalurahan Ngawen, jika ada

  /* ---------- KREDIT ---------- */
  kredit: "Dibuat oleh [NAMA UNIT] KKN-PPM UGM Periode III 2026. Terakhir diperbarui: [BULAN TAHUN]."
};
