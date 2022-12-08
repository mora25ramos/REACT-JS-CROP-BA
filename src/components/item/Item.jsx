import {Link} from 'react-router-dom'
import './Item.css'
const Item =( {producto} )=>{
    console.log (producto)
    return (
        <div>
            <div className='itemlistcontainer__productos'>
                <img src={producto.img} width={180} height={230} />
                <Link to={`/item/${producto.id}`}><p className='productName__link'> {producto.name} </p></Link>
            </div>
        </div>  
    ) 
}

export default Item