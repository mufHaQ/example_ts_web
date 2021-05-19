import { express } from './main'

const route = express.Router()

route.get('/', (req, res) => {
    res.json({
        msg: "Hello World"
    })
})

export default route