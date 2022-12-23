const requestURL = '../json/canciones.json';
//Llamada asíncrona para que lea todos los datos antes de continuar
async function fetchSongsJson(){
    const response = await fetch(requestURL);
    const songs = await response.json(); //canciones.json estará dentro de la variable "songs"
    return songs;
}
//Promesa para que lea el archivo json
fetchSongsJson().then(songs =>{
    for (let index = 0; index < songs.canciones.length; index++){
    

            const cards = document.getElementById('cards');

            let id = songs.canciones[index].id;
            let song = songs.canciones[index].song;
            let autor = songs.canciones[index].autor;
            let img = songs.canciones[index].img;
            let genre = songs.canciones[index].genre;
            let link = songs.canciones[index].link;
            let tablature = songs.canciones[index].tablature;
        
            
            cards.innerHTML += `
            <figure id="figure${id}">
            <div class="actionButtons">
            <a href="${link}" target="_blank"><img src="../images/youtubeIcon.png" alt="Link to YouTube Drumless Track"/></a>
            <a href="${tablature}" target="_blank"><img src="../images/pdfIcon.png" alt="Link to YouTube Drumless Track"/></a>
            </div>
            <img src="${img}" class="trackImg" alt="Card image cap"/>
            <div class="date"><span class="card-date-day">${genre}</span></div>
            <figcaption>
            <h4><span>${song}<br>${autor}</span></h4>
            </figcaption>
            </figure>
            `    
        }
    })
