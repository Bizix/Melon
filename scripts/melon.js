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

        let youtube_box = document.createElement('div');
        youtube_box.classList.add('youtube_box');
        big_container.appendChild(youtube_box);

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

        // Youtube

        content_container.addEventListener("click", function (e) {
            var youtube_box = e.currentTarget.nextElementSibling;
            if (window.getComputedStyle(youtube_box, null).getPropertyValue("display") === "none") {
                //console.log(window.getComputedStyle(youtube_box, null).getPropertyValue("display"));
                youtube_box.style.display = "flex";
                var youtubeID = getYoutube(title, artist);
                e.currentTarget.nextElementSibling.innerHTML = ' <iframe id="ytplayer" type="text/html" width="896" height="504" src="https://www.youtube.com/embed/' + youtubeID + '"frameborder="0"></iframe>';
            } else {
                youtube_box.style.display = "";
            }

        });
    }
}
function constructYTBox(title, artist) {

}

function getPlaylist(param) {
    var xhr = new XMLHttpRequest();
    var url = 'http://www.melon.com/chart/day/index.htm?classCd=' + param;
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            construct_playlist(xhr);
        }
    }
    xhr.send();
}


function getYoutube(title, artist) {
    var yxhr = new XMLHttpRequest();
    var key = 'AIzaSyDJG4uwhqh0A4gCLmgQuDhyJM7DK57dbDk';
    console.log(title);
    console.log(artist);
    var video_id
    var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + artist + ',' + title + '&key=' + key;
    yxhr.open('GET', url, false);
    yxhr.onreadystatechange = function () {
        if (yxhr.readyState === XMLHttpRequest.DONE && yxhr.status === 200) {
            let objectYT = JSON.parse(yxhr.responseText);
            video_id = objectYT.items[0].id.videoId;
        }
    }
    yxhr.send();
    return video_id;
}

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
