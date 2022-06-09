
obj=null;
var shoutn95 = function() {}

shoutn95.url = "https://shoutn95.github.io/sh95/"
shoutn95.json = "init.json";


shoutn95._message0= function(){

   if (shoutn95.GetURLParameter('page')==0){

      $("#top").load("./contents/ascii.txt");

   }
}

shoutn95.loadFront=function(video)
{
   return("<div class='playerembed'><iframe  width='560' height='315' src='https://www.youtube.com/embed/"+ video +"'  frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen gesture='media'></iframe></div>");
}

shoutn95.createlinksToContent=function(contents){

   var currentPage =window.location.search.substring(6);
   currentPage=currentPage.substring(0,currentPage.indexOf("&"));

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

   if (shoutn95.GetURLParameter('page')==0)
   {

      front_ = new XMLHttpRequest();
      front_.open("GET",this.json,true);
      front_.send(null);
      front_.onload = function() {
      video = shoutn95._getRandomElementFromJSON(shoutn95.parseFrontJSON());
      $("<div id='front'></div>").insertBefore("#top");
      $("#front").html(shoutn95.loadFront(video));
      }
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
      //console.log(content_);

      if(shoutn95.GetURLParameter('page')==0)
      {
         $("#_latestContent").html("<h1>Read more articles listed below</h1>");

      }

   }

}

shoutn95.back_returnPrecedent = function()
{

   var _return = "<a href='"+shoutn95.url+"'>BACK</a>";
   if (shoutn95.GetURLParameter('page')!=0){
      $("<div id='_backRetu'></div>").insertBefore("#footer");
      $("#_backRetu").html(_return);
   }
}


shoutn95._staticfiles  = function(page)
{
   var _file = shoutn95.url+"contents/"+page+".md";
   var md_ = window.markdownit("default",{html:true});
   var _return = "";

   if(shoutn95.GetURLParameter('page')==0){
      $("<div id='_lateststatic' class='tip'></div>").insertAfter("#contents");
      $("#_lateststatic").html("<h4><b>What about these applications_?</b></h4>");
      $.get(_file, function( data ) {
         _return = md_.render(data.substr(0,380));
         data_replaced=_return.replace(/^(.{380}[^\s]*).*/, "$1") + "\n";
         $("#_lateststatic").append("&nbsp;"+data_replaced+"...&nbsp;");
         $("#_lateststatic").append("<a class='suite' href='./index.html?page=APPLICATIONS'>suite</a>");
        },'text');
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
