(() => {
  const refs = {
    openModalPurchaseBtn: document.querySelector("[data-modal-purchase-open]"),
    openModalPurchaseMobilBtn: document.querySelector("[data-modal-purchase-mobil-open]"),
    openModalAboutBtn: document.querySelector("[data-modal-about-open]"),
    openModalFranchiseBtn: document.querySelector("[data-modal-franchise-open]"),
    closeModalPurchaseBtn: document.querySelector("[data-modal-purchase-close]"),
    closeModalAboutBtn: document.querySelector("[data-modal-about-close]"),
    closeModalFranchiseBtn: document.querySelector("[data-modal-franchise-close]"),
    modalPurchaseMobil: document.querySelector("[data-modal-purchase-mobil]"),
    modalPurchase: document.querySelector("[data-modal-purchase]"),
    modalAbout: document.querySelector("[data-modal-about]"),
    modalFranchise: document.querySelector("[data-modal-franchise]"),
  };

  refs.openModalPurchaseBtn.addEventListener("click", toggleModalPurchase);
  refs.openModalPurchaseMobilBtn.addEventListener("click", toggleModalPurchaseMobil);
  refs.openModalAboutBtn.addEventListener("click", toggleModalAbout);
  refs.openModalFranchiseBtn.addEventListener("click", toggleModalFranchise);
  refs.closeModalPurchaseBtn.addEventListener("click", toggleModalPurchase);
  refs.closeModalAboutBtn.addEventListener("click", toggleModalAbout);
  refs.closeModalFranchiseBtn.addEventListener("click", toggleModalFranchise);

  function toggleModalPurchase() {
    refs.modalPurchase.classList.toggle("is-hidden");
  }

  function toggleModalPurchaseMobil() {
    refs.modalPurchaseMobil.classList.toggle("is-hidden");
  }

  function toggleModalAbout() {
    refs.modalAbout.classList.toggle("is-hidden");
  }

  function toggleModalFranchise() {
    refs.modalFranchise.classList.toggle("is-hidden");
  }
})();