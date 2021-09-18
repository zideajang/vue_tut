// zidea
// vue2.0 数据绑定监控 Angular 解释
// let data = {
//     title:"machine learning",
//     lesson:12
// }

//vue 2.0 是如何实现响应式，自动对数据进行监控，

let tut = {
    title:"machine learning tutorial"
}

let data ={}


Object.defineProperty(data,"title",{
    get(){
        return tut.title
    },
    set(newValue ){
        // update bind data
        // selection dom {{}}
        tut.title = newValue
    }
})

console.log(tut['title'])
tut.title = "updated Machine leanring tutorials"
console.log(tut.title)