let boxes =  document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-btn");
let msg =  document.querySelector(".msg");
let turnO = true;

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = () => {
    turnO= true;
    enableboxes();
}

const enableboxes = () => {
    for (box of boxes){
        box.disabled = false;
        box.innerText = "";
        msg.innerText = "";
    }
}


const disableboxes = () =>{
    for (box of boxes){
        box.disabled = true;
    }
}

 
boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if (turnO === true){
            box.innerText = "O";
            turnO = false;
        }else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});


const checkWinner = () => {
    for (let pattern of winPattern){
            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;

            if (pos1val != "" && pos2val != "" && pos3val != ""){
                if (pos1val === pos2val && pos2val === pos3val){         
                    winner(pos1val);
                    disableboxes();                  
                };
                
            };           
    };
};

const winner = (winner) => {
    msg.innerText = `The winner is ${winner}`;
}

resetbtn.addEventListener("click", resetGame);