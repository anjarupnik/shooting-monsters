let points = 100

function addMonsters() {
  const monster = $('<img src="http://res.cloudinary.com/mdfchucknorris/image/upload/v1515508131/Mikey_rlpj99.png" alt="monsters">')
  monster.css({
    top: '-200px',
    left: Math.floor(Math.random() * Math.floor(1000))
  })

    $('.game').append(monster)
    monster.animate({top: window.screen.height}, {
      duration: 2000,
      easing: 'linear',
      complete: function() {
        monster.remove()
        addMonsters()
      }
    })
}

$(document).ready(function() {
  addMonsters()
})
