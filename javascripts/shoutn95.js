
obj=null;

var shoutn95 = function() {}

shoutn95.url = "https://shoutn95.github.io/sh95/"
shoutn95.json = "init.json";

shoutn95.loadFront=function(video)
{
   return("<iframe width='560' height='315' src='https://www.youtube.com/embed/"+ video +"'  frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
            
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
   this.foo=links.join("|");
   return this.foo;

}
      
shoutn95.loadFrontJSONform=function()
{
   xhr = new XMLHttpRequest();
   xhr.open("GET",this.json,true);
   xhr.send();
   xhr.onload = function() {
      video = shoutn95._getRandomElementFromJSON(shoutn95.parseFrontJSON());
      $("#front").html(shoutn95.loadFront(video));
       }
}

shoutn95.loadFooterJSONcontent=function()
{
   xhr2 = new XMLHttpRequest();
   xhr2.open("GET",this.json,true);
   xhr2.send();
   xhr2.onload = function() {
      content = shoutn95._getCountElementFromJSON(shoutn95.parseLinksJSON());
      $("#footer").html(shoutn95.createlinksToContent(content));
      }
}

shoutn95.parseFrontJSON=function()
{
   return JSON.parse(xhr.responseText);
   
}

shoutn95.parseLinksJSON=function()
{
   return JSON.parse(xhr2.responseText);
   
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
      
      
