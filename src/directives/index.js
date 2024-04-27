import {useIntersectionObserver} from "@vueuse/core";

export const lazyPlugin={
    install(app){
        app.directive('img-lazy',{
            //el:指令绑定元素 img
            //binding:binding.value 指令=后面表达式的值 图片url
            mounted(el,binding){
                // console.log(el,binding.value)
                const { stop } = useIntersectionObserver(
                    el,//要监控的组件
                    ([{ isIntersecting }]) => {
                        // console.log(isIntersecting)
                        if(isIntersecting){
                            el.src = binding.value //绑定组件里的图片，代替:src
                            stop()
                        }
                    },
                )
            }
        })
    }
}