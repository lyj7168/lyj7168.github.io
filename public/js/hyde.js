
/* Scrollbar style for Windows */
if (navigator.platform.match(/win32/i)) {
    var cssId = '_webkit-scrollbar';
    if (!document.getElementById(cssId)) {
        var head = document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.id = cssId;
        style.innerText = `
        ::-webkit-scrollbar { width: 6px; height: 6px; background-color: #fff; }
        ::-webkit-scrollbar-track { background-color: #fff; }
        ::-webkit-scrollbar-thumb { background-color: #ccc; border: 1px solid #ddd; }
        `;
        head.appendChild(style);
    }
}
console.log('Powered by Ma Yanbin <myanbin@gmail.com>')
/* Dark mode */
document.getElementById("_dark-mode").addEventListener("click", function(e) {
    e.preventDefault();
    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
    } else {
        document.body.classList.add("dark-mode");
    }
})
