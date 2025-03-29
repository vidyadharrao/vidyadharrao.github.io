document.addEventListener("copy", function(e) {
    e.preventDefault();
    alert("Copying is not allowed on this webpage.");
}, false);

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
}, false);

document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.key === 'c') {
        e.preventDefault();
        alert("Copying is not allowed on this webpage.");
    }
}, false);
