/*

  Debouncing function =>
    Limits how often a function can fire (useful in search inputs, resizing, etc.)

*/

function debounce(fn,delay){
      let timer;
      return (...args)=>{
        clearTimeout(timer)
        timer=setTimeout(()=>fn(...args),delay)
      }
}

const log=debounce(()=>console.log("Debounced"),0.1)

log()
log()
log()

