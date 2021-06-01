const express = require('express')
const { v4: uuidv4 } = require('uuid')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors())


app.get('/random/number', (re, res) => {
    try {

        const randomNumber = uuidv4()
        res.send({ randomNumber })

    } catch (error) {
        console.log(error)
        res.status(500).send('something went wrong')
    }
})  




app.listen(PORT, () => console.log(`server upon port ${PORT}`))