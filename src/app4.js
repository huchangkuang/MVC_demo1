import $ from "jquery"
import "./app4.css"

const html = `
    <section id="app4">
        <div class="circle"></div>
    </section>
`
const $elements = $(html).appendTo("#page")

const $circle = $("#app4 .circle")
$circle.on("mouseenter", () => {
    $circle.addClass("gradient")
}).on("mouseleave", () => {
    $circle.removeClass("gradient")
})