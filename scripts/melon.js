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

        let big_container = document.createElement('div');
        big_container.classList.add('playlist_wrapper');
        playlist.appendChild(big_container);

        let content_container = document.createElement('div');
        content_container.classList.add('playlist', 'dark');
        big_container.appendChild(content_container);

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

        // Song Title
        let title = titleAr[i].textContent;
        let titleDiv = document.createElement('div');
        titleDiv.classList.add('song_title');
        titleDiv.textContent = title;
        content_container.appendChild(titleDiv);

        // Artist Name
        let artist = artistAr[i].textContent;
        let artistDiv = document.createElement('div');
        artistDiv.classList.add('artist');
        artistDiv.textContent = artist;
        content_container.appendChild(artistDiv);

        // Album Name
        let album = albumAr[i].textContent;
        let albumDiv = document.createElement('div');
        albumDiv.classList.add('album_name');
        albumDiv.textContent = album;
        content_container.appendChild(albumDiv);

        // Video Player
        let youtube_box = document.createElement('div');
        youtube_box.classList.add('youtube_box');
        //youtube_box.style.display = "none";
        // youtube_box.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/C8KV0mzqTXY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        big_container.appendChild(youtube_box);
    }


    // Activate Youtube video container

    let playlist_content = document.querySelectorAll(".playlist")
    let youtube_box = document.querySelectorAll('.youtube_box');

    for (let i = 0; i < playlist_content.length; i++) {
        playlist_content[i].addEventListener("click", function () {
            if (window.getComputedStyle(youtube_box[i], null).getPropertyValue("display") === "none") {

                youtube_box[i].style.display = "flex";
            } else {
                youtube_box[i].style.display = "";
            }
        });
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