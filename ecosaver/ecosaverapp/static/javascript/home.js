document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("btn");
    var light = document.getElementById("light");

    btn.addEventListener("click", function () {
        toggleBtn();
    });

    function toggleBtn() {
        btn.classList.toggle("active");
        light.classList.toggle("on");
    }
});


function toggleSidebar() {
    const body = document.querySelector('body');
    body.classList.toggle('sidebar-open');
}

function closeSidebar() {
    const body = document.querySelector('body');
    body.classList.remove('sidebar-open');
}
