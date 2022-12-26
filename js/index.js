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
            let genre = songs.canciones[index].genre;
            let link = songs.canciones[index].link;
            let tablature = songs.canciones[index].tablature;
        
            
            trackCard.innerHTML += `
            <figure id="figure${id}">
            <div class="actionButtons">
            <a href="${link}" target="_blank"><img src="../images/youtubeIcon.png" alt="Link to YouTube Drumless Track"/></a>
            <a href="${tablature}" target="_blank"><img src="../images/pdfIcon.png" alt="Link to Drum tablature"/></a>
            </div>
            <img src="${img}" class="tr" alt="Song Image"/>
            <div class="date"><span class="card-date-day">${genre}</span></div>
            <figcaption>
            <h4>${song}</h4>
            <h3>${autor}</h3>
            </figcaption>
            </figure>
            `    
        }
    })
