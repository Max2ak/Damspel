//Data

const board = [
    0, null, 1, null, 2, null, 3, null,
    null, 4, null, 5, null, 6, null, 7,
    8, null, 9, null, 10, null, 11, null,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, 12, null, 13, null, 14, null, 15, 
    16, null, 17, null, 18, null, 19, null, 
    null, 20, null, 21, null, 22, null, 23,   
]


// DOM ref
const cells = document.querySelectorAll("gridC");
let rödPieces = document.querySelectorAll("p");
let svartPieces = document.querySelectorAll("span");
const rödTurnText = document.querySelectorAll(".RT");
const TurblacknText = document.querySelectorAll(".BT");
const divider = document.querySelectorAll(".D")

// Spelare prop
let turn = true;
let rödScore =12;
let svartScore = 12; 
let spelpjäser; 

let valdPiece = {
    pieceId: -1,
    indexOfBoardPiece: -1,
    isKing: false, 
    seventhSpace: false, 
    ninthSpace: false,
    fourteenthSpace: false,
    eighteenthSpace: false,
    minusSeventhSpace: false,
    minusNinthSpace: false,
    minusFourteenthSpace: false,
    minusEitghteenthSpace: false
}

function givePiecesEventListeners() {
    if(turn){
        for (let i = 0; i < rödPieces.length; i++) {
            rödPieces[i].addEventListener("click", getPlayerPieces);
        }
    } else {
        for (let i= 0; i< svartPieces.length; i++) {
            svartPieces[i].addEventListener("click", getPlayerPieces);
        }
    }
}
