function GetURLParameter(sParam) 
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

function GetRandomVideoYT()
{
      xhr = new XMLHttpRequest();
      xhr.open("GET","https://shoutn95.github.io/sh95/youtube.json");
      xhr.responseType="json"; 
      xhr.send();
      xhr.onload = function() {
            var obj =  xhr.response;
            var myYouTubeVids = obj.myYouTube;
            var rand=Math.floor(Math.random()*myYouTubeVids.length);
            //console.log("toto");
            return myYouTubeVids[rand];
            
            }
}




