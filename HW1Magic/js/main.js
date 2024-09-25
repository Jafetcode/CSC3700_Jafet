const url = "http://45.55.136.114/~dlash/CSC3700/lotrV4.php";

function onSelect() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // const characterSelect = document.getElementById('characterSelect');
            // const option = document.createElement('option');
            // option.text = data[i].name;
            // option.value = data[i].name;
            // characterSelect.innerHTML += `<option value="${option.value}" id ="characterChoice" >${option.text}</option>`;
            const characterSelect = document.getElementById('characterSelect');
            data.forEach(element => {
                characterSelect.innerHTML += `<option value="${element.id}" >${element.name}</option>`;
            })
        })
}

function showCard() {
    const card = document.getElementById('cardPic');
    const cardsId = document.getElementById('characterSelect').value;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let obj =data[cardsId-1];
            const cardName =obj.name;
            const picLocation = obj.img;
            console.log(picLocation);

            card.innerHTML = `<a class="navbar-brand" id="cardTitle">${cardName}</a>`;
            card.innerHTML += `<img id="cardPic" src="imgs/${picLocation}" class="img-fluid" alt="">`;
        })
}

function showDesc(){
    const card = document.getElementById('cardDescription');
    const cardsId = document.getElementById('characterSelect').value;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let obj =data[cardsId-1];
            const cardDesc =obj.description;
            console.log(cardDesc);

            card.innerHTML = `<div>${cardDesc}</div>`;
        })
}
function showCardInfo() {
    let characterChoice = document.getElementById('characterSelect');
    const selectedCharacterId = characterChoice.value;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let obj = data[selectedCharacterId - 1];
            let oStr = "";
            console.log(obj)

            let row =
                '<thead><tr><th>ID</th><th>Name</th><th>Age</th><th>Race</th><th>Strengths</th>' +
                '<th>Weakness</th></tr>\n</thead>'
            row += `<tr><td> ${obj.id}</td>`;
            row += `<td> ${obj.name}</td>`;
            row += `<td> ${obj.age}</td>`;
            row += `<td> ${obj.race}</td>`;
            row += `<td> <ol type="1">`;
            for (let i = 0; i < obj.strengths.length; i++) {
                row += `<li>${obj.strengths[i]}</li>`;
            }
            row += `</ol></td>`;
            row += `<td> <ol type="1">`;
            for (let i = 0; i < obj.weakness.length; i++) {
                row += `<li>${obj.weakness[i]}</li>`;
            }
            row += `</ol></td>`;
            row += "</tr>"
            oStr += row;
            document.getElementById("mainTable").innerHTML = oStr;
        })
}
