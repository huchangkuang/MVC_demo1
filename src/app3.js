import $ from "jquery"
import "./app3.css"

const html = `
    <section id="app3">
        <div class="square"></div>
    </section>
`
const $elements = $(html).appendTo("#page")

const $square = $("#app3 .square")
const active = localStorage.getItem("active") === "yes"
$square.toggleClass("active",active)
$square.on("click", () => {
    if ($square.hasClass("active")) {
        localStorage.setItem("active", "no")
        $square.removeClass("active")
    }else {
        localStorage.setItem("active","yes")
        $square.addClass("active")
    }
})