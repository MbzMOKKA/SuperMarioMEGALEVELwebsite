//ouvrir un media
function OpenMediaViewer(_type, _src, _alt){
    //création du lecteur
    let _viewer = document.createElement("div");
    _viewer.setAttribute("id","media_viewer");
    _viewer.addEventListener("click",CloseMediaViewer);

    //remplissage du media
    let _media = document.createElement(_type);
    _media.setAttribute("id","media_viewer_media");
    _media.setAttribute("src",_src);
    _media.setAttribute("alt",_alt);
    _media.addEventListener("click",PreventClosingViewer);
    if(_type=="video"){
        _media.setAttribute("controls","true");
        _media.setAttribute("loop","true");
        _media.setAttribute("autoplay","true");
    }

    //application à la page
    _viewer.appendChild(_media);
    document.getElementById("media_viewer_container").appendChild(_viewer);
}

//fermer un media
function CloseMediaViewer(){
    let _viewer = document.getElementById("media_viewer");
    _viewer.parentElement.removeChild(_viewer);
}

//empecher le lecteur de se fermer si on clique sur son media
function PreventClosingViewer(){
    event.stopPropagation();
}