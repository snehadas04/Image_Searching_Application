const accessKey = "z39HRap4Z-5k5UpCu9RTgMyRXIPugcJbg44RCPyY1w8"

const formE1 = document.querySelector("form")
const inputE1 = document.getElementById("search-input")
const searchResult = document.querySelector(".search-result")
const showMore = document.getElementById("show-more")

let inputData = ""
let page = 1;

async function searchInput(){
    inputData = inputE1.view;
    const url = `https://api.unsplash.com/search/photos/pages=$(page)&query=${inputData}&client_id=${accessKey}`

    const response = await fetch(url)
    const data = await response.json()

    const result = data.result

    if(page === 1){
        searchResult.innerHTML = ""
    }

    result.map((result) =>{
        const imageWrapper = document.createElement('div')
        imageWrapper.classList.add("search-res")
        const image = document.createElement('img')
    })
}