/* Google Analytics се зарежда само след съгласие на посетителя */
(function () {
  var ID = "G-8ZKM5ZGQ27", K = "nl_consent";
  function load() {
    if (window.__ga) return; window.__ga = 1;
    var s = document.createElement("script"); s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    gtag("js", new Date());
    gtag("config", ID, { anonymize_ip: true });
  }
  var c = null;
  try { c = localStorage.getItem(K); } catch (e) {}
  if (c === "yes") { load(); return; }
  if (c === "no") return;
  function show() {
    var b = document.createElement("div");
    b.setAttribute("role", "dialog"); b.setAttribute("aria-label", "Бисквитки");
    b.style.cssText = "position:fixed;left:12px;right:12px;bottom:12px;z-index:50;max-width:560px;margin:0 auto;padding:14px 16px;border:1px solid var(--line,#D5DBDF);border-radius:12px;background:var(--card,#fff);color:var(--ink,#0E1A22);box-shadow:0 6px 24px rgba(0,0,0,.25);font-size:14px;line-height:1.45";
    b.innerHTML = '<p style="margin:0 0 10px">Използвам бисквитки на Google Analytics, за да виждам колко хора посещават сайта. Те се пускат само ако се съгласиш.</p><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn" type="button" id="nlY">Приемам</button><button class="btn ghost" type="button" id="nlN">Отказвам</button></div>';
    document.body.appendChild(b);
    function done(v) { try { localStorage.setItem(K, v); } catch (e) {} b.remove(); if (v === "yes") load(); }
    document.getElementById("nlY").onclick = function () { done("yes"); };
    document.getElementById("nlN").onclick = function () { done("no"); };
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", show); else show();
})();
