
var clicks = 0;
var n = 0;
function onClick() {
clicks += 1;

if(clicks == n)
{
     
    var r = confirm("Alhamdulillah . Sudah "+n+" dzikir. apakah ingin mulai dari awal dzikir lagi ?");
	if (r == true) {
    	clicks=0;
    	document.getElementById("clicks").innerHTML = clicks;
} 
else {

}
}
document.getElementById("clicks").innerHTML = clicks;
};
function onClick2() {
var r = confirm("Apakah ingin diatur ulang?");
if (r == true) {
    clicks=0;
    document.getElementById("clicks").innerHTML = clicks;
} 
else {

} 
};
function onClick3(){
n = prompt("Ingin di atur berapa dzikir ? ", "");
n = parseInt(n);
if(n == clicks) 
{
    
} 
else {

}
};