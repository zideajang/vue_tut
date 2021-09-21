export default function incrementCount(count){
    const increment = ()=>count.value += 1;
    return {increment}
    
}