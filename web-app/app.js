const express = require('express')
const request = require('request')
const app = express()

app.get('/', (req, res) => {
  updateTime(res)
})

function updateTime(res) {
  request.get('http://go-service:8080/time', (error, response, body) => {
    if (error) {
      res.send('Error: ' + error)
    } else {
      const time = JSON.parse(body).time
      res.send(`
        <html>
          <head>
            <style>
              body {
                background-color: grey;
                color: white;
                text-align: center;
                font-size: 50px;
              }
            </style>
          </head>
          <body>
            <h1>Current time in Almaty:</h1>
            <p id="time">${time}</p>
            <script>
              setInterval(() => {
                fetch('/time')
                  .then(response => response.json())
                  .then(data => {
                    document.getElementById('time').innerHTML = data.time
                  })
              }, 5000)
            </script>
          </body>
        </html>
      `)
    }
  })
}

app.get('/time', (req, res) => {
  request.get('http://go-service:8080/time', (error, response, body) => {
    if (error) {
      res.send('Error: ' + error)
    } else {
      res.json(JSON.parse(body))
    }
  })
})

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/')
})
