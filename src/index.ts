import { Request, Response } from "express"

export class Teste {
    id = "testeId"
    name = "nameId"

    async route_fazNadaJSON(req: Request, res: Response) {
        console.log("fez nada. Dahora");
        console.log("this.id:")
        console.log(this.id)
        console.log("this.name:")
        console.log(this.name)
        return res.json({"response": "Não fez nada. Deu certo"})
    }
}

export const instance = new Teste()