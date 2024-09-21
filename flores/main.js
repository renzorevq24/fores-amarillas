onload = () =>{
    
    document.getElementById('btnHora').addEventListener('click', () => {
        console.log(es_11_11())
        if(es_11_11()){
            document.getElementById('lblHora').innerHTML = 'Chiii, es la hora ...'
            setTimeout(() => {
                window.location.href = "flores.html";
            }, 2500)
        }
        else {
            document.getElementById('lblHora').innerHTML = 'Esperate, aun no es la hora ...'
            setTimeout(() => {
                document.getElementById('lblHora').innerHTML = '11 : 11'
            }, 2500)
        }

    })

};

function es_11_11 () {
    let ahora = new Date(); 
    let horas = ahora.getHours(); 
    let minutos = ahora.getMinutes(); 
    // return true
    if ((horas === 11 || horas === 23) && minutos === 11) {
        return true; 
    } else {
        return false; 
    }
}