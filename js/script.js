class Game {
	constructor(backdraw,level) {	
		this.backdraw=backdraw;
		this.level=level;
		this.arrayOfImg=[];
	}

	createCards() {
			for (let i=0;i<this.level;i++) {
					let temp = {cardId: i,
											img:'img'+i+'.png'};
					this.arrayOfImg.push(temp);
					this.arrayOfImg.push(temp);
			}
	}

	randomizeCards() {
		let arr = this.arrayOfImg;
		let length = this.arrayOfImg.length;
 		for (let i = length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    this.arrayOfImg=arr;
	}

	createDraw() {
		let length = this.arrayOfImg;
		for (let i =0; i<this.arrayOfImg.length;i++) {
		document.getElementById('game-place').insertAdjacentHTML('beforeend','<div class="flip-container"><div class="flipper" data-cardId="'+this.arrayOfImg[i].cardId+'"><div class="front" style="background-image:url(img/backdraw'+this.backdraw+'.png);"></div><div class="back"><img class="flip-img" src="img/'+this.arrayOfImg[i].img+'" alt="Unknown cards"></div></div></div>');
		}
	}

}



// class Cards extends Game {
// 	constructor(image,id) {
// 		this.image=image;
// 		this.id=id;
// 	}
// }

function getOption (option) {
	let  x = document.getElementsByClassName(option);
	for (let i = 0, length = x.length; i < length; i++) {
 		if (x[i].checked) {
 			return (x[i].value);
 		}
	}
}

function startGame(){
document.getElementById('game-place').innerHTML="";
let setLevel = getOption('set-Level');
restCards = setLevel;
let setBackdraw = getOption('set-Backdraw');
let newGame = new Game(setBackdraw,setLevel)
newGame.createCards();
newGame.randomizeCards();
newGame.createDraw();
onlyTwoCards=0;
count=0;
guess1=null;
guess2=null;
}

let count=0;
let onlyTwoCards=0;
let guess1,
		guess2;
let restCards=0;

document.addEventListener("DOMContentLoaded", function(event) { 
  //do work


let temp =document.getElementById('game-place');

temp.addEventListener("click", evt => {
	reverseCard(evt.target);
	// setInterval();
	setTimeout(checkCard,1000,evt.target);}, false);
});

function reverseCard (node) {
	if((node.parentNode.classList.value==='flipper')&&(onlyTwoCards<2)) {
		let fChild=node.parentNode;
		fChild.classList.add('active');
		onlyTwoCards++;
	}
}


function checkCard(node){
if((node.parentNode.classList.value==='flipper active')) {
if (count<1) {
	guess1= node.parentNode;
	count++; }
	else { if(guess1!==node.ParentNode) {
		guess2 = node.parentNode;
		if ((guess1.dataset.cardid === guess2.dataset.cardid)) {
			// alert("Compare");
				guess1.parentNode.classList.add('hidden');
				guess2.parentNode.classList.add('hidden');
				guess1=null;
				guess2=null;
				count =0;
				onlyTwoCards=0;
				restCards--;
				
				if (restCards===0) {
					setTimeout(delay,1000,);
				}
		}
	else {
		count =0;
		onlyTwoCards=0;
		guess1.classList.remove('active');
		guess2.classList.remove('active');

	}
	}

}
}
}

function delay () {
	alert('YouWin!!!');
};