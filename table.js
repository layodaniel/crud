

let total = 0;

function createCustomerRow() {
    
    const Cname = document.getElementById("customer").value,
        
    Cemail = document.getElementById("email").value,
        
    Cphone = document.getElementById("phone").value;
        
    let Cbalance = document.getElementById("balance").value;

    if (isNaN(Cbalance)) {
        alert("Balance must be a number");
        return;
    }

    Cbalance = parseInt(Cbalance, 10);

    if ( Cname == '' || Cemail == '' || Cphone == '' || Cbalance == '' ) {

        alert("You are required to fill in all the fields");

    } else {

    const newRow = document.getElementById("tableContainer"),

    newCust = newRow.insertRow(tableContainer.length),

    cust = newCust.insertCell(0),

    email = newCust.insertCell(1),

    phone = newCust.insertCell(2),

    balance = newCust.insertCell(3),

    deleCust = newCust.insertCell(4);

    cust.innerHTML = Cname;
        
    email.innerHTML = Cemail;
        
    phone.innerHTML = Cphone;
        
    balance.innerHTML = Cbalance;

    deleCust.innerHTML = '<button class="deleteCust" onclick="deleteCustomer(event)">Delete</button>';

    newCust.style.backgroundColor = " bisque";

    newCust.style.border = "1px solid gray";

    newCust.style.width = "1400px";

    newCust.style.color = "red";

    cust.style.padding = "10px";

    cust.style.borderRight = "1px solid black";

    email.style.padding = "10px";

    email.style.borderRight = "1px solid black";

    phone.style.padding = "10px";

    phone.style.borderRight = "1px solid black";

    balance.style.padding = "10px";

    balance.style.borderRight = "1px solid black";

    cust.style.fontSize = "20px";

    email.style.fontSize = "20px";

    phone.style.fontSize = "20px";

    balance.style.fontSize = "20px";
    
    total += Cbalance;

    document.getElementById("second").innerHTML = total;

    clearInput();
  
    return false;
}

}

function clearInput() {

    document.getElementById("customer").value = "";

    document.getElementById("email").value = "";

    document.getElementById("phone").value = "";

    document.getElementById("balance").value = "";
}


function deleteCustomer(event) {
    const totalBalanceCell = document.getElementById("second");
    const targetRow = event.target.closest("tr");
    const totalBalance = totalBalanceCell.innerHTML;
    const rowBalance = targetRow.childNodes[3].innerHTML;
    const newBalance = totalBalance - rowBalance;
    totalBalanceCell.innerHTML = newBalance;
    const index = targetRow.rowIndex;
    document.getElementById("tableContainer").deleteRow(index);
}

