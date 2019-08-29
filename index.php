<!DOCTYPE html>
<html lang="en" class="dark">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link
        href="https://fonts.googleapis.com/css?family=Baloo+Bhaina|Cinzel+Decorative|Comfortaa|Forum|Megrim|Montserrat|Mountains+of+Christmas|Oleo+Script|PT+Mono|Pompiere|Ubuntu+Mono&display=swap"
        rel="stylesheet">
    <link
        href="https://fonts.googleapis.com/css?family=Nanum+Brush+Script|Nanum+Gothic+Coding|Poor+Story|Single+Day&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="styles/main.css">
    <title>Melon4Foreigners</title>
</head>

<body>
    <div id="main_container" class="dark">
        <header id="header" class="dark">
            <div class="logo"><img src="images/watermelon_04.png" alt=""></div>
            <div class="genre_container">
                <div id="top100" class="genre dark" data-filter="DM0000">Top 100</div>
                <div id="kpop" class="genre dark" data-filter="GN0200">K-Pop</div>
                <div id="rap" class="genre dark" data-filter="GN0300">Rap/Hiphop</div>
                <div id="rb" class="genre dark" data-filter="GN0400">R&B</div>
                <div id="indie" class="genre dark" data-filter="GN0500">Indie</div>
                <div id="rock" class="genre dark" data-filter="GN0600">Rock</div>
                <div id="balad" class="genre dark" data-filter="GN0100">Balad</div>
                <div id="trot" class="genre dark" data-filter="GN0700">Trot</div>
                <div id="folk" class="genre dark" data-filter="GN0800">Blues/Folk</div>
            </div>
            <div class="toggle"><input type="checkbox" id="switch" name="switch" autocomplete="off" /><label
                    for="switch">Toggle</label></div>
        </header>
        <section>
            <div class="playlist_header">
                <div class="ranking">Ranking</div>
                <div class="song">Song</div>
                <div class="artist_name">Artist</div>
                <div class="album">Album</div>
            </div>
            <div id="playlist_container">

            </div>
        </section>
        <footer class="footer">

        </footer>
    </div>
    <script src="scripts/melon.js"></script>
    <script src="scripts/themeToggle.js"></script>
</body>

</html>