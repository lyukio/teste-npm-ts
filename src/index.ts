import { instance as teste } from './teste'
import express from 'express'

const app = express()
app.use(express.json())
const router = express.Router()
router.get('/', teste.fazNada.bind(teste))

app.use("/teste", router)

app.listen(3333, () => console.log('Rodando safas'))