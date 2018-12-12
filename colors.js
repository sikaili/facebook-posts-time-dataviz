


function scolor(nuit){
   // backgroundColor=invertColor(backgroundColor);
   // cityHabitText=invertColor(cityHabitText);
   // cityTextFill=invertColor(cityTextFill);
   // cityHabitFill=invertColor(cityHabitFill);
   // parcoursCirclesFill=invertColor(parcoursCirclesFill);
   // rightTextBlue=invertColor(rightTextBlue);
   // rightTextRed=invertColor(rightTextRed);
   // cityHighlight=invertColor(cityHighlight);
   // city=invertColor(city);

   if(nuit===true){
   backgroundColor = invertColor([255,255,255,100]);
   // dynamic
   cityHabitText = invertColor([255,255,20,50]);
   // text habit city
   // city act fill
   cityTextFill = invertColor([255,255,0,150]);
   // circles habit city
   cityHabitFill = invertColor([100,0,0,10]);
   parcoursCirclesFill = invertColor([0,0,110,50]);
   rightTextBlue = invertColor([0,0,150,80]);
   rightTextRed = invertColor([150,0,0,100]);
   cityHighlight = rightTextRed;
   city =invertColor([0,0,180,20]);
   // dynamic

   parcoursStroke=invertColor([200,200,20,80]);
   parcoursFill = invertColor([130,10,10,180]);
   innerCercleS = invertColor([50,0,100,80]);
   navBar = invertColor([30,50,150,100]);
   }
   else{
      backgroundColor = [255,255,255,60];
      cityHabitText = [255,255,20,50];
   // text habit city
      cityTextFill = [255,255,0,100];
   // circles habit city
      cityHabitFill = [100,0,0,10];
      parcoursCirclesFill = [0,0,110,50];
      rightTextBlue = [0,0,150,80];
      rightTextRed = [150,0,0,100];
      cityHighlight = rightTextRed;
      city =[0,0,180,20];
      parcoursStroke=[200,200,20,80];
      parcoursFill = [130,10,10,180];
      innerCercleS = [50,0,100,80];
      navBar = [30,50,150,100];
   }

}
const invertColor = (array) =>{
   t =[];
   if(array.length<3){
      t[0]=255-array[0];
      t[1]=array[1];
   }
   else{
      t[0]=255-array[0];
      t[1]=255-array[1];
      t[2]=255-array[2];
      t[3]=array[3];
   }
 return t;
}