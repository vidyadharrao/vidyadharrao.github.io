document.addEventListener("copy", function(e) {
    e.preventDefault();
    e.clipboardData.clearData();
    alert("Copying is not allowed on this webpage.");
}, false);

document.addEventListener("cut", function(e) {
    e.preventDefault();
    e.clipboardData.clearData();
    alert("Cutting is not allowed on this webpage.");
}, false);

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
}, false);

document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
        alert("Copying is not allowed on this webpage.");
    }
    if (e.ctrlKey && (e.key === 'x' || e.key === 'X')) {
        e.preventDefault();
        alert("Cutting is not allowed on this webpage.");
    }
}, false);
