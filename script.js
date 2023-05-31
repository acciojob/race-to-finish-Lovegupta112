let resultDiv=document.getElementById('output');
let prom1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello");
    },1200);
})
let prom2=new Promise((resolve,reject)=>{
 setTimeout(()=>{
        resolve("Hii");
    },1800);
})
let prom3=new Promise((resolve,reject)=>{
 setTimeout(()=>{
        resolve("hola");
    },2500);
})
let prom4=new Promise((resolve,reject)=>{
 setTimeout(()=>{
        resolve("Whatsup");
    },3400);
})
let prom5=new Promise((resolve,reject)=>{
 setTimeout(()=>{
        resolve("heyya");
    },4500);
})
window.promises = [prom1,prom2,prom3,prom4,prom5];

let res= Promise.any([prom1,prom2,prom3,prom4,prom5]);
res.then((greet)=>{
    resultDiv.innerText=greet;
})
res.catch((error)=>{
    console.log(error);
})

// Do not change the code above this
// add your promises to the array `promises`
