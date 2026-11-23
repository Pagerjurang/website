(function () {
  var I = window.INFO || {};

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  // Text starting with "[" is an unfilled placeholder -> highlighted
  function txt(s) {
    s = String(s == null ? "" : s);
    return s.charAt(0) === "[" ? '<span class="todo">' + esc(s) + "</span>" : esc(s);
  }
  function wa(num, label) {
    num = String(num || "").replace(/\D/g, "");
    if (!num) return "";
    return '<a class="btn small" href="https://wa.me/' + num + '" rel="noopener">' + esc(label || "WhatsApp") + "</a>";
  }
  function img(src, alt) {
    return src
      ? '<img src="' + esc(src) + '" alt="' + esc(alt) + '" loading="lazy" decoding="async">'
      : '<div class="ph" aria-hidden="true">Foto belum ada</div>';
  }
  function put(id, html) { var el = document.getElementById(id); if (el) el.innerHTML = html; }

  // Galeri
  put("galeri-list", (I.galeri || []).map(function (g) {
    return "<figure>" + img(g.foto, g.keterangan) + "<figcaption>" + txt(g.keterangan) + "</figcaption></figure>";
  }).join(""));

  // Kontak
  var k = (I.kontak || []).map(function (c) {
    return '<div class="contact"><div><span class="muted">' + esc(c.label) + "</span><br>" + txt(c.nama) + "</div>" + wa(c.whatsapp) + "</div>";
  }).join("");
  if (I.koordinat) {
    k += '<p><a class="btn" href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(I.koordinat) + '" rel="noopener">Buka di Google Maps</a></p>';
  } else {
    k += '<p class="todo">[KOORDINAT DUSUN BELUM DIISI]</p>';
  }
  if (I.websiteKalurahan) {
    k += '<p>Informasi resmi pemerintahan: <a href="' + esc(I.websiteKalurahan) + '" rel="noopener">Website Kalurahan Ngawen</a></p>';
  }
  put("kontak-list", k);
  put("kredit", txt(I.kredit));

  // Hero photo
  var hm = document.getElementById("hero-media");
  if (hm && I.fotoUtama) {
    hm.style.backgroundImage = "url('" + String(I.fotoUtama).replace(/'/g, "%27") + "')";
    hm.classList.add("has-photo");
  }
  put("hero-credit", I.fotoUtama || String(I.fotoUtamaKredit || "").charAt(0) === "[" ? txt(I.fotoUtamaKredit) : "");

  var bar = document.getElementById("topbar");
  var now = document.getElementById("now");
  var fill = document.getElementById("bar");
  var hero = document.getElementById("beranda");
  var story = document.querySelector(".story");
  var toc = document.getElementById("toc");
  var tocBtn = document.getElementById("toc-btn");
  var links = document.querySelectorAll(".toc a");

  // Top bar sits transparent over the hero photo, turns solid after it
  if ("IntersectionObserver" in window && hero && bar) {
    new IntersectionObserver(function (e) {
      bar.classList.toggle("over", e[0].isIntersecting);
    }, { rootMargin: "-56px 0px 0px 0px" }).observe(hero);
  } else if (bar) { bar.classList.remove("over"); }

  // Reading progress through the story
  function progress() {
    if (!story || !fill) return;
    var r = story.getBoundingClientRect(), h = window.innerHeight;
    var p = Math.min(1, Math.max(0, (h * 0.4 - r.top) / (r.height - h * 0.4)));
    fill.style.transform = "scaleX(" + p + ")";
  }
  window.addEventListener("scroll", progress, { passive: true });
  progress();

  // Current chapter: highlight in the sidebar and name it in the top bar
  if ("IntersectionObserver" in window && links.length) {
    var byId = {};
    links.forEach(function (l) { byId[l.getAttribute("href").slice(1)] = l; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (l) { l.classList.remove("active"); });
        var l = byId[en.target.id];
        if (l) { l.classList.add("active"); if (now) now.textContent = l.textContent; }
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    document.querySelectorAll(".chapter").forEach(function (c) { io.observe(c); });
    // clear the label when back at the top or past the story
    if (hero) new IntersectionObserver(function (e) { if (e[0].isIntersecting && now) now.textContent = ""; }).observe(hero);
    var gal = document.getElementById("galeri");
    if (gal) new IntersectionObserver(function (e) { if (e[0].isIntersecting && now) now.textContent = ""; }, { rootMargin: "0px 0px -50% 0px" }).observe(gal);
  }

  // Phones: "Daftar isi" opens the same chapter list as a panel
  function closeToc() { if (toc) toc.classList.remove("open"); if (tocBtn) tocBtn.setAttribute("aria-expanded", "false"); }
  if (tocBtn && toc) {
    tocBtn.addEventListener("click", function () {
      var open = toc.classList.toggle("open");
      tocBtn.setAttribute("aria-expanded", open);
    });
    toc.addEventListener("click", function (e) { if (e.target.tagName === "A") closeToc(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeToc(); });
  }

  // Offline support
  if ("serviceWorker" in navigator && location.protocol === "https:") {
    navigator.serviceWorker.register("sw.js").catch(function () {});
  }
})();
