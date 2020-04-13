
  //line as you scroll down


  // document.body.appendChild(document.createTextNode("I like to dream I will change the world ".repeat(1000)));
  let bar = document.querySelector("#progress");
  window.addEventListener("scroll", () => {
    let max = document.body.scrollHeight - innerHeight;
    bar.style.width = `${(pageYOffset / max) * 100}%`;
  });
  
  addComma = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  function secsToStr(num) {
    return new Date(num).toDateString();
  }
  function worldCases() {
    let confirmedTotal = 0;
    let deathsTotal = 0;
    let countryData = "<h3>Country</h3>";
    let confirmedCases = "<h3>Confirmed Cases</h3>";
    let deaths = "<h3>Confirmed Deaths</h3>";
    fetch('https://corona.lmao.ninja/countries')
    .then((res) => res.json())
    .then((data) => {
      data.forEach((location) => {
          countryData += `
             <ul class="myData">
             <li>${location.country}</li>
             </ul>
             `;
          confirmedCases += `
             <ul class="myData">
              <li>${addComma(location.cases)}</li>
             </ul>
             `;
          deaths += `
             <ul class="myData">
              <li>${addComma(location.deaths)}</li>
             </ul>
           `;
        confirmedTotal+= location['cases'];
        deathsTotal+= location['deaths'];
    })
          document.getElementById("countryData").innerHTML = countryData;
          document.getElementById("confirmedCases").innerHTML = confirmedCases;
          document.getElementById("deaths").innerHTML = deaths;
          document.getElementById("updatedTime").innerHTML = `Last updated: ${secsToStr(data[0].updated)} <br>
            Source:<a target="_blank" href=https://www.worldometers.info/coronavirus/>Worldometers</a> `;
           document.getElementById("confirmedTotal").innerHTML =
            "Confirmed Total: " + addComma(confirmedTotal);
            document.getElementById("deathsTotal").innerHTML =
              "Deaths Total: " + addComma(deathsTotal);
          });
          }

        

          let currentTime =
          new Date().toDateString() + " | " + new Date().toLocaleTimeString();
          document.getElementById("date").innerHTML = currentTime;



  // Get the input field
  let input = document.getElementById("searchInput");
  // let txtValue = document.getElementById("searchInput").value.toUpperCase();
  // Execute a function when the user releases a key on the keyboard
  input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      // event.preventDefault();
      // Trigger the button element with a click
      filterCountry();
    }
  });
  
  function filterCountry() {
    txtValue = document.getElementById("searchInput").value.toLowerCase();
      let confirmedTotal = 0;
      let deathsTotal = 0;
      let countryData = "<h3>Country</h3>";
      let confirmedCases = "<h3>Confirmed Cases</h3>";
      let deaths = "<h3>Confirmed Deaths</h3>";
      fetch('https://corona.lmao.ninja/countries')
      .then((res) => res.json())
      .then((data) => {
        data.forEach((location) => {
            if(location.country.toLowerCase() === txtValue) {
            countryData += `
               <ul class="myData">
               <li>${location.country}</li>
               </ul>
               `;
            confirmedCases += `
               <ul class="myData">
                <li>${addComma(location.cases)}</li>
               </ul>
               `;
            deaths += `
               <ul class="myData">
                <li>${addComma(location.deaths)}</li>
               </ul>
             `;
          confirmedTotal+= location['cases'];
          deathsTotal+= location['deaths'];
      }
    })
            document.getElementById("countryData").innerHTML = countryData;
            document.getElementById("confirmedCases").innerHTML = confirmedCases;
            document.getElementById("deaths").innerHTML = deaths;
            document.getElementById("updatedTime").innerHTML = `Last updated`;
             document.getElementById("confirmedTotal").innerHTML =
              "Confirmed Total: " + addComma(confirmedTotal);
              document.getElementById("deathsTotal").innerHTML =
                "Deaths Total: " + addComma(deathsTotal);
            });
            }