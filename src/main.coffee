Bar = require "./Bar.coffee"

class Main

  constructor: ->
    console.log "new Main!"

main = new Main();
bar = new Bar();
bar.exec()