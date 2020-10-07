let message = '';

function getTime() {
    let date = new Date(),
        min = date.getMinutes(),
        hour = date.getHours();

    if (hour >= 5 && hour < 12) {
        message = 'Bom dia!';
    }
    else if (hour >= 12 && hour < 19) {
        message = 'Boa tarde!';
    }
    else if (hour >= 19) {
        message = 'Boa noite!';
    }
    else if (hour >= 00 && hour < 5) {
        message = 'Boa madrugada!';
    }

    return (
        "" +
        (hour < 10 ? "0" + hour : hour) +
        ":" +
        (min < 10 ? "0" + min : min)
    );
}

function defineMessage() {
    return message;
}