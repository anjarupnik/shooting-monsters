let points = 100

function addMonsters() {
  const monster = $('<img src="http://res.cloudinary.com/mdfchucknorris/image/upload/v1515508131/Mikey_rlpj99.png" alt="monsters">')
  monster.css({
    top: '-200px',
    left: Math.floor(Math.random() * Math.floor(1000))
  })

    $('.game').append(monster)
    monster.animate({top: window.screen.height}, {
      duration: Math.random() * (2500 - 1500) + 1500,
      easing: 'linear',
      complete: function() {
        monster.remove(),
        addMonsters()
      }
    })
}

function play() {
    setTimeout(addMonsters, 3000)
}

$(document).ready(function() {
  addMonsters()
  play()
})

$(document).mousemove(function(e){
  $(".mouse").css({left:e.pageX, top:e.pageY});
})
