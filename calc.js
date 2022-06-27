function inserirvalores(num){
    const input =  document.getElementById('visor').value
    document.getElementById('visor').value = input + num
    
}
function calcule (){
    const input =  document.getElementById('visor').value
    document.getElementById('visor').value = eval(input)
}
function apagar(){
    document.getElementById('visor').value = ""
}
function invert(){
    calcule()

   const input = document.getElementById('visor').value 
    document.getElementById('visor').value = input * -1
}
function porcentagem(){
    
  const input = document.getElementById('visor').value +'/100' 
  document.getElementById('visor').value = eval (input)

}