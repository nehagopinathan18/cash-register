
let bilAmount = document.querySelector(".billAmount");
let cashGivenDiv = document.querySelector(".cash-Given");
let cashReceived = document.querySelector(".cashGiven");
const nextBtn = document.querySelector(".next-btn");
const checkBtn = document.querySelector("#check-btn");
let cashDenomination = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

let hide = () => {
    cashGivenDiv.style.display = "none";
};
let show = () => {
    cashGivenDiv.style.display = "block";
};
nextBtn.addEventListener('click', () => {
    if (Number(bilAmount.value) === '') {
        alert("Please enter bill amount.");
        console.log(Number(bilAmount.value));
    } else {
        show();
    }
});
// function next() {
//     if (Number(bilAmount.value) === '') {
//         alert("Please enter bill amount.");
//         console.log(Number(bilAmount.value));
//     } else {
//         show();
//     }
// };
let balanceAmt = 0;
checkBtn.addEventListener('click', () => {
    let bill = Number(bilAmount.value);
    let amtReceived = Number(cashReceived.value);
    if (bill > 0 && amtReceived > 0) {
        if (!Number.isInteger(amtReceived)){
            alert("Enter correct cash given");
            return;
        } if(bill > amtReceived){
            alert("Cash isless than bill, enter correct amount.");
            return;
        }
        balance(bill, amtReceived);
    } else {
        alert("enter correct bill");
    }
    
});
let balance = (bill, amtReceived) => {
    balanceAmt = amtReceived - bill;
    
    if (balanceAmt <1) {
        alert("no return");
        return;
    } 
        for (let i = 0; i < cashDenomination.length[i]; i++){
            balanceAmt = compare(balanceAmt, cashDenomination.length[i], i);
            console.log(balanceAmt);
        }
        console.log(balanceAmt);
};
let compare = (returnAmt, noteAmt, i) => {
    if (returnAmt >= noteAmt) {
        let notes = Math.floor(returnAmt / noteAmt);
        returnAmt = returnAmt - notes * noteAmt;
        console.log(returnAmt);
        console.log(notes);
        console.log(noteAmt[i]);
    }
    return returnAmt;
    
}

// let check = () => {
//     let bill = Number(bilAmount.value);
//     let amtReceived = Number(cashReceived.value);

//     if (amtReceived > bill) {
//         balanceAmt = amtReceived - bill;
//         console.log(bill,amtReceived);
//         console.log(balanceAmt);
//     } else {
//         console.log("no");
//         console.log(bill,amtReceived);
//     }
//  };


