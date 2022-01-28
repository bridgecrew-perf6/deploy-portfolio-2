import Product from "../product/Product"
import "./productList.css"
import {products} from "../../data"

const ProductList=()=>{
    return(
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">My Projects</h1>
                <p className="pl-desc">
                I have make a lot of mini web dev projects and some relatively bigger projects. I know MERN stack and currently just brushing up my react. Some of the projects i made are blog site with database, my site, google keeper clone, todo list, drum kit, snake game, weather teller, mood detection, meditation site, etc. Also know the basics of hosting and backend using mongo db(mongoose) and heroku. I have made projects that are euipped with backend and are hosted live.
                </p>                
            </div>
            <div className="pl-list">
            {products.map((item)=>(
                <Product key={item.id} img={item.img} link={item.link} />
            ))}
            </div>
        </div>
    )
}

export default ProductList