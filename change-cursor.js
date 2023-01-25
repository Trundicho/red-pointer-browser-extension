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
            var cursor = chrome.runtime.getURL("cursors/Big-Red-Circle.cur").toString();
            el.style.cursor = 'url(' + cursor +'), auto';
        });
    } else {
        document.querySelectorAll('*').forEach(function(el) {
            el.style.cursor = 'auto';
        });
    }
}
