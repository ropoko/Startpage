let input = document.getElementById("inpt_search");

input.addEventListener('focus', function () {
    document.getElementById("label_search").classList.add('active');
});

input.addEventListener('blur', function () {
    if (input.innerHTML.length == 0)
        document.getElementById("label_search").classList.remove('active');
});

const url = 'https://www.startpage.com/do/dsearch?query=';

input.addEventListener("keyup", (event) => {
    if (event.keyCode == 13) {
        var value = document.getElementById("inpt_search").value;

        if (value.length == 0) {
            console.log('campo estava vazio!');
        }
        else {
            window.open(url + value);
        }
    }
})
