import $ from "jquery"
import "./app1.css"

const m = {
    data: {
        n: parseInt(localStorage.getItem("n"))
    }
}
const v = {
    el:null,
    html: `
        <div>
        <div class="output"><span id="number">{{n}}</span></div>
        <div class="actions">
            <button id="add1">+1</button>
            <button id="minus1">-1</button>
            <button id="mul2">*2</button>
            <button id="divide2">/2</button>
        </div>
        </div>
`,
    update() {
        c.ui.number.text(m.data.n || 100)
    },
    render(container) {
        if (v.el === null){
            v.el = $(v.html.replace("{{n}}",m.data.n)).appendTo($(container))
        }else{
            const newEl = $(v.html.replace('{{n}}',m.data.n))
            v.el.replaceWith(newEl)
            v.el = newEl
        }
    }
}
const c = {
    init(container) {
        v.render(container)
        c.ui = {
            button1: $("#add1"),
            button2: $("#minus1"),
            button3: $("#mul2"),
            button4: $("#divide2"),
            number: $("#number")
        }
        c.bindEvent()
    },
    bindEvent() {
        c.ui.button1.on("click", () => {
            m.data.n += 1
            v.render()
        })
        c.ui.button2.on("click", () => {
            m.data.n -= 1
            v.render()
        })
        c.ui.button3.on("click", () => {
            m.data.n *= 1
            v.render()
        })
        c.ui.button4.on("click", () => {
            m.data.n /= 1
            v.render()
        })
    }
}
c.init()
export default c
