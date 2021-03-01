let message = '';

function getTime() {
    let date = new Date(),
        min = date.getMinutes(),
        hour = date.getHours();

    if (hour >= 5 && hour < 12) {
        message = 'Good Morning!';
    }
    else if (hour >= 12 && hour < 19) {
        message = 'Good Afternoon!';
    }
    else if (hour >= 19) {
        message = 'Good Evening!';
    }
    else if (hour >= 00 && hour < 5) {
        message = 'Good Night!';
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