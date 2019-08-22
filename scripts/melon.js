function getSomething(xhr) {
    let response = xhr.responseText;
    let div = document.createElement('div');
    div.innerHTML = response;
    let a = div.querySelector('.rank01>span>a');
    console.log(a);

    // div.appendChild(a);
    // document.body.appendChild(a);
}

function getPlaylist(param) {
    var xhr = new XMLHttpRequest();
    var url = 'http://www.melon.com/chart/day/index.htm?classCd=' + param;
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        // console.log(xhr);
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            console.log(xhr.responseText);
            getSomething(xhr);
        }
    }
    xhr.send();
}

{
    getPlaylist("DM0000"); // top100 korean's songs
}