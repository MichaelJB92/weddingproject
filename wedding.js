const springButton = document.getElementById('spring')
const summerButton = document.getElementById('summer')
const fallButton = document.getElementById('fall')
const winterButton = document.getElementById('winter')

springButton.addEventListener('click', spring)
summerButton.addEventListener('click', summer)
fallButton.addEventListener('click', fall)
winterButton.addEventListener('click', winter )

function spring() {
const right = document.getElementById('rightSide')
right.style.backgroundImage = "url('images/spring.jpg')";
}

function summer (){
  const right = document.getElementById('rightSide')
  right.style.backgroundImage = "url('images/summer.jpg')";
}

function winter (){
  const right = document.getElementById('rightSide')
  right.style.backgroundImage = "url('images/winter.jpg')";
}

function fall (){
  const right = document.getElementById('rightSide')
  right.style.backgroundImage = "url('images/fall.jpg')"
}