import $ from "jquery"
import "./app2.css"

const html = `
    <section id="app2">
        <ol class="tab-bar">
            <li>1</li>
            <li>2</li>
        </ol>
        <ol class="tab-content">
            <li>内容1</li>
            <li>内容2</li>
        </ol>
    </section>
`
const $elements = $(html).appendTo("#page")

const index1 = localStorage.getItem("index") || 0
const $tabBar = $("#app2 .tab-bar")
const $tabContent = $("#app2 .tab-content")
$tabBar.on("click" , "li" , (e)=>{
    const $li = $(e.currentTarget)
    const index = $li.index()
    localStorage.setItem("index",index)
    $li.addClass("selected").siblings().removeClass("selected")
    $tabContent.children().eq(index).addClass("show").siblings().removeClass("show")
})
$tabBar.children().eq(index1).trigger("click")