let taskbar = document.getElementsByClassName("taskbar")[0]
let startmanu = document.getElementsByClassName("startmanu")[0]

taskbar.addEventListener("click",()=>{
    if(startmanu.style.bottom == "50px"){
        startmanu.style.bottom = "-650px"
    }
    else{
        startmanu.style.bottom = "50px"
    }
})