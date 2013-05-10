fs = require 'fs'
growl = require 'growl'
browserify  = require 'browserify'
coffeeify  = require 'coffeeify'

files = [
  "src/main.coffee",
  "src/Bar.coffee"
]

# Runs browserify
execute = ->
  # equal of command line $ "browserify --debug -t coffeeify ./src/main.coffee > bundle.js "
  b = browserify()
  b.add './src/main.coffee'
  b.transform coffeeify
  b.bundle
    debug: true
    transform: coffeeify
  , (err, result) ->
    if not err
      fs.writeFile "example/bundle.js", result, (err) ->
        if not err
          console.log "✔ browserify complete"
        else
          console.error "browserify failed: " + err
    else
      console.error "failed " + err

task 'browserify', 'Browserify', (options) ->
  watch files, execute
  execute()

# `files` Array of files to watch
# `fn` Function to execute when a file changes
watch = (files, fn) ->
  console.log "Watching: #{files}"
  for file in files then do (file) ->
    fs.watch file, (event, filename) ->
      fn()
      filename = path.basename file
      notify "#{filename} changed", "Build complete."

# `title` Notification title
# `message` Notification message
notify = (title, message) ->
  console.log "#{title}: #{message}"
  growl message, {title:title}