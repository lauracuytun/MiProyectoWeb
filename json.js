console.log('correcto');
window.onload=function() {
    alert('OK');
}
function traerdatos(){
const xhttp = new XMLHttpRequest();
xhttp.open('GET', 'info.json', true);
xhttp.send();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        console.log(this.responseText);
        let datos = JSON.parse(this.responseText);
        console.log(datos);
        let res = document.querySelector('#contenido');
        res.innerHTML = '';
        
        for(let item of datos){
           res.innerHTML +=`
        
           <tr>
           <td>${item.nombre}</td>
           <td>${item.salida}</td>
           <td>${item.dato_curioso}</td>
           </tr>
           
           
           `
        }
      
        
    }
}
}
  



