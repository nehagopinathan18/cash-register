let cashDenomination = [2000, 500, 100,  20, 10, 5, 1];
let bilAmount = document.querySelector(".billAmount");
let billDiv = document.querySelector("#bill");
let cashGivenDiv = document.querySelector(".cash-Given");
let cashReceived = document.querySelector(".cashGiven");
const nextBtn = document.querySelector(".next-btn");
const checkBtn = document.querySelector("#check-btn");
var showNotes = document.querySelectorAll(".showNotes");
var output = document.querySelector(".opt");
var errDisplay = document.querySelector(".err-msg");
var errMessage = document.querySelector("#err-opt");
const resetBtn = document.querySelector("#reset-btn");
function balanceNote() {
    var retrnAmt = cashReceived.value - bilAmount.value;
    console.log(retrnAmt);
    
    if (retrnAmt == 0) {
        showErr("No need to return any amount");
    }
    else {
        for (var i = 0; i < cashDenomination.length; i++){
            var note = Math.floor(retrnAmt / cashDenomination[i]);
            console.log(note);
            if (note > 0) {
                showNotes[i].innerHTML = note;
            }
            retrnAmt -= (note * cashDenomination[i]);
        }
    
    }
    hideErr();
    bilAmount.style.display = "none";
    cashGivenDiv.style.display = "none";
    nextBtn.style.display = "none";
    billDiv.style.display = "none";
    output.style.display = "block";
    resetBtn.style.display = "block";
    console.log(retrnAmt);
    // }
       
};


nextBtn.addEventListener('click', () => {
    if (bilAmount.value === '') {
        showErr("Please Enter a valid bill amount");
        
    } else {
        hideErr();
        cashGivenDiv.style.display = "block";
        nextBtn.style.display = "none";
        resetBtn.style.display = "none";
        console.log(bilAmount.value);
    }
})
checkBtn.addEventListener('click', () => {
    if (cashReceived.value < 0 || cashReceived.value === '') {
        showErr("Enter a valid cash amount.")
        return;
    }
    if (Number(bilAmount.value) < Number(cashReceived.value)) {
        balanceNote();
        
    } else {
        showErr("Cash amount should be greater than bill amount.")
    }
})

resetBtn.addEventListener('click', () => {
    window.location.reload();
} )
function hideErr() {
    errDisplay.style.display = "none";
 }
function showErr(msg) {
    errMessage.innerHTML = msg;
    errDisplay.style.display = "block";
 }