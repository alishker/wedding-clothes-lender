document.body.addEventListener("click", removeProductFromCart);


 function removeProductFromCart(e){
    if(e.target.classList.contains("remove")){ 
        e.target.parentElement.parentElement.remove();
    }
    else{
        console.log("noooo");
    }
}