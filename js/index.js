const requestURL = '../json/canciones.json';

async function fetchSongsJson(){
    const response = await fetch(requestURL);
    const songs = await response.json(); 
    return songs;
}

fetchSongsJson().then(songs =>{
    for (let index = 0; index < songs.canciones.length; index++){
    

            const trackCard = document.getElementById('songSection');

            let id = songs.canciones[index].id;
            let song = songs.canciones[index].song;
            let autor = songs.canciones[index].autor;
            let img = songs.canciones[index].img;
            let link = songs.canciones[index].link;
            let tablature = songs.canciones[index].tablature;
        
            
            trackCard.innerHTML += `
            <figure id="figure${id}">
            <div class="actionButtons">
            <a href="${link}" target="_blank">Drumless</a>
            <a href="${tablature}" target="_blank">Tablature</a>
            </div>
            <img src="${img}" class="tr" alt="Song Image"/>
            <figcaption>
            <h4>${song}</h4>
            <h3>${autor}</h3>
            </figcaption>
            </figure>
            `    
        }
    })
