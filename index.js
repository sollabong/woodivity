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
        <i class="fas fa-hammer fa-3x"></i>
    </div>
    <h2>NYITOTT MŰHELY</h2>
    <div class="service-desc-change">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. </div>`;
  }

  function changeServiceWorkshop() {
    document.getElementById("service-main").innerHTML = `
    <div class="service-image">
        <i class="fas fa-user-cog fa-3x"></i>
    </div>
    <h2>WORKSHOPOK</h2>
    <div class="service-desc-change">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.</div>`;
    }

   function changeServiceGyartas() {
    document.getElementById("service-main").innerHTML = `
        <div class="service-image">
            <i class="fas fa-pencil-ruler fa-3x"></i>
        </div>
        <h2>GYÁRTÁS</h2>
        <div class="service-desc-change">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.</div>`;
   }

   function changeServiceOktatas() {
    document.getElementById("service-main").innerHTML = `
        <div class="service-image">
            <i class="fas fa-chalkboard-teacher  fa-3x"></i>
        </div>
        <h2>OKTATÁS, CSAPATÉPÍTÉS</h2>
        <div class="service-desc-change">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.</div>`;
    }