function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("#nested .target")
}
function increaseRankBy(n){
  const rList=document.querySelectorAll(".ranked-list li")
  for (let i=0;i<rList.length;i++){
    rList[i].innerHTML=parseInt(rList.innerHTML)+n
  }
}