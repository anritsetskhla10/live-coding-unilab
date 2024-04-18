




fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&api_key=04c35731a5ee918f014970082a0088b1")
    .then((res) => res.json())
    .then( (data) => {
        console.log(data);

        const movieImg = Array.from(document.getElementsByClassName('movieImg'))[0];
        const title = Array.from(document.getElementsByClassName('title'))[0];
        title.textContent = data.results[0].title
        movieImg.src = `https://image.tmdb.org/t/p/w200${data.results[0].poster_path}`
    
        const movieImg1 = Array.from(document.getElementsByClassName('movieImg'))[1];
        const title1 = Array.from(document.getElementsByClassName('title'))[1];
        title1.textContent = data.results[1].title
        movieImg1.src = `https://image.tmdb.org/t/p/w200${data.results[1].poster_path}`

        const movieImg2 = Array.from(document.getElementsByClassName('movieImg'))[2];
        const title2 = Array.from(document.getElementsByClassName('title'))[2];
        title2.textContent = data.results[2].title
        movieImg2.src = `https://image.tmdb.org/t/p/w200${data.results[2].poster_path}`
    
        const movieImg3 = Array.from(document.getElementsByClassName('movieImg'))[3];
        const title3 = Array.from(document.getElementsByClassName('title'))[3];
        title3.textContent = data.results[3].title
        movieImg3.src = `https://image.tmdb.org/t/p/w200${data.results[3].poster_path}`
    
        const movieImg4 = Array.from(document.getElementsByClassName('movieImg'))[4];
        const title4 = Array.from(document.getElementsByClassName('title'))[4];
        title4.textContent = data.results[4].title
        movieImg4.src = `https://image.tmdb.org/t/p/w200${data.results[4].poster_path}`
    }
) .catch(error => {
    console.error('Error fetching data:', error);
  });