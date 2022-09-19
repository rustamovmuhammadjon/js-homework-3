let txt = ["like", "dislike", "like", "dislike", "like", "dislike", "like"];
function soni(x) {
    let a = "like".length;
    let b = "dislike".length;
    k = 0;
    l = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i].length == a) {
            // console.log("like lar soni kop");
            k+=1;
        }
        if (x[i].length == b) {
            // console.log("dislike lar soni kop");
            l+=1;
        }
    }
    if (k>l) {
        console.log("like lar soni kop");
    } else if (k==l) {
        console.log("Hech narsa mavjud emas");
    } else {
        console.log("dislike lar soni kop");
    }
}
console.log(soni(txt));