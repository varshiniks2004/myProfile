function initModal(){
    const modal=document.getElementById("contact-modal");
    const modalContent=document.getElementById("modal-content");
    const modalTrigger=document.getElementById("modal-trigger");
    const modalClose=document.getElementById("modal-close");
    const formCancel=document.getElementById("form-cancel");
    if(!modal || !modalContent || !modalTrigger ||  !modalClose || !formCancel){
        console.log("Modal elements not found");
        return;
    }
    function openModal(){
        modal.classList.remove("hidden");

        setTimeout(function(){
            modalContent.classList.remove("scale-95","opacity-0")

        },10);
    }
    function CloseModal(){
        modalContent.classList.add("hidden");

         setTimeout(function(){
            modalContent.classList.remove("scale-95","opacity-0")

        },200);
        


    }
    modalTrigger.addEventListener("click",openModal);
    modalClose.addEventListener("click",CloseModal);
    formCancel.addEventListener("click",CloseModal);
    //close when clicking on backdrop
    modal.addEventListener("Click",function(event){



    if(event.target ===modal){
        CloseModal();
    }
});
console.log("modal opened successfully");

}