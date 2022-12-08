import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Productos, categorias} from '../mock'
import Item from '../Item/Item'
import './ItemListContainer.css'

const ItemListContainer = () =>{
    const [item, setItem] = useState(Productos);
    const { id } = useParams()

    const FilterCategory = new Promise ((resolve, eject)=>{
        const newProductos = Productos.filter ((p)=> p.category==id)
        resolve(newProductos)
    })

    useEffect (()=>{
        FilterCategory.then ((response)=>{
            setItem (response)
            console.log (response,item)
        })
    }, [id])

    return (
        <div className='itemlistcontainer'>
            {
                item && item.map ((producto)=>{
                    return <Item producto={producto}/>
                })
            }
        </div>
    )
}

export default ItemListContainer