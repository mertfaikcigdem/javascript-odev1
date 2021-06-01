function isim() {
    var name = prompt("Adınız nedir?");
    document.getElementById("isim").innerText = name;
 }
 
 function zaman() {
   var date = new Date();
   var h = date.getHours();
   var m = date.getMinutes();
   var s = date.getSeconds();
   var session = date.getDay();
 
   if (session == 1) {
     session = "Pazartesi";
   } else if (session == 2) {
     session = "Salı";
   } else if (session == 3) {
     session = "Çarşamba";
   } else if (session == 4) {
     session = "Perşembe";
   } else if (session == 5) {
     session = "Cuma";
   } else if (session == 6) {
     session = "Cumartesi";
   } else if (session == 7) {
     session = "Pazar";
   }
 
   h = h < 10 ? "0" + h : h;
   m = m < 10 ? "0" + m : m;
   s = s < 10 ? "0" + s : s;
 
   var time = h + ":" + m + ":" + s + " " + session;
   document.getElementById("saat").innerText = time;
   document.getElementById("saat").textContent = time;
 
   setTimeout(zaman, 1000);
 }
 
 isim();
 zaman();