(() => {
  const refs = {
    openModalPurchaseBtn: document.querySelector("[data-modal-purchase-open]"),
    openModalAboutBtn: document.querySelector("[data-modal-about-open]"),
    closeModalPurchaseBtn: document.querySelector("[data-modal-purchase-close]"),
    closeModalAboutBtn: document.querySelector("[data-modal-about-close]"),
    modalPurchase: document.querySelector("[data-modal-purchase]"),
    modalAbout: document.querySelector("[data-modal-about]"),
  };

  refs.openModalPurchaseBtn.addEventListener("click", toggleModalPurchase);
  refs.openModalAboutBtn.addEventListener("click", toggleModalAbout);
  refs.closeModalPurchaseBtn.addEventListener("click", toggleModalPurchase);
  refs.closeModalAboutBtn.addEventListener("click", toggleModalAbout);

  function toggleModalPurchase() {
    refs.modalPurchase.classList.toggle("is-hidden");
  }

  function toggleModalAbout() {
    refs.modalAbout.classList.toggle("is-hidden");
  }
})();