let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector(".bt");
let turnO = true;
let newButton = document.querySelector("#new-btn");
let newMessage = document.querySelector(".msg-cont");
let newMsg = document.querySelector("#msg");

const winpt = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwin();
    });
});

const showwin = (winner) => {
    newMsg.innerText = `Congratulations, ${winner} wins!`;
    newMessage.classList.remove("hide");
}


const checkwin = () => {
    for (let pattern of winpt) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner", pos1val);
                showwin(pos1val);
            }
        }
    }
}

newButton.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
  
});

resetButton.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
  
});

