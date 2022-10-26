var container=document.createElement("div");
container.setAttribute("id","main")

var input=document.createElement("input")
input.setAttribute("id","int")

var button=document.createElement("button")
button.setAttribute("id","btn")
button.addEventListener("click",foo)
button.innerHTML="Submit"

var active=document.createElement("div")
active.setAttribute("id","active")

var death=document.createElement("div")
death.setAttribute("id","death")

var recovered=document.createElement("div")
recovered.setAttribute("id","recovered")

container.append(input,button,active,death,recovered)
document.body.append(container)

async function foo(){
try{
    var name=document.getElementById("int").value

    var res=await fetch(`https://api.covid19api.com/dayone/country/${name}`)
    var res1=await res.json()
    console.log(res1)
    var index=res1.length-1
    var result=res1[index].Active
    console.log(result)
    document.getElementById("active").innerHTML=`Total active cases=${result}`

    var result1=res1[index].Deaths
    console.log(result1)
    document.getElementById("death").innerHTML=`Total death cases=${result1}`

    var result1=res1[index].Recovered
    console.log(result1)
    document.getElementById("recovered").innerHTML=`Total recovered cases=${result1}`
}
catch(error){
    console.log(error)
}
}