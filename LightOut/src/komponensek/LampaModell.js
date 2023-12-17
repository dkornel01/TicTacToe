class LampaModell{
    #lista=[]
    constructor(lista){
        this.#lista=["red","red","red","red","red","red","red","red","red"];
    }
    SetAllapot(index){
        if (this.#lista[index]==="red"){
            this.#lista[index]="blue"
        }
        else{
            this.#lista[index]="red"
        }
    }
    GetLista(){
        return this.#lista
    }
    SetLista(){
        this.#lista=this.#lista;
    }
}
export default LampaModell