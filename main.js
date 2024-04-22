let movieArray = [];

    function addToArray(){
        let title = document.getElementById("title").value.trim();
        let rating = document.getElementById("rating").value.trim();
        let year = document.getElementById("year").value.trim();

        if (title === "" || rating === "" || year === ""){
          alert("Error: One or more input fields are empty");
        } else {
            movieArray.push({ title, rating, year });
            alert("Movie added successfully!");
        }
    }

    function showArray() {
        let output = "";
        for (let i = 0; i < movieArray.length; i++) {
            let movie = movieArray[i];
            output += "Movie " + (i + 1) + ": Title - " + movie.title + ", Rating - " + movie.rating + ", Year - " + movie.year + "<br>";
        }
        document.getElementById("out").innerHTML = output;
    }