function touchStarted(){
  state=1;
}
function touchEnded(){
  state=0;
  if(state==-2){
    if(mouseX<width/2){
      state =0;
      rrr = Math.floor(Math.random()*100);
    }
    else{
      state =-1;
      for(let e=0;e<mm[drawsN].length;e++){
        let dra = new Draw(e,mm[drawsN][e]);
        draws[e]= dra;
      }
    }
  }
}

function keyPressed(){

  if(keyCode == 189 || keyCode == 187){
  }

}


function addSnapshot( id )
{
  let dumps = [];
      console.log(dumps);
      localStorage.setItem( "canvas-" + id , JSON.stringify(dumps) )
      
}     

function removeSnapshot(id) 
{
  localStorage.removeItem("canvas-" + id) ;
}  


function getSnapshot( id )
{
  let canvas = JSON.parse(localStorage.getItem( "canvas-" + id )) ;
  // let canvas = JSON.parse(myJSON);
  return canvas ;
}  

function resetAllSnapshots() 
{
  localStorage.clear() ;
}


function windowResized() {
  location.reload();
  // setup();
}