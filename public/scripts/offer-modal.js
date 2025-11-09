document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("offer-modal");
  const overlay = document.getElementById("offer-modal-overlay");
  const closeBtn = document.getElementById("offer-modal-close");
  const contentEl = document.getElementById("offer-modal-content");

  const close = () => modal?.classList.add("hidden");

  document.querySelectorAll("[data-offer-content]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const text = btn.getAttribute("data-offer-content") || "";
      if (contentEl) contentEl.textContent = text;
      modal?.classList.remove("hidden");
    });
  });

  overlay?.addEventListener("click", close);
  closeBtn?.addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
});
