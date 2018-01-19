let points = 300
let score = 0

function shoot(event) {
  if (this.id === 'splash') {return null}
  this.src = 'http://moziru.com/images/green-clipart-10.gif'
  this.id = "splash"
  score += 10
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
        miss(monster)
      }
    })
}

function miss(monster) {
  const progressBar = $('.progress-bar')
  if (monster[0].id != 'splash') {
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
    setTimeout(addMonsters, 1700)
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
