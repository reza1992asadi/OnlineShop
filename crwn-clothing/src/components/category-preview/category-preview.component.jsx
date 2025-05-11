import './category-preview.styles.scss'
import ProductCard from '../product-card/productCard.component'
import { useNavigate } from 'react-router-dom';

const CategoryPreview = ({title,products}) => {
    const navigate = useNavigate () ; 
    const handleClick = () => {
        navigate(`/shop/${title}`); 
    };

    return (    
    <div className='category-preview-container'>
        <h2>
            <span className='title' onClick={handleClick}>{title.toUpperCase()}</span>
        </h2>
        <div className='preview'>
        {products
            .slice(0, 4)
            .map(product => (
            <ProductCard key={product.id} product={product} />
        ))
        }
        </div>
    </div>);
}; 

export default CategoryPreview; 