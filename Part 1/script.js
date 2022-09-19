var likes = 0;
var countElement = document.querySelector("#numlike")

function addLike(countElement){
    likes ++;
    countElement.innerText = likes + " Like(s)";
}