// Matt Brooks store skeleton - frontend only, no payments wired yet.
//
// config.js holds the placeholders (Instagram handle, Stripe checkout link).
// Until those are filled in, the checkout button stays disabled and the
// Instagram link stays a placeholder. Nothing here takes a payment.

(function () {
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var igLink = document.getElementById("instagram-link");
  var cfg = window.MATT_STORE_CONFIG || {};
  if (igLink && cfg.instagramHandle) {
    igLink.href = "https://www.instagram.com/" + cfg.instagramHandle.replace(/^@/, "");
    igLink.textContent = "Follow on Instagram @" + cfg.instagramHandle.replace(/^@/, "");
    igLink.removeAttribute("data-placeholder");
  }
})();
