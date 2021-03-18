const input = document.getElementById('input_search');

document.addEventListener("keyup", (event) => {
    if (event.keyCode == 13) {
        let value = input.value;

        if (value.length != 0) {
            search(value)
        }
    } else {
        input.focus();
    }
});

document.addEventListener("keyup", (event) => {
    if (event.keyCode == 27) {
        input.value = '';
    }
});

function search(value) {
    let url = 'https://duckduckgo.com/?q=';

    window.location = url + value;
}