var checkbox = document.querySelector('input[name=switch]');

checkbox.addEventListener('change', function () {
    let dark = document.querySelectorAll('.dark');
    // console.log(dark);

    for (var i = 0; i < dark.length; i++) {
        console.log(dark[i]);
        if (this.checked) {
            dark[i].classList.add("dark_active");
        } else {
            dark[i].classList.remove("dark_active");
        }
    }


});