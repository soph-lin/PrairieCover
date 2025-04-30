console.log("Running PrairieCover! 🍀");

let showAnswers = false;

document.addEventListener("DOMContentLoaded", ()=> {
    handleToggleHide();
});

function handleToggleHide() {
    // Toggle hide on Shift + S
    document.addEventListener('keydown', (event) => {
        if (event.shiftKey && event.key.toLowerCase() === "s") {
            event.preventDefault();
            if (showAnswers) {
                styleHide();
            } else {
                styleShow();
            }
        }
    });
}

function styleShow(callback) {
    if (!showAnswers) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = chrome.runtime.getURL("/src/css/show.css");
        link.id = "prairiecover-show-css";
        link.onload = () => {
            showAnswers = true;
            callback?.();
        };
        document.head.appendChild(link);
    } else {
        callback?.();
    }
}

function styleHide() {
    const link = document.getElementById("prairiecover-show-css");
    if (link) {
        link.remove();
        showAnswers = false;
    }
}