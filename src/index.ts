export class Teste {
    id = "testeId"
    name = "nameId"

    async fazNada() {
        console.log("fez nada. Dahora");
        console.log("this.id:")
        console.log(this.id)
        console.log("this.name:")
        console.log(this.name)
    }
}

export const instance = new Teste()