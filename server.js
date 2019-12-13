const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 8000
require('./config/db')

const userController = require('./controllers/users')

app.use(express.static(path.join(__dirname, 'build')))
app.use(express.json())

app.use('/auth', userController)

app.get('/api/v1/hello', (req, res) => {
    res.json({ message: 'world' })
})

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})


// REACT_APP_SONGKICK_API_KEY=eSt9JrPlCSSmZP8Q
// REACT_APP_API_KEY=AIzaSyBR4ek5JxEL2qi9iZtj_-L1OtssW_ZxCQU
// REACT_APP_AUTH_DOMAIN=live-music-app.firebaseapp.com
// REACT_APP_DATABASE_URL=https://live-music-app.firebaseio.com
// REACT_APP_PROJECT_ID=live-music-app 
// REACT_APP_STORAGE_BUCKET=live-music-app.appspot.com 
// REACT_APP_MESSAGING_SENDER_ID=946010095308 