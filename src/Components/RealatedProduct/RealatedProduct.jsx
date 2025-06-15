import './RealatedProduct.css'
import data_product from '../Assets/data'
import { data } from 'react-router-dom'
import Item from '../Item/Item'
const RealatedProduct = () => {
    return (
        <div className='RealatedProduct'>
            <h1>RealatedProduct</h1>
            <hr />
            <div className="RealatedProduct_tem">
                {data_product.map((item, i) => {
                    return <Item
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                })}
            </div>
        </div>
    )
}

export default RealatedProduct