import IProjetos from "@/interface/IProjetos";
import {createStore, Store, useStore as vuexUseStore} from "vuex";
import {InjectionKey} from "vue";

interface Estado {
    projetos: IProjetos[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        projetos: []
    },
    mutations: {
        'ADICIONA_PROJETO'(stage, nomeDoProjeto: string){
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto
            } as IProjetos
            stage.projetos.push(projeto)
        }
    }
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}