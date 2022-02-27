const allPlayers = () => {
    document.getElementById('player-container').innerHTML = ``;
    const searchValue = document.getElementById('search-box').value;

    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;


    fetch(url)
        .then(response => response.json())
        .then(data => showPlayerdetails(data.player));

    document.getElementById('search-box').value = '';
}

const showPlayerdetails = (players) => {
    const parant = document.getElementById('player-container');
    for (const player of players) {
        const div = document.createElement('div');

        div.innerHTML = `
        <div class  = "row">
        <div class="card p-2 rounded ">
        <div class="pro-pic">
        <img class="w-25" src="${player.strThumb}" alt="${player.strPlayer}">
         </div>
            <h2>name: ${player.strPlayer}</h2>
            <h5>country:${player.strNationality}</h5>
            <p></p>
         <div class="all-btn">
            <button class="btn btn-danger">Delete</button>
            <button onclick ="details('${player.idPlayer}')" class="btn btn-success">Detail</button>
        </div>
     </div>
        </div>
    `;
        parant.appendChild(div);
        // console.log(player);

    }


}

const details = id => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}
    `;
    fetch(url)
        .then(response => response.json())
        .then(data => setDetail(data.players[0]));
}

const setDetail = info => {
    document.getElementById('details-container').innerHTML = `
    <div class  = "row">
        <div class="card p-2 rounded ">
        <div class="pro-pic">
        <img class="w-25" src="${info.strThumb}" alt="${info.strPlayer}">
         </div>
            <h2>name: ${info.strPlayer}</h2>
            <h5>country:${info.strNationality}</h5>
            <p>${info.strDescriptionEN}.split(0, 100)</p>
         
     </div>
        </div>
    `;


}