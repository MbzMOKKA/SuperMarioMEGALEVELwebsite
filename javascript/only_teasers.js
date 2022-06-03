

//########################## INITIALISATION ##########################


var teasers_content = [];

//remplissage du contenu des différent teasers
teasers_content[0] = {
    viewed : false,
    type : "img",
    src : "https://cdn.discordapp.com/attachments/851546956215484426/960201068023808061/3_0_teaser_1.gif",
    alt : "révélations #1 : amélioration charge au sol",
}
teasers_content[1] = {
    viewed : false,
    type : "img",
    src : "https://cdn.discordapp.com/attachments/851546956215484426/960201097132265482/3_0_teaser_2.gif",
    alt : "révélations #2 : course, fleur de feu et pièces",
}
teasers_content[2] = {
    viewed : false,
    type : "img",
    src : "../assets/teaser3.png",
    alt : "révélations #3 : nouvelles icônes objets",
}
teasers_content[3] = {
    viewed : false,
    type : "img",
    src : "https://cdn.discordapp.com/attachments/851546956215484426/960201137078812713/3_0_teaser_4.png",
    alt : "révélations #4 : nouvel ATH",
}
teasers_content[4] = {
    viewed : false,
    type : "video",
    src : "https://cdn.discordapp.com/attachments/851546956215484426/960201174441656380/3_0_teaser_5.mp4",
    alt : "révélations #5 : tournoyer",
}
teasers_content[5] = {
    viewed : false,
    type : "img",
    src : "https://cdn.discordapp.com/attachments/851546956215484426/960201268138221648/3_0_teaser_6.png",
    alt : "révélations #6 : la mise à jour des objets",
}


//########################## AFFICHEUR ##########################


//ouvrir un teaser
function OpenTeaser(){
    //récupération du teaser selectionné
    let _teaser_index = Number(event.target.dataset.teaserIndex)-1;
    let _teaser_obj = teasers_content[_teaser_index];

    //création du lecteur
    OpenMediaViewer(_teaser_obj.type, _teaser_obj.src, _teaser_obj.alt);
  
    //confirmation vu teaser
    if(_teaser_obj.viewed==false){
        let _teaser = event.target;
        let _tag_new = _teaser.querySelector(".teaser_tag_new");
        _teaser.removeChild(_tag_new);
        _teaser_obj.viewed = true;
        ToLocalStorageTeaserDataSave();
    }
}


//########################## LOCALSTORAGE ##########################


//chargement des infos liés aux teasers dans le localstorage
function FromLocalStorageTeaserDataLoad(){
    let _teasers_data = JSON.parse(localStorage.getItem("teasers_data"));
    for(let _i in _teasers_data){
        teasers_content[_i].viewed = _teasers_data[_i].viewed;
    }
}

//sauvegarde des infos liés aux teasers dans le localstorage
function ToLocalStorageTeaserDataSave(){
    let _teasers_data = [];
    for(let _i in teasers_content){
        _teasers_data[_i] = {
            viewed : teasers_content[_i].viewed,
        };
    }
    let _teasers_data_json = JSON.stringify(_teasers_data);
    localStorage.setItem("teasers_data", _teasers_data_json);
}


//########################## AU CHARGEMENT ##########################


FromLocalStorageTeaserDataLoad();

//remplissage de la liste des teasers au chargement
let _list = document.getElementById("teasers");
for(let _i = teasers_content.length-1; _i>=0 ; _i--){
    let _new_teaser = document.createElement("li");
    _new_teaser.setAttribute("data-teaser-index", String(_i+1));
    _new_teaser.setAttribute("class","teaser");
    _new_teaser.addEventListener("click",OpenTeaser);
    //tag nouveau
    if(teasers_content[_i].viewed==false){
        let _tag = document.createElement("span");
        _tag.setAttribute("class","teaser_tag_new");
        _tag.innerText = "Nouveau!";
        _new_teaser.appendChild(_tag);
    }
    _list.appendChild(_new_teaser);
}