let redPointerActive = false;

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.code === 'Backquote') {
        redPointerActive = !redPointerActive;
    }
    changePointer();
});

function changePointer() {
    if (redPointerActive) {
        document.querySelectorAll('*').forEach(function(el) {
            let cursor = chrome.runtime.getURL("cursors/Big-Red-Circle.cur").toString();
            updateCursor(el, 'url(' + cursor + '), auto');
        });
    } else {
        document.querySelectorAll('*').forEach(function(el) {
            updateCursor(el, 'auto')
        });
    }
}

function updateCursor(el, cursorStyle) {
    if (!el.hasAttribute("href")) {
        el.style.cursor = cursorStyle;
    }
}