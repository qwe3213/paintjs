 const canvas = document.getElementById("jsCanvas");
 let painting =false;

  function stopPainting(){
   painting=false;
  }
 function onMousemove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    
 }
 function onMousedown(event){
    console.log(event);
    painting=true;
 }
 function onMouseup (event){
   stopPainting()
 }
 
 
 if(canvas){
    canvas.addEventListener("mousemove",onMousemove)
    canvas.addEventListener("mousedown",onMousedown)
    canvas.addEventListener("mouseup",onMouseup)
    canvas.addEventListener("mouseleave",stopPainting)
 }