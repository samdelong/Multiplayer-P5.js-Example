var Thing = function(x,y){
    var alpha = 255;
    this.gone = false;
   this.show = function(){
    
      //Set fill alpha and draw circle
      fill(255,255,255,alpha);
      ellipse(x,y,20,20);
      
      //Decrease opacity for fade effect
      alpha -= 15;
      if(alpha < 0){
        //sets if item is out of view
        this.gone = true;
      
      }
   }

}
