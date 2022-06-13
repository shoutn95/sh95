obj=null;
var _instagram_ = function() {}

_instagram_.url = "https://graph.instagram.com/me/media/";
_instagram_.url0 ="https://graph.instagram.com/";
_instagram_.id_app = "907880253944940";
_instagram_.access_token ="IGQVJWMXlYRGRmMGdiUjkyVEo3YUxjRXAydVdiRUxXUGpKVG5Da1c4R1BZAYTRmRkxDT2ZALN0FaVXpCeldEczBiNUctSVk0bHdjbFU4ZA1lLbDJIR3NDVzk2X25lV2l5Q2h1Q2hmS1dLbFl1MFktOF9YSwZDZD";


_instagram_.get_media_url = function()
{
  id_media = new XMLHttpRequest();
  id_media.open("GET",this.url+"?fields="+this.id_app+"&access_token="+this.access_token,true);
  id_media.send(obj);
  id_media.onload = function() {

    picture_id=_instagram_.PARSE_Media_IDfromJSON();
    picture_url=_instagram_.url0+picture_id+"?fields=media_url&access_token="+_instagram_.access_token;

        media_url = new XMLHttpRequest();
        media_url.open("GET",picture_url);
        media_url.send(obj);
        media_url.onload=function() {
            instagram= _instagram_.PARSE_Media_URLfromJSON();
            console.log(instagram);
            $("#latest_instagram").html("<img src='"+instagram+"' />");
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
  //console.log("media_url="+Object.values(JSON.parse((media_url.response)))[0]);
  return Object.values(JSON.parse(media_url.response))[0];

}
