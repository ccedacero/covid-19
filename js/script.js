function transformText(txtValue) {
  let newStr;  
  for(let i = 0 ; i < stateData.length; i++) {
      if(stateData[i]['text'] === txtValue.toUpperCase()){
     
         newStr = stateData[i]['value'];
      }
    } txtValue = newStr;
  return txtValue;
  }
  

let stateData = [
  {
    "value": "AK",
    "text": "ALASKA"
  },
  {
    "value": "AL",
    "text": "ALABAMA"
  },
  {
    "value": "AR",
    "text": "ARKANSAS"
  },
  {
    "value": "AS",
    "text": "AMERICAN SAMOA"
  },
  {
    "value": "AZ",
    "text": "ARIZONA"
  },
  {
    "value": "CA",
    "text": "CALIFORNIA"
  },
  {
    "value": "CO",
    "text": "COLORADO"
  },
  {
    "value": "CT",
    "text": "CONNECTICUT"
  },
  {
    "value": "DC",
    "text": "DISTRICT OF COLUMBIA"
  },
  {
    "value": "DE",
    "text": "DELAWARE"
  },
  {
    "value": "FL",
    "text": "FLORIDA"
  },
  {
    "value": "GA",
    "text": "GEORGIA"
  },
  {
    "value": "GU",
    "text": "GUAM"
  },
  {
    "value": "HI",
    "text": "HAWAII"
  },
  {
    "value": "IA",
    "text": "IOWA"
  },
  {
    "value": "ID",
    "text": "IDAHO"
  },
  {
    "value": "IL",
    "text": "ILLINOIS"
  },
  {
    "value": "IN",
    "text": "INDIANA"
  },
  {
    "value": "KS",
    "text": "KANSAS"
  },
  {
    "value": "KY",
    "text": "KENTUCKY"
  },
  {
    "value": "LA",
    "text": "LOUISIANA"
  },
  {
    "value": "MA",
    "text": "MASSACHUSETTS"
  },
  {
    "value": "MD",
    "text": "MARYLAND"
  },
  {
    "value": "ME",
    "text": "MAINE"
  },
  {
    "value": "MI",
    "text": "MICHIGAN"
  },
  {
    "value": "MN",
    "text": "MINNESOTA"
  },
  {
    "value": "MO",
    "text": "MISSOURI"
  },
  {
    "value": "MS",
    "text": "MISSISSIPPI"
  },
  {
    "value": "MT",
    "text": "MONTANA"
  },
  {
    "value": "NC",
    "text": "NORTH CAROLINA"
  },
  {
    "value": "ND",
    "text": "NORTH DAKOTA"
  },
  {
    "value": "NE",
    "text": "NEBRASKA"
  },
  {
    "value": "NH",
    "text": "NEW HAMPSHIRE"
  },
  {
    "value": "NJ",
    "text": "NEW JERSEY"
  },
  {
    "value": "NM",
    "text": "NEW MEXICO"
  },
  {
    "value": "NV",
    "text": "NEVADA"
  },
  {
    "value": "NY",
    "text": "NEW YORK"
  },
  {
    "value": "OH",
    "text": "OHIO"
  },
  {
    "value": "OK",
    "text": "OKLAHOMA"
  },
  {
    "value": "OR",
    "text": "OREGON"
  },
  {
    "value": "PA",
    "text": "PENNSYLVANIA"
  },
  {
    "value": "PR",
    "text": "PUERTO RICO"
  },
  {
    "value": "RI",
    "text": "RHODE ISLAND"
  },
  {
    "value": "SC",
    "text": "SOUTH CAROLINA"
  },
  {
    "value": "SD",
    "text": "SOUTH DAKOTA"
  },
  {
    "value": "TN",
    "text": "TENNESSEE"
  },
  {
    "value": "TX",
    "text": "TEXAS"
  },
  {
    "value": "UT",
    "text": "UTAH"
  },
  {
    "value": "VA",
    "text": "VIRGINIA"
  },
  {
    "value": "VI",
    "text": "VIRGIN ISLANDS"
  },
  {
    "value": "VT",
    "text": "VERMONT"
  },
  {
    "value": "WA",
    "text": "WASHINGTON"
  },
  {
    "value": "WI",
    "text": "WISCONSIN"
  },
  {
    "value": "WV",
    "text": "WEST VIRGINIA"
  },
  {
    "value": "WY",
    "text": "WYOMING"
  }
];

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

function getData() {
  fetch("https://covidtracking.com/api/states")
    .then((res) => res.json())
    .then((data) => {
      let confirmedTotal = 0;
      let hospitalizedTotal = 0;
      let deathsTotal = 0;
      let stateData = "<h3>States & Territories </h3>";
      let confirmedCases = "<h3>Confirmed Cases</h3>";
      let hospitalizations = "<h3>Total Hospitalized</h3>";
      let deaths = "<h3>Confirmed Deaths</h3>";
      data.forEach(function (state) {
        if (state.hospitalized === null) {
          state.hospitalized = "N/A";
        }
        if (state.positive === null) {
          state.positive = "N/A";
        }
        if (state.death === null) {
          state.death = "N/A";
        }

        if (state.hospitalized !== "N/A") {
          hospitalizedTotal += parseInt(state.hospitalized)
        }
        if (state.positive !== "N/A") {
          confirmedTotal += parseInt(state.positive)
        }
        if (state.death !== "N/A") {
          deathsTotal += parseInt(state.death)
        }

        stateData += `
           <ul class="myData">
           <li>${state.state}</li>
           </ul>
           `;
        confirmedCases += `
           <ul class="myData">
            <li>${addComma(state.positive)}</li>
           </ul>
           `;
        hospitalizations += `
           <ul class="myData">
            <li>${addComma(state.hospitalized)}</li>
           </ul>
           `;
        deaths += `
           <ul class="myData">
            <li>${addComma(state.death)}</li>
           </ul>
         `;
      });
      document.getElementById("stateData").innerHTML = stateData;
      document.getElementById("confirmedCases").innerHTML = confirmedCases;
      document.getElementById("hospitalizations").innerHTML = hospitalizations;
      document.getElementById("deaths").innerHTML = deaths;
      document.getElementById("updatedTime").innerHTML =
        "Table last updated: " + ' '+
        data[0].lastUpdateEt +
        '<br> Source: <a target="_blank" href= "https://covidtracking.com/">The COVID Tracking Project</a>';
      document.getElementById("confirmedTotal").innerHTML =
        "Confirmed Total: " + addComma(confirmedTotal);
      document.getElementById("hospitalizedTotal").innerHTML =
        "Hospitalized Total: " + addComma(hospitalizedTotal);
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
    filterState();
  }
});

function filterState() {
  txtValue = document.getElementById("searchInput").value.toUpperCase();
  if (txtValue.length > 2) {
   let newStr = transformText(txtValue);
  
  fetch("https://covidtracking.com/api/states")
    .then((res) => res.json())
    .then((data) => {
      let confirmedTotal = 0;
      let hospitalizedTotal = 0;
      let deathsTotal = 0;
      let stateData = "<h3>States & Territories </h3>";
      let confirmedCases = "<h3>Confirmed Cases</h3>";
      let hospitalizations = "<h3>Total Hospitalized</h3>";
      let deaths = "<h3>Confirmed Deaths</h3>";
      data.forEach(function (state) {
        if (newStr === state.state) {
          if (state.hospitalized === null) {
            state.hospitalized = "N/A";
          } else {
            hospitalizedTotal += parseInt(state.positive);
          }

          stateData += `
           <ul id="stateData">
           <li>${state.state}</li>
           </ul>
           `;
          confirmedCases += `
            <li>${addComma(state.positive)}</li>
           </ul>
           `;
          hospitalizations += `
            <li>${addComma(state.hospitalized)}</li>
           </ul>
           `;
          deaths += `
            <li>${addComma(state.death)}</li>
           </ul>
         `;
          confirmedTotal += parseInt(state.positive);
          deathsTotal += parseInt(state.death);
        }
      });
      document.getElementById("stateData").innerHTML = stateData;
      document.getElementById("confirmedCases").innerHTML = confirmedCases;
      document.getElementById("hospitalizations").innerHTML = hospitalizations;
      document.getElementById("deaths").innerHTML = deaths;
      document.getElementById("updatedTime").innerHTML =
        "Database last updated: " +
        data[0].lastUpdateEt +
        '<br> Source: <a target="_blank" href= "https://covidtracking.com/">The COVID Tracking Project</a>';
      document.getElementById("confirmedTotal").innerHTML =
        "Confirmed Total: " + addComma(confirmedTotal);
      document.getElementById("hospitalizedTotal").innerHTML =
        "Hospitalized Total: " + addComma(hospitalizedTotal);
      document.getElementById("deathsTotal").innerHTML =
        "Deaths Total: " + addComma(deathsTotal);
    });
} else {
    
  fetch("https://covidtracking.com/api/states")
    .then((res) => res.json())
    .then((data) => {
      let confirmedTotal = 0;
      let hospitalizedTotal = 0;
      let deathsTotal = 0;
      let stateData = "<h3>States & Territories </h3>";
      let confirmedCases = "<h3>Confirmed Cases</h3>";
      let hospitalizations = "<h3>Total Hospitalized</h3>";
      let deaths = "<h3>Confirmed Deaths</h3>";
      data.forEach(function (state) {
        if (txtValue === state.state) {
          if (state.hospitalized === null) {
            state.hospitalized = "N/A";
          } else {
            hospitalizedTotal += parseInt(state.positive);
          }
          stateData += `
           <ul id="stateData">
           <li>${state.state}</li>
           </ul>
           `;
          confirmedCases += `
            <li>${addComma(state.positive)}</li>
           </ul>
           `;
          hospitalizations += `
            <li>${addComma(state.hospitalized)}</li>
           </ul>
           `;
          deaths += `
            <li>${addComma(state.death)}</li>
           </ul>
         `;
          confirmedTotal += parseInt(state.positive);
          deathsTotal += parseInt(state.death);
        }
      });
      document.getElementById("stateData").innerHTML = stateData;
      document.getElementById("confirmedCases").innerHTML = confirmedCases;
      document.getElementById("hospitalizations").innerHTML = hospitalizations;
      document.getElementById("deaths").innerHTML = deaths;
      document.getElementById("updatedTime").innerHTML =
        "Database last updated: " +
        data[0].lastUpdateEt +
        '<br> Source: <a target="_blank" href= "https://covidtracking.com/">The COVID Tracking Project</a>';
      document.getElementById("confirmedTotal").innerHTML =
        "Confirmed Total: " + addComma(confirmedTotal);
      document.getElementById("hospitalizedTotal").innerHTML =
        "Hospitalized Total: " + addComma(hospitalizedTotal);
      document.getElementById("deathsTotal").innerHTML =
        "Deaths Total: " + addComma(deathsTotal);
    });
}
}