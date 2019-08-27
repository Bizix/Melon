function getSomething(xhr) {

    // Get playlist from Melon
    let response = xhr.responseText;
    let div = document.createElement('div');
    div.innerHTML = response;

    let melon_rank = div.querySelectorAll('#lst50 .rank');
    let melon_rank_img = div.querySelectorAll('.image_typeAll>img');
    let melon_rank01 = div.querySelectorAll('.rank01>span>a');
    let melon_rank02 = div.querySelectorAll('.rank02>span>a');
    let melon_rank03 = div.querySelectorAll('.rank03>a');


    for (var i = 0; i < 100; i++) {

        var rank = document.querySelectorAll('.rank');
        rank.textContent = melon_rank[i];
        // var rank_img = melon_rank_img[i];
        // console.log(test.textContent);
        // console.log(test2);
    }



    // let melon_rank = div.querySelector('#lst50 .rank').textContent;
    // let melon_rank_img = div.querySelector('.image_typeAll>img');
    // let melon_rank01 = div.querySelector('.rank01>span>a').textContent;
    // let melon_rank02 = div.querySelector('.rank02>span>a').textContent;
    // let melon_rank03 = div.querySelector('.rank03>a').textContent;
    // console.log(melon_rank);
    // console.log(melon_rank_img);
    // console.log(melon_rank01);
    // console.log(melon_rank02);
    // console.log(melon_rank03);


    // Display playlist on watermelon

    // let rank = document.querySelector('.rank');
    // rank.textContent = melon_rank;
    // let rank_img = document.querySelector('.rank_img');
    // rank_img.appendChild(melon_rank_img);
    // let rank01 = document.querySelector('.rank01');
    // rank01.textContent = melon_rank01;
    // let rank02 = document.querySelector('.rank02');
    // rank02.textContent = melon_rank02;
    // let rank03 = document.querySelector('.rank03');
    // rank03.textContent = melon_rank03;


    // console.log(rank02);

    // div.appendChild(a);
    // container.appendChild(a);
    // container.appendChild(b);
    // container.appendChild(c);
    // container.appendChild(d);
    // container.appendChild(e);

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