
obj=null;
var shoutn95 = function() {}

shoutn95.url = "https://shoutn95.github.io/sh95/"
shoutn95.json = "init.json";

shoutn95.loadFront=function(video)
{

   if(shoutn95.GetURLParameter('page')==0)
   {
   return("<iframe  width='560' height='315' src='https://www.youtube.com/embed/"+ video +"'  frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
   }
}

shoutn95.createlinksToContent=function(contents){

   var currentPage =window.location.search.substring(6);

   var links=[];
   for(i=0;i<contents;i++){
   if(currentPage==i){
      links.push("<a class='currentPage' href='index.html?page="+i+"'>"+i+"</a>");   
      } else { links.push("<a class='pages'  href='index.html?page="+i+"'>"+i+"</a>");
      }
   }
   this.foo=links.reverse();
   return this.foo.join("|");

}
      
shoutn95.loadFrontJSONform=function()
{
      front_ = new XMLHttpRequest();
      front_.open("GET",this.json,true);
      front_.send(null);
      front_.onload = function() {
      video = shoutn95._getRandomElementFromJSON(shoutn95.parseFrontJSON());
      $("#front").html(shoutn95.loadFront(video));
       }
}

shoutn95.loadFooterJSONcontent=function()
{
   footer_ = new XMLHttpRequest();
   footer_.open("GET",this.json,true);
   footer_.send(null);
   footer_.onload = function() {
         content = shoutn95._getCountElementFromJSON(shoutn95.parseLinksJSON());
         $("#footer").html(shoutn95.createlinksToContent(content)); 
      }
}

shoutn95.parseFrontJSON=function()
{
   return JSON.parse(front_.responseText);
   
}

shoutn95.parseLinksJSON=function()
{
   return JSON.parse(footer_.responseText);
   
}

shoutn95.parseLatestJSON=function()
{
   return JSON.parse(latest_.responseText);
   
}

shoutn95.parseContentJSON=function()
{
   return JSON.parse(content_.responseText);
   
}

shoutn95._getRandomElementFromJSON=function(param=null){
//console.log(param["myContents"]);
    if (param["myYouTube"]){
      vidsFromYouTube = param["myYouTube"];
      rand=Math.floor(Math.random()*vidsFromYouTube.length);
      return video=vidsFromYouTube[rand]; 
      }
}

shoutn95._getCountElementFromJSON=function(param=null){
   if(param["myContents"]) {
   myContentPages = param["myContents"];
      return myContentPages.length;
   }
}

shoutn95._getFront0withLatestContent=function()
{
   latest_ = new XMLHttpRequest();
   latest_.open("GET",this.json,true);
   latest_.send(null);
   latest_.onload = function() {
      
      content = shoutn95._getCountElementFromJSON(shoutn95.parseLatestJSON());
      var content_=[];
      for(k=1;k<=content;k++){
         if(k==content) break;
         content_.push(shoutn95.url+"contents/"+"CONTENTS"+k+".md");
      }
      
      if(shoutn95.GetURLParameter('page')==0)
      {
         var html_=[];
         var md_ = window.markdownit("default",{html:true});      
               for(var n=0;n<content_.length;n++){
               //console.log(content_);
                  if(n=>0){
                  jQuery.get(content_[n],function(data){
                     html_.push($(md_.render(data)).html());
                     if(n==html_.length){
                        for(j=1;j<=html_.length;j++){
                           $("#_latestContent").append("<a href='"+shoutn95.url+"?page="+j+"'>"+"##"+html_[j]+"</a><br />");
                        }   
                     }
                  });
                  }
               }
      
      }
   
   }   

}

shoutn95.back_returnPrecedent = function()
{

   var _return = "<a href='javascript:history.back(); '>BACK</a>";
   if (shoutn95.GetURLParameter('page')!=0){
      $("#_backRetu").html(_return);
   }
}


shoutn95.GetURLParameter = function(sParam) 
{
   if (sParam){
    
      sPageURL = window.location.search.substring(1);
      var sURLVariables=sPageURL.split('&');
      for (var i=0;i<sURLVariables.length;i++)
      {
         var sParameterName =sURLVariables[i].split('=');
         if (sParameterName[0]==sParam)
         {
            return sParameterName[1];
         
         } return 0;
         
      }
            
      }

}

      
      
