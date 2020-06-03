import $ from "jquery"
import "./app3.css"

const $square = $("#app3 .square")
$square.on("click",()=>{
    $square.hasClass("active") ? $square.removeClass("active") : $square.addClass("active")
})