// Import
// From main.ts
import { express } from './main'


// Express
const route = express.Router()
route.get('/', (req, res) => {
    res.json({
        msg: "Hello World"
    })
})
route.get('/about', (req, res) => {
    res.send("About Page")
})


// Export
export default route