let points = 300
let shooted = false
let id = 0

function shoot() {
  this.remove()
  shooted = true
}

function addMonsters() {
  const monster = $('<img class="monster" class="monster" src="http://res.cloudinary.com/mdfchucknorris/image/upload/v1515508131/Mikey_rlpj99.png" alt="monsters">')
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
