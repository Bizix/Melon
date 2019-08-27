function getSomething(xhr) {

    let response = xhr.responseText;
    let div = document.createElement('div');
    div.innerHTML = response;

    let rankAr = div.querySelectorAll('#lst50 .rank');
    let titleAr = div.querySelectorAll('.rank01>span>a');
    let artistAr = div.querySelectorAll('.rank02>span>a');
    let albumAr = div.querySelectorAll('.rank03>a');
    let artAr = div.querySelectorAll('.image_typeAll>img');



    for (var i = 0; i < 100; i++) {
        // Container
        let content_container = document.createElement('div');
        let playlist = document.querySelector('#playlist_container');
        playlist.appendChild(content_container);

        // Rank
        let rank = rankAr[i];
        div.appendChild(rank);
        let rankDiv = document.createElement('div');
        content_container.appendChild(rankDiv);
        rankDiv.appendChild(rank);

        // // Song Title
        let title = titleAr[i].textContent;
        let titleDiv = document.createElement('div');
        titleDiv.textContent = title;
        content_container.appendChild(titleDiv);

        // // Artist Name
        let artist = artistAr[i].textContent;
        let artistDiv = document.createElement('div');
        artistDiv.textContent = artist;
        content_container.appendChild(artistDiv);

        // // // Album Name
        let album = albumAr[i].textContent;
        let albumDiv = document.createElement('div');
        albumDiv.textContent = album;
        content_container.appendChild(albumDiv);

        // Album Art
        let art = artAr[i];
        div.appendChild(art);
        let artDiv = document.createElement('div');
        content_container.appendChild(artDiv);
        artDiv.appendChild(art);
    }
}

function getPlaylist(param) {
    var xhr = new XMLHttpRequest();
    var url = 'http://www.melon.com/chart/day/index.htm?classCd=' + param;
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        // console.log(xhr);
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // console.log(xhr.responseText);
            getSomething(xhr);
        }
    }
    xhr.send();
}

{
    getPlaylist("DM0000"); // top100 korean's songs
}