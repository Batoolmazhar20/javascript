function greet(){
    alert("Hello user")
}

function deleteRow (button){
    var row = button.parentNode.parentNode
    row.remove();
}

function on(e){
    e.src="https://png.pngtree.com/png-vector/20241211/ourmid/pngtree-authentic-italian-pizza-with-cheese-and-fresh-vegetable-toppings-png-image_14714611.png"
    console.log(e)
}    

function off(e){
    e.src="https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4="
    console.log(e)
}

function showButton(){
    document.getElementById("purchaseBtn").style.display="inline-block";
}
function buyNow(){
    alert("Thanks foor purchasing!")
}