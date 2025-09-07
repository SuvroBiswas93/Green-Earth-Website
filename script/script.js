const categoriesContainer = document.getElementById('category-container')


// load the category

const loadCategory = () =>{
    fetch(`https://openapi.programming-hero.com/api/categories`)
    .then(res => res.json())
    .then(data => displayCategoryData(data.categories))
    .catch(err => console.log('data Fetching error'))
}

const displayCategoryData = (categoryName =>{
    categoryName.forEach(name => {
        console.log(name.category_name)
        categoriesContainer.innerHTML+= `
                    <div>
                        <ul class="py-1">
                            <button class = " px-1 text-left hover:bg-green-500 w-full rounded cursor-pointer">${name.category_name}</button>
                        </ul>
                    </div>
        `
    });
})

loadCategory()