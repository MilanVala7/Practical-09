const displayText = document.getElementById("displayText");

const btnPrint = document.getElementById("print");
const btnBold = document.getElementById("bold");
const btnItalic = document.getElementById("italic");
const btnUnderline = document.getElementById("underline");
const btnReset = document.getElementById("reset");

let isPrinted = false;

function disableStyleButtons() {
    btnBold.disabled = true;
    btnItalic.disabled = true;
    btnUnderline.disabled = true;
    btnReset.disabled = true;
}

function enableStyleButtons() {
    btnBold.disabled = false;
    btnItalic.disabled = false;
    btnUnderline.disabled = false;
    btnReset.disabled = false;
}

function printText() {

    if (isPrinted === false) {
        displayText.innerText = "Hello World";
        isPrinted = true;
        enableStyleButtons();
    }
    else {
        displayText.innerText = "";
        isPrinted = false;
        clearStyles();
        disableStyleButtons();
    }
}

function makeBold() {
    if (displayText.style.fontWeight === "bold") {
        displayText.style.fontWeight = "normal";
    } else {
        displayText.style.fontWeight = "bold";
    }
}

function makeItalic() {
    if (displayText.style.fontStyle === "italic") {
        displayText.style.fontStyle = "normal";
    } else {
        displayText.style.fontStyle = "italic";
    }
}

function makeUnderline() {
    if (displayText.style.textDecoration === "underline") {
        displayText.style.textDecoration = "none";
    } else {
        displayText.style.textDecoration = "underline";
    }
}

function reset() {
    displayText.style = "none";
}