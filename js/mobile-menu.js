document.addEventListener("DOMContentLoaded", () => {
    const refs = {
      openModalBtn: document.querySelector("[data-menu-open]"),
      closeModalBtn: document.querySelector("[data-menu-close]"),
      modal: document.querySelector("[data-menu]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  });

// document.addEventListener("DOMContentLoaded", () => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-menu-open]"),
//     closeModalBtn: document.querySelector("[data-menu-close]"),
//     modal: document.querySelector("[data-menu]"),
//   };

//   if (!refs.openModalBtn || !refs.closeModalBtn || !refs.modal) {
//     console.warn("Some menu elements are missing in DOM.");
//     return;
//   }

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//     document.body.classList.toggle("no-scroll");
//   }
// });

  
  