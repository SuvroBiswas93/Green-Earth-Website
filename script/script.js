const categoriesContainer = document.getElementById('category-container')

const cardContainer = document.getElementById('card-container')

const categoryBtn = document.getElementById(`category-btn`)


const loadCategoryData = () =>{
    fetch(`https://openapi.programming-hero.com/api/categories`)
    .then(res => res.json())
    .then(data => displayCategoryData(data.categories))
    .catch(err => console.log('data Fetching error'))
}

const displayCategoryData = (categoryName =>{
    // console.log(categoryName)
    categoryName.forEach(name => {
        categoriesContainer.innerHTML+= `
                    <div>
                        <ul class="py-1">
                            <button class = "category px-1 text-left hover:bg-green-500 active:bg-green-600 w-full rounded cursor-pointer">${name.category_name}</button>
                        </ul>
                    </div>
        `
    });
})

const loadDefaultPageData = () =>{
    const url = `https://openapi.programming-hero.com/api/plants`
    fetch(url)
    .then(res => res.json())
    .then(data => displayDefaultPageData(data.plants))
    .catch(err => console.log("Data fetching error..."))
}

const displayDefaultPageData = (defaultData) =>{
    cardContainer.innerHTML = "";
    for (const data of defaultData) {
        cardContainer.innerHTML += `
             <div class="card space-y-3 p-3 bg-white rounded-t">
                        <img src="${data.image}" alt="" class= "rounded-t">
                            
                        <div class="px-2">
                                <h1 class="font-bold">${data.name}</h1>
                                <p class ="overflow-y-auto">${data.description}</p>
                        </div>
                        <div class="flex justify-between px-2">
                                <button id="category-btn" class="bg-[#DCFCE7] text-sm p-2 rounded-3xl">${data.category}</button>
                                <p><i class="fa-solid fa-bangladeshi-taka-sign"></i><span id="amount">${data.price}</span></p>

                        </div>
                        <div>
                            <button id="add-card-btn" class="btn btn-info bg-green-500 border-none w-full px-2 text-center rounded-3xl text-white">Add to cart</button>
                        </div>
                    </div>
        
        `
    }
}

const loadPageByCategory = (CategoryId) =>{
   const url = `https://openapi.programming-hero.com/api/category/${CategoryId}`
   fetch(url)
   .then(res => res.json())
   .then(data => {
        categoryBtn.addEventListener('click',e =>{
            console.log(e.target)
        }) 
   })
   .catch(err => console.log('Something Went Wrong'))
}





loadCategoryData()
loadDefaultPageData()