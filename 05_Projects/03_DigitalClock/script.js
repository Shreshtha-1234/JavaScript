const target = document.getElementById('clock')


setInterval(()=>{
    const date = new Date()
    const formattedDate = date.toLocaleTimeString()
    target.innerHTML= formattedDate
},1000)