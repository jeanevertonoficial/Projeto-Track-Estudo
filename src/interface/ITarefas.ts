import IProjetos from "@/interface/IProjetos";

export default interface ITarefas {
    duracaoEmSegundos: number,
    descricaoDaTarefa: string,
    projeto: IProjetos
}