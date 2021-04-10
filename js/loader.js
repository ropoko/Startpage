    window.onload = () => {
      document.getElementById("input_search").focus();

      document.getElementById("clock").innerHTML = getTime();
      document.getElementById("message").innerText = defineMessage();

      // Set clock interval to tick clock
      setInterval(() => {
        document.getElementById("clock").innerHTML = getTime();
      }, 30000);
    };
