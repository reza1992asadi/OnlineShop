import CategoryItem from "../category-item/category-item.component";
import "./category-menu.styles.scss"

const CategoryMenu = ({categories}) => {

      return (
        <div className="categories-container">
          { Array.isArray(categories)&& categories.map((category) => (
            <CategoryItem key={category.title}  category={category}/> ))}  
        </div>); 
}

export default CategoryMenu; 