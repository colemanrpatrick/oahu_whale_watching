console.log("main.js ready")
/*==== vars ====*/
var menuBtn = document.getElementById("menu-btn"),
    phoneBtn = document.getElementById("phone-btn");
/*======= ============= =========*/

/*==== events ====*/
function menuEvent(){
  toggleThis(this,'active');
  nextSiblingToggle(menuBtn,'active');
}
function phoneEvent(){
  idToggle('phone','active')
}
/*======= ============= =========*/

/*==== events listeners ====*/
menuBtn.addEventListener("click",menuEvent,false);
phoneBtn.addEventListener("click",phoneEvent,false);
/*======= ============= =========*/

/*======= product detail =========*/
var pBtn = document.getElementsByClassName("product-button");

var details = document.getElementsByClassName("product-detail");


for (var i = 0; i < pBtn.length; i++) {

  pBtn[i].thisIndex = i + 1;

  pBtn[i].addEventListener("click",function(e){

  tagNameToggle('body','active',0);

  tabToggle(e.target.thisIndex,"product-detail"," active");

  })

}
/*======= product close =========*/
closeBtn = document.getElementsByClassName("closeBtn");

function closeProduct(){

  for (var i = 0; i < details.length; i++) {

    details[i].className = "product-detail";

    tagNameToggle('body','active',0);

  }

}

for (var i = 0; i < closeBtn.length; i++) {

  closeBtn[i].addEventListener("click",closeProduct,false);

}
/*======= scroll handlers =========*/


  var mastHead = document.getElementById("masthead-fixed"),

      mastHeadHeight = mastHead.clientHeight,

      checkpoint = document.getElementById("product"),

      checkpointHeight = checkpoint.offsetTop,

      banner = document.getElementById("banner"),

      article = document.getElementById("article-section"),

      coverageSection = document.getElementById("coverage-section"),

      checkpointSecond = article.offsetTop + 50;

  window.onscroll = function() {

    if (document.body.scrollTop > checkpointHeight || document.documentElement.scrollTop > checkpointHeight) {

      console.log("checkpoint passed");

      banner.classList = "banner hidden";

      article.classList = "article-section";

    } else {

      banner.classList = "banner";

      article.classList = "article-section hidden";

    }

    if (document.body.scrollTop > checkpointSecond || document.documentElement.scrollTop > checkpointSecond) {

      coverageSection.classList = "coverage-section active";

      console.log("checkpoint 2 passed")

    }else{

      coverageSection.classList = "coverage-section";

    }

  }
