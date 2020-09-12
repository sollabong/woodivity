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
    Amennyiben bármilyen további kérdésed kérésed merülne fel, kérem fordulj hozzánk bizalommal</div>
    <br>
    <a href="#kapcsolat"><button class="product-button">ÍRJ NEKÜNK</button></a>
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
    `}

   function changeServiceGyartas() {
    document.getElementById("service-main").innerHTML = `
        <div class="service-image">
            <i class="fas fa-pencil-ruler fa-2x"></i>
        </div>
        <h2 style="height: auto;">GYÁRTÁS</h2>
        <div class="service-desc-change">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.</div>`;
   }

   function changeServiceOktatas() {
    document.getElementById("service-main").innerHTML = `
        <div class="service-image">
            <i class="fas fa-chalkboard-teacher  fa-2x"></i>
        </div>
        <h2 style="height: auto;">OKTATÁS, CSAPATÉPÍTÉS</h2>
        <div class="service-desc-change">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.</div>`;
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