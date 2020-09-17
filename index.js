/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function changeServiceNyitott() {
  document.getElementById("service-main").innerHTML = `
    <div class="service-image">
        <i class="fas fa-hammer fa-2x"></i>
    </div>
    <h2 style="height: auto;">NYITOTT MŰHELY</h2>
    <div class="service-desc-change">Nyitott műhelyünkben, infrastruktúrát biztosítunk olyan asztalosoknak, akiknek nincs erre lehetőségük otthon. Mindezt egy szakmai oktató felügyelete mellett, aki adott esetben szívesen segít, tanáccsal látja el a hozzánk érkezőket.
    <br><br>Műhelyünk teljes 300 nm-én található kézi és gépműhelyben a legmodernebb gépek állnak rendelkezésre. (Felder, Hammer, Festool,stb). Próbáltunk minden gépből minimum kettőt beszerezni. (Gyalu, körfűrész, szalagfűrész, stb és egy hatalmas egyedileg gyártott présünk is van.)
    Egyéb elfoglaltságaink miatt a nyitott műhely nyitvatartása leterheltség függvényében változó, ezt a Woodivity nevű Facebook oldalunkon tudod heti szinten követni és e-mailen tudsz bejelentkezni.
    <br><br>
    Amennyiben bármilyen további kérdésed kérésed merülne fel, fordulj hozzánk bizalommal</div>
    <br>
    <div class="button-container">
    <a href="assets/woodivity_nyitott_muhely_dijszabas.jpg" target="_blank">
    <button class="product-button">ÁRLISTA</button>
    <a href="#contact">
       <button class="product-button">ÍRJ NEKÜNK</button>
    </a>
    </div>
    `;
  }

  function changeServiceWorkshop() {
    document.getElementById("service-main").innerHTML = `
    <div class="service-image">
        <i class="fas fa-user-cog fa-2x"></i>
    </div>
    <h2 style="height: auto;">WORKSHOPOK</h2>
    <div class="service-desc-change">Műhelyünkben rendszeresen tartunk asztalos, ékszerkészítő és kárpitos workshopokat profi oktatókkal.
    
    <p style="text-align: center;"><b>AKTUÁLIS WORKSHOPJAINK</b></p></div>
    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fwoodivity%2F&tabs=events&width=340&height=350&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="350" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
    `;
  }

  function changeServiceGyartas() {
    document.getElementById("service-main").innerHTML = `
        <div class="service-image">
            <i class="fas fa-pencil-ruler fa-2x"></i>
        </div>
        <h2 style="height: auto;">GYÁRTÁS</h2>
        <div class="service-desc-change">Szakképzett és tapasztalt asztalosaink a bútorgyártás mesterei. Asztalosüzemünkben lehetőség van bármilyen személyre szabott bútor elkészítésére, vagy bútorok sorozatos gyártására is.
        <br><br>
        A legmodernebb asztalosipari gépekkel gyártjuk méretre bútorát prémium minőségű alapanyagokból.<br><br>
        Ha van egy megvalósításra váró ötleted, vagy lakásfelújítás előtt állsz, keress minket, biztosan segítünk.</div><br>
        <a href="#contact">
        <button class="product-button">ÍRJ NEKÜNK</button>
        </a>
        `;
  }

  function changeServiceOktatas() {
    document.getElementById("service-main").innerHTML = `
        <div class="service-image">
            <i class="fas fa-chalkboard-teacher  fa-2x"></i>
        </div>
        <h2 style="height: auto;">CSAPATÉPÍTÉS</h2>
        <div class="service-desc-change">A közös alkotás nem csupán az élményen keresztül kovácsolja egyé a csapatot, hanem a feladat megoldása során elkerülhetetlen információáramlás, kommunikáció, együttműködés útján csapatjátékossá válnak azok is, akik korábban inkább a partvonalról figyelték az eseményeket.</div>
        <h2 style="height: auto;">OKTATÁS</h2>
        <div class="service-desc-change">Műhelyünk helyszínt és teljes infrastruktúrát biztosít asztalos oktatásnak is. Sőt, nálunk elkészítheted vizsgaremekedet is.<br><br>
        Ha több infót szeretnél.</div><br>
        <a href="#contact">
        <button class="product-button">ÍRJ NEKÜNK</button>
        </a>
        `;
  }

  /*Show further description on mobile view*/
  function showDescA() {var x = document.getElementById("hidden-a");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
  }

  function showDescB() {var x = document.getElementById("hidden-b");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
  }

  function showDescC() {var x = document.getElementById("hidden-c");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
  }

  function showDescD() {var x = document.getElementById("hidden-d");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
  }

  /* On the product site, the contact form appears when I click on ÉRDEKEL */

   function showDiv() {
    div = document.getElementById('contact');
    div.style.display = "flex";
  }

  /*Scroll to top*/

  mybutton = document.getElementById("myBtn");

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }


function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/*Modal JS*/

var modal = document.getElementById("myModal");

var img = document.getElementById("prices");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
