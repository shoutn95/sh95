videoYouTube="";
obj=null;
xhr = new XMLHttpRequest();
frame="";
 
var shoutn95 = function() {}

shoutn95.json = "https://shoutn95.github.io/sh95/youtube.json";

shoutn95.loadFrame=function(video)
{
var youTube = video; 
            return("<iframe width='560' height='315' src='https://www.youtube.com/embed/"+ youTube +"'  frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
            
}
      
shoutn95.randomVideoYT=function()
{
   xhr.open("GET",this.json,true);
   xhr.send();
   xhr.onload = function() {
   
videoYouTube=shoutn95._getTheVideo(shoutn95.parseJSON());
      $("#front").html(shoutn95.loadFrame(videoYouTube));
         }                     
}

shoutn95.parseJSON=function()
{
   //console.log(xhr.responseText);
   return JSON.parse(xhr.responseText).myYouTube;
   
}

shoutn95._getTheVideo=function(param=null){
    if (param){
      rand=Math.floor(Math.random()*param.length);
      //console.log(rand);
      return videoYouTube=param[rand];
      } else {
         return videoYouTube ;
      
      }
   


}


shoutn95.GetURLParameter = function(sParam) 
{
    
      if (sParam) {            
            var sPageURL = window.location.search.substring(1);
            var sURLVariables=sPageURL.split('&');
            for (var i=0;i<sURLVariables.length;i++)
            {
                var sParameterName =sURLVariables[i].split('=');
                if (sParameterName[0]==sParam)
                {
                    return sParameterName[1];
                }
            }
            
            
      } else { return "0"; }
      
      
}


      
      