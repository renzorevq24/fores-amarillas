onload = () =>{
  if(es_11_11()){
      document.body.classList.remove("container");
  }
};

function es_11_11 () {
  let ahora = new Date(); 
  let horas = ahora.getHours(); 
  let minutos = ahora.getMinutes(); 
  
  if ((horas === 11 || horas === 23) && minutos === 11) {
      return true; 
  } else {
      return false; 
  }
}