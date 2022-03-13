let imgsArray = [

    {
        img1: "url('imagem/img-slides/img6.jpeg')",
        img2: "url('imagem/img-slides/img5.jpeg')",
        img3: "url('imagem/img-slides/img4.jpeg')",
    },

    {
        img4: "url('imagem/img-slides/img3.jpeg')",
        img5: "url('imagem/img-slides/img2.jpeg')",
        img6: "url('imagem/img-slides/img1.jpeg')",
    }
]

let abrir = document.getElementById("abrirMenuB")
let fechar = document.getElementById("fechar")
let voltar = document.querySelector("#voltar")
let menu = document.getElementById("menu")


let imgC1 = document.querySelector(".imgs-divs1")
let imgC2 = document.querySelector(".imgs-divs2")
let imgC3 = document.querySelector(".imgs-divs3")


let radio1 = document.querySelector("#radio1")
let radio2 = document.querySelector("#radio2")





function abrirMenu() {
    menu.style.width = "250px"
}

function fecharMenu() {
    menu.style.width = "0px"
}


function firstB() {


    imgC1.style.backgroundImage = imgsArray[0].img1
    imgC2.style.backgroundImage = imgsArray[0].img2
    imgC3.style.backgroundImage = imgsArray[0].img3

}

function secundFunc() {

    imgC1.style.backgroundImage = imgsArray[1].img4
    imgC2.style.backgroundImage = imgsArray[1].img5
    imgC3.style.backgroundImage = imgsArray[1].img6

}


radio1.addEventListener("click", firstB)
radio2.addEventListener("click", secundFunc)


abrir.addEventListener("click", abrirMenu);
fechar.addEventListener("click", fecharMenu);