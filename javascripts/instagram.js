obj=null;
var _instagram_ = function() {}

_instagram_.url = "https://graph.instagram.com/me/media/";
_instagram_.url0 ="https://graph.instagram.com/";
_instagram_.id_app = "1151956242138651";
_instagram_.access_token ="IGQVJWTS10V0dGRWNLSllza3pvcEZADM1ctcUx0TUVONkljQmxGM2MwWWh0V1pGWWJQcDBGS1VSWndxcVVHRXBhZAzdFd2xGckg4Vy0xV2F6Tkx4U29yUF9pSW9CQ21lZAm5LcWJSMk0zOC1NLUtxeWdBcAZDZD";


_instagram_.get_media_url = function()
{

  id_media = new XMLHttpRequest();
  id_media.open("GET",this.url+"?fields="+this.id_app+"&access_token="+this.access_token,true);
  id_media.send(obj);
  id_media.onload = function() {

    picture_id=_instagram_.PARSE_Media_IDfromJSON();
    picture_url=_instagram_.url0+picture_id+"?fields=media_url,caption,permalink&access_token="+_instagram_.access_token;

        media_url = new XMLHttpRequest();
        media_url.open("GET",picture_url);
        media_url.send(obj);
        media_url.onload=function() {
            instagram= _instagram_.PARSE_Media_URLfromJSON();
            caption = _instagram_._captionfromJSON();
            permalink = _instagram_._permalinkfromJSON();

            if (shoutn95.GetURLParameter('page')==0)
            {
              $("#latest_instagram").html("<table class='left'><tr><td>Nouvelles from <a href=''>#instagram</a><br /> with <a href='https://www.instagram.com/shoutn95/'>@shoutn95</a><br /><caption>"+caption.substring(0,78)+"(...)</caption></td></tr><tr><td><a href='"+permalink+"' title='"+permalink+"' class='tooltip'><span>"+permalink+"</span><img src='"+instagram+"'/></a></td></tr><tr><td></td></tr></table");
            }
        }
    }
}

_instagram_.PARSE_Media_IDfromJSON=function()
{
  //console.log("Media_id="+JSON.parse(id_media.responseText).data[0].id);
  return JSON.parse(id_media.responseText).data[0].id;
}


_instagram_.PARSE_Media_URLfromJSON=function()
{
  //console.log(Object.values(JSON.parse((media_url.response))));
  return Object.values(JSON.parse(media_url.response))[0];

}

_instagram_._captionfromJSON=function()
{
  return Object.values(JSON.parse(media_url.response))[1];
}

_instagram_._permalinkfromJSON=function()
{
  return Object.values(JSON.parse(media_url.response))[2];
}
