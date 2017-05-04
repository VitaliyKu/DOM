var playList = [
 {
 author: "LED ZEPPELIN",
 song:"STAIRWAY TO HEAVEN"
 },
 {
 author: "QUEEN",
 song:"BOHEMIAN RHAPSODY"
 },
 {
 author: "LYNYRD SKYNYRD",
 song:"FREE BIRD"
 },
 {
 author: "DEEP PURPLE",
 song:"SMOKE ON THE WATER"
 },
 {
 author: "JIMI HENDRIX",
 song:"ALL ALONG THE WATCHTOWER"
 },
 {
 author: "AC/DC",
 song:"BACK IN BLACK"
 },
 {
 author: "QUEEN",
 song:"WE WILL ROCK YOU"
 },
 {
 author: "METALLICA",
 song:"ENTER SANDMAN"
 }
];

for(i=0; i<=playList.length; i++){
 var songName = playList[i].song;
 var authorName = playList[i].author;
 var ol = document.getElementById('song_list');
 li = document.createElement('li');
 li.innerText = authorName + ' - ' + songName;
 ol.appendChild(li);
};