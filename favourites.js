var favouritesContainer = document.querySelector('.search-results-container');
// var favouritesBtn = document.querySelector('.fa-heart');
var favourites = [];
if (JSON.parse(sessionStorage.getItem('favourites')) != null) {
    favourites = [...JSON.parse(sessionStorage.getItem('favourites'))];
}

function displayFavourites(favourites) {
    favouritesContainer.innerHTML = '';
    for (var i = 0; i < favourites.length; i++) {
        console.log(favourites[i]);
        favouritesContainer.innerHTML += ` <li class="search-results-li">
        <div style="display:none;">${favourites[i].id}</div>
        <img class="search-results-img" width=100 height=100 src="${favourites[i].img}"/>
        <h2>${favourites[i].name}</h2>
        <i class="fa fa-heart fa-3x red-heart"></i>
    </li>`;
    }

}

displayFavourites(favourites);

favouritesContainer.addEventListener('click', function (e) {
    console.log('hellow');
    if (e.target.classList.contains('fa-heart')) {
        if (e.target.classList.contains('red-heart')) {
            e.target.classList.remove('red-heart');
            var elm = e.target.parentElement.children[0].innerText;
            favourites = favourites.filter(v => v.id != elm);
        } else {
            var __id = e.target.parentElement.children[0].innerText;
            var __img = e.target.parentElement.children[1].getAttribute('src');
            var __name = e.target.parentElement.children[2].innerText;
            var obj = {
                id: __id,
                img: __img,
                name: __name
            }
            e.target.classList.add('red-heart');
            var elm = e.target.parentElement.children[0].innerText;
            favourites.push(obj)
        }
        displayFavourites(favourites);
        sessionStorage.setItem('favourites', JSON.stringify(favourites));
    }
})


favouritesContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains("search-results-img")) {
        var value = e.target.parentElement.children[0].innerText;
        sessionStorage.setItem('id', value);
        location.href = 'mealDetailPage.html';
    }
})