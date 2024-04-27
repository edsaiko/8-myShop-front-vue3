import {onBeforeRouteUpdate,useRoute} from "vue-router"
import {ref} from "vue";
import {getTopCategoryApi} from "@/apis/categoryBanner.js";

export function useCategory(){
    const route = useRoute()
    const categoryData = ref({})

    const getCategory = async (id=1) => {
        const {result} = await getTopCategoryApi(id)
        categoryData.value = result
        console.log("categoryData",categoryData.value)
    }
    onMounted(() => getCategory(route.params.id))

    onBeforeRouteUpdate((to)=>{
        getCategory(to.params.id)
    })

    return {categoryData}
}