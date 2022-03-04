// write your code here
const flatagramtApi = "http://localhost:3000/images";
const flat=document.getElementById('flatagram')
    
        fetch(flatagramtApi)
        .then((response)=> response.json())
        .then(seeImage)

function seeImage(flatArr){
    flatArr.forEach(addFlatagramImageToPage);
}
function addFlatagramImageToPage(flata){
    const flatImage = document.getElementById('img');
    flatImage.src = flata.image;
    flatImage.addEventListener('click',()=>{ seeImage(flata)
    })
}
