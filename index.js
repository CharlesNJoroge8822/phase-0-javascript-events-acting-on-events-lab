// Your code here
function moveDodgerLeft (){
    const dodger = document.getElementById ('dodger');
    const leftNum = parseInt (dodger.style.left)
    if (leftNum > 0) dodger.style.left = `${leftNum - 4}px`;

}

function moveDodgerRight(){
    const dodger = document.getElementById('dodger');
    const leftNum = parseInt(dodger.style.left);
    if (leftNum < 360) dodger.style.left = `${leftNum + 4}px`

}


