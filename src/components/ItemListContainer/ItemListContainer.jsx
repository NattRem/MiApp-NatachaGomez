import React from 'react';
import ItemCount from "./ItemCount";

function ItemListContainer({saludo}) {
    return (
        <div>
            {saludo}
            < ItemCount />
        </div>
    )
}

export default ItemListContainer
