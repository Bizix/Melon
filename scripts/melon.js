function construct_playlist(xhr) {

    let response = xhr.responseText;
    let div = document.createElement('div');
    div.innerHTML = response;

    let rankAr = div.querySelectorAll('#lst50 .rank, #lst100 .rank');
    let titleAr = div.querySelectorAll('.rank01>span>a');
    let artistAr = div.querySelectorAll('.rank02>span>a');
    let albumAr = div.querySelectorAll('.rank03>a');
    let artAr = div.querySelectorAll('.image_typeAll>img');

    let playlist = document.querySelector('#playlist_container');
    playlist.innerHTML = "";
    for (var i = 0; i < rankAr.length; i++) {
        // Container

        let content_container = document.createElement('div');
        content_container.classList.add('playlist', 'dark');
        playlist.appendChild(content_container);

        // Rank
        let rank = rankAr[i];
        div.appendChild(rank);
        let rankDiv = document.createElement('div');
        rankDiv.classList.add('rank');
        content_container.appendChild(rankDiv);
        rankDiv.appendChild(rank);

        // Album Art
        let art = artAr[i];
        div.appendChild(art);
        let artDiv = document.createElement('div');
        artDiv.classList.add('art_img');
        content_container.appendChild(artDiv);
        artDiv.appendChild(art);

        // // Song Title
        let title = titleAr[i].textContent;
        let titleDiv = document.createElement('div');
        titleDiv.classList.add('song_title');
        titleDiv.textContent = title;
        content_container.appendChild(titleDiv);

        // // Artist Name
        let artist = artistAr[i].textContent;
        let artistDiv = document.createElement('div');
        artistDiv.classList.add('artist');
        artistDiv.textContent = artist;
        content_container.appendChild(artistDiv);

        // // // Album Name
        let album = albumAr[i].textContent;
        let albumDiv = document.createElement('div');
        albumDiv.classList.add('album_name');
        albumDiv.textContent = album;
        content_container.appendChild(albumDiv);

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
            construct_playlist(xhr);
        }
    }
    xhr.send();
}

// // playlist keys

// var top100 = document.querySelector("#top100").getAttribute("data-filter");
// var kpop = "GN0200";
// var rap = "GN0300";
// var rb = "GN0400";
// var indie = "GN0500";
// var rock = "GN0600";
// var balad = "GN0100";
// var trot = "GN0700";
// var folk = "GN0800";

{

    let genre_container = document.querySelectorAll(".genre_container > div");

    for (let i = 0; i < genre_container.length; i++) {
        let div = genre_container[i];
        let genre_filter = document.querySelector("#" + div.id).getAttribute("data-filter");
        div.addEventListener("click", function () {
            getPlaylist(genre_filter);
        });
        if (i == 0) {
            getPlaylist(genre_filter);
        }
    }
}

// Genre Changing

// document.getElementById("top100").addEventListener("click", function () { getPlaylist(top100); });
// document.getElementById("kpop").addEventListener("click", getPlaylist(kpop));
// document.getElementById("rap").addEventListener("click", getPlaylist(rap));
// document.getElementById("rb").addEventListener("click", getPlaylist(rb));
// document.getElementById("indie").addEventListener("click", getPlaylist(indie));
// document.getElementById("rock").addEventListener("click", getPlaylist(rock));
// document.getElementById("balad").addEventListener("click", getPlaylist(balad));
// document.getElementById("trot").addEventListener("click", getPlaylist(trot));
// document.getElementById("folk").addEventListener("click", getPlaylist(folk));