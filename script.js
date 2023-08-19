const accessKey = "z39HRap4Z-5k5UpCu9RTgMyRXIPugcJbg44RCPyY1w8";

const formE1 = document.querySelector("form");
const inputE1 = document.getElementById("search-input");
const searchResult = document.querySelector(".search-result");
const showMore = document.getElementById("show-more");

let inputData = "";
let page = 1;

async function searchInput(){
    inputData = inputE1.view;
    const url = `https://api.unsplash.com/search/photos/pages=$(page)&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const result = data.result;

    if(page === 1){
        searchResult.innerHTML = "";
    }

    result.map((result) =>{
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add("search-res");
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement('a');
        imageLink.href = result.link.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        imageWrapper.appendChild(imageWrapper);
    });

    page++
    if(page > 1){
        showMore.style.display = "block"
    }
}

formE1.addEventListener("submit", (Event) => {
    Event.preventDefault()
    page = 1;
    searchImages()
})