const date = new Date(2020,4,15,19,00,00)

console.log(date);

setDate()

function setDate() {
    let nowDate = new Date();
    let second = (date.getTime() - nowDate.getTime())/1000;
    let nombreJour = Math.floor(second/86400) 

    let jour = document.querySelector('#jour')
    jour.style.fontSize = '33px'
    jour.style.color = 'white'
    if (nombreJour === 0) {
        jour.style.display = 'none'
    }else{
        jour.style.display = 'inline'
    }
    jour.innerHTML= `${nombreJour} <strong style="font-size:10px; color:white">JOUR</strong>`

    second -= nombreJour*86400

    let heure = document.querySelector('#heure') 
    let a = Math.floor(second/3600)
    if (a === 0) {
        heure.style.display = 'none'
    }else{
        heure.style.display = 'inline'
    }
    heure.innerHTML = `${a} <strong style="font-size:10px; color:white">HEURE</strong>`
    second -= a*3600
    heure.style.fontSize = '33px'
    heure.style.color = 'white'

    let minute = document.querySelector('#minute') 
    let b = Math.floor(second/60)
    minute.innerHTML = `${b} <strong style="font-size:10px;">MINUTE</strong>`
    second -= b*60
    minute.style.color = 'white'
    minute.style.fontSize = '33px'
    

    let sec = document.querySelector('#seconde')
    let d = Math.floor(second)
    sec.innerHTML = `${d} <strong style="font-size:10px;">SEC</strong>`
    sec.style.fontSize = '30px'
    sec.style.color = 'white'
    
    setTimeout(setDate, 1000)
}

