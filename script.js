var score = 0;
var hitval = 0;

function makeBubble() {
    const pbtm = document.querySelector(".pbtm");

    let cluster = ``

    for (let index = 1; index <= 319; index++) {
        let ran = Math.floor(Math.random() * 10) + 1
        cluster += `<div class="bubble">${ran}</div>`
    }
    pbtm.innerHTML = cluster;
}

function makeNewHit() {
    hitval = Math.floor((Math.random() * 10)) + 1
    document.querySelector("#hitval").textContent = hitval;
}

function runTimer() {
    var timer = 60;
    const timerInterval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('#timer').textContent = timer;
        }
        else {
            clearInterval(timerInterval)
            document.querySelector(".pbtm").innerHTML = `<div class="gameOver">
                                                            <h2>Game Over</h2>
                                                            <h3>You Scored ${score}!</h3>
                                                            <h4 style="margin-top:20px;">Refresh Page to Play Again!</h4>
                                                        </div>`
        }

    }, 1000)
}

function increaseScore() {
    score += 10;
    document.querySelector('#score').textContent = score;
}

document.querySelector(".pbtm").addEventListener('click', (event) => {
    let targetValue = Number(event.target.textContent);
    console.log(targetValue);
    if (targetValue === hitval) {
        increaseScore();
        makeNewHit();
        makeBubble();
    }
})

document.querySelector('.start').addEventListener('click', () => {
    runTimer();
    makeNewHit();
    makeBubble();
})