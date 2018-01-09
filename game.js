function addMonsters() {
  const monster = $('<img src="http://res.cloudinary.com/mdfchucknorris/image/upload/v1515508131/Mikey_rlpj99.png" alt="monsters">')
  monster.css({
    top: '-200px'
  })

  $('.game').append(monster)
  monster.animate({top: '100%'}, {
    duration: 3000,
    easing: 'linear',
    complete: function() {
      monster.remove()
    }
  })
}

$(document).ready(function() {
  addMonsters()
})
