let dogdiv=document.getElementById('dog')
let click=document.getElementById('click')
function get(){
fetch('https://dog.ceo/api/breeds/image/random')
.then(response=>response.json())
.then(json=>{
    dogdiv.innerHTML=`<img src='${json.message}' width=300,height=300>`
    console.log(json.message)
})
}
click.onclick=()=>get()