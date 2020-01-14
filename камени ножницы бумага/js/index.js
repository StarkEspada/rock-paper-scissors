
var image = ["img/бумага.png", "img/камень.png", "img/ножницы.png"]



class rockPapperScissors{

	constructor(boxBott, boxMessange, boxStone, boxScissor, boxPaper, data){
		this.boxBott = document.querySelector(boxBott)
		this.boxMessange = document.querySelector(boxMessange)
		this.boxStone = document.querySelector(boxStone)
		this.boxScissor = document.querySelector(boxScissor)
		this.boxPaper = document.querySelector(boxPaper)
		this.data = data
		this.random = null
		this.i = null
		this.j = null
		this.init()
	}


	createImg(){
		this.boxBott.innerHTML = ""
		var image = document.createElement("img")
		var random = Math.floor(Math.random() * 3)
		this.random = random
		image.setAttribute("src", this.data[this.random])
		image.setAttribute("i", this.random)
		var i = +image.getAttribute("i")
		this.i = i
		console.log(this.i)
		this.boxBott.appendChild(image)
	}


	test(numOne, numTwo){
		var places = event.target
		this.boxStone.setAttribute("j", numOne)
		var j = +this.boxStone.getAttribute("j")
		this.j = j
		console.log(j)
		if(this.i === this.j){
			this.boxMessange.innerHTML = "Вы Победили"
		} else if(this.i !== this.j && this.i === numTwo){
			this.boxMessange.innerHTML = "Ничья"
		} else {
			this.boxMessange.innerHTML = "Проиграл"
		}
	}


	stone(){
		this.boxStone.addEventListener("click", handler.bind(this))

		function handler(){
			this.createImg()
			this.test(2, 1)
		}
	}

	papper(){
		this.boxPaper.addEventListener("click", handler.bind(this))

		function handler(){
			this.createImg()
			this.test(1, 0)
		}
	}

	scissor(){
		this.boxScissor.addEventListener("click", handler.bind(this))

		function handler(){
			this.createImg()
			this.test(0, 2)
		}
	}



	init(){
		this.stone()
		this.papper()
		this.scissor()
}
}

var gameRPS = new rockPapperScissors(".bott", ".messange", ".stone", ".scissor", ".paper", image, 2)