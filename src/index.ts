import express from 'express'

const port = 3000

// Create instance from server
const app = express()

// Add route for the / path + defining HTTP verb = get
app.get('/', (req,res) => {
    res.send("Wla wla wla el so7ab yalla 🔥")
})

// Start express server
app.listen(port, () => {
    console.log(` Server is running at port: ${port}🔥`)
})


export default app;