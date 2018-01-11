let points = 300
let shooted = false
let score = 0

function getRandomColor() {
  var letters = '0123456789ABCDEF'
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

function shoot(event) {
  this.src = 'http://moziru.com/images/green-clipart-10.gif'
  this.id = "splash"
  shooted = true
  score += 10
  $('h1').css({color: getRandomColor()})
  $('h1').html(score)
}

function addMonsters() {
  const monster = $('<img class="monster" src="http://res.cloudinary.com/mdfchucknorris/image/upload/v1515508131/Mikey_rlpj99.png" alt="monsters">')
  monster.css({
    top: '-200px',
    left: Math.floor(Math.random() * Math.floor(1000))
  })

    $('.game').append(monster)
    monster.animate({top: window.screen.height}, {
      duration: Math.random() * (2000 - 1200) + 1200,
      easing: 'linear',
      complete: function() {
        monster.remove(),
        play(),
        miss(),
        shooted = false
      }
    })
}

function miss() {
  const progressBar = $('.progress-bar')
  if (shooted === false) {
    points -= 50
    progressBar.css({
      width: points
    })
    if (points === 0) {
      gameOver()
    }
  }
}

function play() {
  if (points >= 0) {
    setTimeout(addMonsters, 2000)
  }
}

function gameOver() {
  $('.modal').css({display: 'block'})
}

$(document).on('click','.modal',function () {
  $('.modal').css({display: 'none'})
  points = 300
  score = 0
  $('h1').html(score)
  $('.progress-bar').css({width: points})
  play()
  addMonsters()
})

$(document).on('click', '.monster', shoot)

$(document).ready(function() {
  addMonsters()
  play()
})

$(document).mousemove(function(e){
  $(".mouse").show().css({left:e.clientX, top:e.clientY});
})
