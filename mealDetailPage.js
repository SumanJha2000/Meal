window.addEventListener("load", function (e) {
    var id = localStorage.getItem('id');
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php/?i=${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.meals);
            var imgContainer = document.querySelector('.meal-details');
            imgContainer.innerHTML += `<div class="meal-details-left">
            <h1 style="font-size:4rem;padding:3rem 0 0 2rem;">${data.meals[0].strMeal}</h1>
            <h2 style="padding:3rem 1rem 0 2rem;color:blue" >Instructions :</h2>
            <p style="padding:0rem 1rem 0 2rem;font-size:1.3rem">${data.meals[0].strInstructions}</p>
            <h2 style="padding:3rem 1rem 0 2rem;color:blue" >Category :</h2>
            <p style="padding:0rem 1rem 0 2rem;font-size:1.6rem;color:purple">${data.meals[0].strCategory}</p>
            <h2 style="padding:3rem 1rem 0 2rem;color:blue" >Country :</h2>
            <p style="padding:0rem 1rem 0 2rem;font-size:1.6rem;color:purple">${data.meals[0].strArea}</p>
            <h2 style="padding:3rem 1rem 0 2rem;color:blue" >Youtube Tutorial :</h2>
            <p style="padding:0rem 1rem 0 2rem;"><a href=${data.meals[0].strYoutube}>${data.meals[0].strYoutube}</a></p>
           
        </div>
        <div class="meal-details-right">
        <img style="width:95%;height:95%;" src=${data.meals[0].strMealThumb}></img>
        </div>`;

        })
        .catch(err => console.log(err));
    // this.localStorage.removeItem('id');
})