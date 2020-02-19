var static = require('node-static')

var port = process.env.PORT || 4000
var staticServer = new static.Server('./dist')

require('http')
  .createServer(function(request, response) {
    request
      .addListener('end', function() {
        staticServer.serve(request, response)
      })
      .resume()
  })
  .listen(port, () => {
    console.log('Success!  👍')
    console.log(`Server running at http://localhost:${port}`)
  })
