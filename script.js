let body = document.querySelector('body')
let sen = document.querySelector('.text')
let chek = document.querySelector('#row')
let send = document.querySelector('#send')

let data = []

function todo(filterdata = data) {
    chek.innerHTML = ''

   data.forEach((item , index) =>{
    let credDiv = document.createElement('div')
    credDiv.innerHTML = `
    <div class="box">
        <input type="checkbox">
        <p class="ggc"> ${index + 1}#  ${item}</p>
    </div>
    `
    chek.append(credDiv)
   })
}

function addtask(event) {
    if(sen.value.trim() !== ''){
        data.push(sen.value)
        sen.value = ''
        todo()
    }
}

function darkmode() {
    body.style.backgroundColor = "#252525"
    body.style.color = "white"
    sen.style.backgroundColor = '#252525'
    sen.style.border = '1px solid #F7F7F7'
    sen.style.color = "white"
    sen.value = ''
    localStorage.setItem("oq", "black")
}
function libhtmode() {
    body.style.backgroundColor = "#F7F7F7"
    body.style.color = "black"
    sen.style.backgroundColor = '#F7F7F7'
    sen.style.border = '1px solid #6C63FF'
    sen.value = ''
    localStorage.setItem("oq", "light")
}

let setcolor = localStorage.getItem("oq")

if (setcolor === "black") {
    darkmode()
} else {
    libhtmode()
}