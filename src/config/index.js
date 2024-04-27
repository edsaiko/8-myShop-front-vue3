const env =import.meta.env.MODE || 'prod'

const EnvConfig={
    development:{
        baseApi:'/api',
        mockApi:'http://127.0.0.1:4523/m1/4027410-0-default'
    },
    test:{
        baseApi:'//test.fun/api',
        mockApi:'http://127.0.0.1:4523/m1/4027410-0-default'
    },
    pro:{
        baseApi:'//test.fun/api',
        mockApi:'http://127.0.0.1:4523/m1/4027410-0-default'
    },
}
export default{
    env,
    //mock的总开关
    mock:true,
    ...EnvConfig[env]
}