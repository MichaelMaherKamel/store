import express, { request } from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import errormiddleware from './middleware/error.middleware'
import config from './config'
import db from './databases'
import { Client } from 'pg'


const port = config.port || 3000

// Create instance from server
const app = express()

//middleware to parse incoming requests
app.use(express.json())

//HTTP request logger middleware
app.use(morgan('common'))

//HTTP security middleware
app.use(helmet())

// Apply the rate limiting middleware to all requests
app.use(rateLimit({
	windowMs: 60 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: "Too many requests"
}))

// Add route for the / path + defining HTTP verb = get
app.get('/', (req,res) => {
    throw new Error('Error Exist')
    res.send("Wla wla wla el so7ab yalla 🔥")
})

//Post request
app.post('/', (req,res) => {
    console.log(req.body)
    res.json(

        {
            message: 'Hello World from Post',
            data: req.body
        }
    )
})

//test db

db.connect().then((Client) => {
    return Client.query('SELECT NOW()').then((res) => {
        Client.release();
        console.log(res.rows)
    }).catch(err => {
        Client.release();
        console.log(err.stack);
    })
});

app.use(errormiddleware)

app.use((req, res) => {
    res.status(404).json(
        {
            message: "You are lost bro, please check somewhere else"
        }
    )
})

// Start express server
app.listen(port, () => {
    console.log(` Server is running at port: ${port}🔥`)
})


export default app;