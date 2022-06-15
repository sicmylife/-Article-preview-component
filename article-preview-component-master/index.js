

const boton = document.getElementById('social')
const toggleboton = document.querySelector('.share')




function showsocial(){
toggleboton.classList.toggle('active')

}

 
boton.addEventListener('click',function(e){
  
    showsocial()
});