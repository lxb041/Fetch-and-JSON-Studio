// TODO: add code here
window.addEventListener("load", function() {
    
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json){
            const container = document.getElementById("container");
            console.log(json);
            for (let i = 0; i < json.length; i++) {
                const astronaut = json[i]
                const astronautTemp = `
                <div class="astronaut">
                <div class="bio">
                  <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                  <ul>
                    <li>Hours in space: ${astronaut.hoursInSpace}</li>
                    <li>Active: ${astronaut.active}</li>
                    <li>Skills: ${astronaut.skills.join(", ")}</li>
                  </ul>
                </div>
                <img class="avatar" src="${astronaut.picture}" alt="${astronaut.firstName} ${astronaut.lastName}">
              </div>
                `;
                container.innerHTML += astronautTemp;

            }
        });

    })
});