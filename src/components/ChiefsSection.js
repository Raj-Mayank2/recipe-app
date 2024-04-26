import ChiefCard from "./ChiefCard";


export default function ChiefsSection() {
    const chiefs=[
        {
            name:"Chris Holmes",
            img:"/img/top-chiefs/img_1.jpg",
            recipesCount:"12",
            cuisine:"American"
        },
        {
            name:"Chris Walter",
            img:"/img/top-chiefs/img_2.jpg",
            recipesCount:"10",
            cuisine:"Japanese"
        }
        ,{
            name:"Tom Holmes",
            img:"/img/top-chiefs/img_3.jpg",
            recipesCount:"11",
            cuisine:"Italian"
        }
        ,{
            name:"Vin Diesel",
            img:"/img/top-chiefs/img_4.jpg",
            recipesCount:"13",
            cuisine:"German"
        }
        ,{
            name:"Tom Holland",
            img:"/img/top-chiefs/img_5.jpg",
            recipesCount:"16",
            cuisine:"Indian"
        },{
            name:"Nick Jonas",
            img:"/img/top-chiefs/img_6.jpg",
            recipesCount:"12",
            cuisine:"American"
        }
    ]
    return (
        <div className="section chiefs">
            <h1 className="title">Our top Chefs</h1>
            <div className="top-chiefs-container">
                {chiefs.map(chief=><ChiefCard key={chief.name} chief={chief}/>)}
            </div>
        </div>
    )
}