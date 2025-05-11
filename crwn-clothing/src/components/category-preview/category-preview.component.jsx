import './category-preview.styles.scss'
import ProductCard from '../product-card/productCard.component'

const CategoryPreview = ({title,products}) => (
    <div className='category-preview-container'>
        <h2>
            <span className='title'>{title.toUpperCase()}</span>
        </h2>
        <div className='preview'>
        {products
            .slice(0, 4)
            .map(product => (
            <ProductCard key={product.id} product={product} />
        ))
        }
        </div>
    </div>
); 

export default CategoryPreview; 