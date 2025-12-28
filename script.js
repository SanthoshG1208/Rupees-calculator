function updateValue(denomination) {
    let count = document.getElementById("n" + denomination).value;
    if(count === "") {
        document.getElementById("v" + denomination).innerText = "₹0";
        calculateTotal();
        return;
    }
    let value = parseInt(count) * denomination;
    document.getElementById("v" + denomination).innerText = "₹" + value;
    calculateTotal();
}

function calculateTotal() {
    let denominations = [500,200,100,50,20,10,5,2,1];
    let total = 0;
    for(let i=0; i<denominations.length; i++){
        let count = parseInt(document.getElementById("n"+denominations[i]).value || 0);
        total += count * denominations[i];
    }
    document.getElementById("total_amount").innerText = "Total Amount: ₹" + total;
}

function clearAll() {
    let denominations = [500,200,100,50,20,10,5,2,1];
    for(let i=0; i<denominations.length; i++){
        document.getElementById("n"+denominations[i]).value = "";
        document.getElementById("v"+denominations[i]).innerText = "₹0";
    }
    document.getElementById("total_amount").innerText = "Total Amount: ₹0";
}

window.onload = function() {
    calculateTotal();
};
