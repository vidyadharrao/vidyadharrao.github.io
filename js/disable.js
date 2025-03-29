document.addEventListener("copy", function(e) {
    e.clipboardData.setData('text/plain', '');
    e.preventDefault();
}, false);

document.addEventListener("cut", function(e) {
    e.clipboardData.setData('text/plain', '');
    e.preventDefault();
}, false);

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
}, false);

document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
    }
    if (e.ctrlKey && (e.key === 'x' || e.key === 'X')) {
        e.preventDefault();
    }
    if (e.key === 'c' && e.metaKey) {
        e.preventDefault();
    }
    if (e.key === 'x' && e.metaKey) {
        e.preventDefault();
    }
}, false);
