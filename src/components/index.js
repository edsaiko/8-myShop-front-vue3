import Sku from './detailSku/DetailSku.vue'
export const componentsPlugin={
    install(app){
        app.component('Sku',Sku)
    }
}