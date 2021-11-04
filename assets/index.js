document.querySelector(".submit").addEventListener("click", createForm);

function createForm() {
  if (document.querySelector(".bg-pop-up")) {
    document.querySelector(".bg-pop-up").style.display = "grid";
  } else {
    let bgPop = document.createElement("div");
    bgPop.classList.add("bg-pop-up");
    bgPop.classList.add("close");
    bgPop.addEventListener("click", closePopUp);
    document.querySelector("body").appendChild(bgPop);

    let popUp = document.createElement("div");
    popUp.classList.add("pop-up");
    document.querySelector(".bg-pop-up").appendChild(popUp);

    let closeButton = document.createElement("div");
    closeButton.className = "close";
    document.querySelector(".pop-up").appendChild(closeButton);

    let headlineContainer = document.createElement("h2");
    headlineContainer.className = "headline-form";
    document.querySelector(".pop-up").appendChild(headlineContainer);

    let headlineSpan = document.createElement("span");
    headlineSpan.innerHTML = "Unlock This Shocking Video:";
    document.querySelector(".headline-form").appendChild(headlineSpan);

    let headlineP = document.createElement("p");
    headlineP.innerHTML =
      "Medical Doctors Shocked At This New Secret To Burning 200% More Fat Without Giving Up The Foods You Love...";
    document.querySelector(".headline-form").appendChild(headlineP);

    document.querySelector(
      ".pop-up"
    ).innerHTML += `<div class="sib-form" style="text-align: center;
    background-color: #ffffff;                                           ">
<div id="sib-form-container" class="sib-form-container">
<div id="sib-container" class="sib-container--large sib-container--vertical">
 <form id="sib-form" method="POST" action="https://2e640dc0.sibforms.com/serve/MUIEAF00tXZy6iBJj4QKLlMbXFKaUJ78slQ-oG5SIZy4_YNUUKqgo35mceVVLyANncWzwS8gwhxFnLhbWcY8cxJ20a-nrFGS-2yA-3WGckFub2146uRwOLOIc5zmkK_QsHZNXxynmgIM_QR_18wecUAcPHw0C8DhJeNdH1YdJxNsVkNhfeQVsY5M3bLOJRnY74GbOsmd8feQhUgV">
   <div>
     <div class="sib-input sib-form-block">
       <div class="form__entry entry_block">
         <div class="form__label-row ">

           <div class="entry__field">
             <input class="input" maxlength="200" type="text" id="NOME" name="NOME" autocomplete="off" placeholder="Name" />
           </div>
         </div>

         <label class="entry__error entry__error--primary">
         </label>
       </div>
     </div>
   </div>
   <div>
     <div class="sib-input sib-form-block">
       <div class="form__entry entry_block">
         <div class="form__label-row ">

           <div class="entry__field">
             <input class="input" type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="Email" data-required="true" required />
           </div>
         </div>

         <label class="entry__error entry__error--primary">
         </label>
       </div>
     </div>
   </div>
   <div style="padding: 8px 0;">
     <div class="sib-form-block" style="text-align: center">
       <button class="sib-form-block__button sib-form-block__button-with-loader" form="sib-form" type="submit">
         <svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
           <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
         </svg>
         Click Here To Watch The Free Video Now
       </button>
     </div>
   </div>
   <input type="text" name="email_address_check" value="" class="input--hidden">
   <input type="hidden" name="locale" value="pt">
   <input type="hidden" name="html_type" value="simple">
 </form>
</div>
</div>`;
  }
}

function closePopUp({ target }) {
  let list = Array.from(target.classList);

  if (list.some((c) => c === "close")) {
    document.querySelector(".bg-pop-up").style.display = "none";
  }
}
