window.onload = function () {

    var seconds = 00;
    var tens = 00;
    var changeTens = document.getElementById("tens")
    var changeSeconds = document.getElementById("seconds")
    var startButton = document.getElementById("button-start")
    var stopButton = document.getElementById("button-stop")
    var resetButton = document.getElementById("button-reset")

    var interval;

    startButton.onclick = function () {

        interval = setInterval(startTimer, 10);
    }

    stopButton.onclick = function () {
        clearInterval(interval);
    }

    resetButton.onclick = function () {
        clearInterval(interval);
        tens = 00;
        seconds = 00;
        changeTens.innerHTML = tens;
        changeSeconds.innerHTML = seconds;
    }


    function startTimer() {
        tens++;

        if (tens <= 9) {
            changeTens.innerHTML = "0" + tens;
        }
        if (tens > 9) {
            changeTens.innerHTML = tens;
        }
        if (tens > 99) {
            console.log("Seconds");
            seconds++;
            changeSeconds.innerHTML = "0" + seconds;
            tens = 0;
            changeTens.innerHTML = "0" + 0;

        }
        if (seconds > 9) {
            changeSeconds.innerHTML = seconds;
        }


    }






















}