document.addEventListener("DOMContentLoaded", (function () {
    for (var e = document.querySelectorAll(".project-overlay"), t = document.querySelectorAll(".project-img-wrapper"), n = document.querySelectorAll(".project-details"), o = document.querySelectorAll(".close-overlay"), r = function (r) {
        n[r].addEventListener("click", (function () {
            t[r].classList.add("blurred")
            n[r].classList.add("blurred")
            return e[r].classList.add("show")
        })), t[r].addEventListener("click", (function () {
            t[r].classList.add("blurred")
            n[r].classList.add("blurred")
            return e[r].classList.add("show")
        })), o[r].addEventListener("click", (function () {
            t[r].classList.remove("blurred")
            n[r].classList.remove("blurred")
            return e[r].classList.remove("show")
        }))
    }, c = 0; c < e.length; c++) r(c)
}))