import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"
export default function Recipes(){
    const recipes=[
        {
            title:"Chicken Pan Pizza",
            image:"/img/gallery/img_1.jpg",
            authorImg:"/img/top-chiefs/img_1.jpg",
        },
        {
            title:"Chicken Pan Pizza",
            image:"/img/gallery/img_4.jpg",
            authorImg:"/img/top-chiefs/img_2.jpg",
        },
        {
            title:"Chicken Pan Pizza",
            image:"/img/gallery/img_5.jpg",
            authorImg:"/img/top-chiefs/img_3.jpg",
        },
        {
            title:"Chicken Pan Pizza",
            image:"/img/gallery/img_6.jpg",
            authorImg:"/img/top-chiefs/img_5.jpg",
        },
        {
            title:"Chicken Pan Pizza",
            image:"/img/gallery/img_4.jpg",
            authorImg:"/img/top-chiefs/img_2.jpg",
        }
        ,{
            title:"Chicken Pan Pizza",
            image:"/img/gallery/img_5.jpg",
            authorImg:"/img/top-chiefs/img_3.jpg",
        },
        {
            title:"Chicken Pan Pizza",
            image:"/img/gallery/img_1.jpg",
            authorImg:"/img/top-chiefs/img_1.jpg",
        }
    ].sort(()=>Math.random()-0.5)
    return(
        <div>
            <PreviousSearches/>
            <div className="recipes-container">
                
                {recipes.map((recipe,index)=>(
                    <RecipeCard key={index} recipe={recipe}/>
                ))}
            </div>
        </div>
    )
}