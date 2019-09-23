import React from 'react';
import { ListItemText, Divider } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const AddedItem = ({ item, removeFromCard }) => {
    console.log(item)
    return (
        <li style={{ display: 'flex', alignItems: 'flex-end' }}>
            <ListItemText primary={`Name: `} secondary={`Price: `} />
            <ListItemText primary={`${item.name}`} secondary={` ${item.value}$`} />
            <DeleteForeverIcon style={{ cursor: 'pointer' }} onClick={() => removeFromCard(item.id)} />
            <Divider />
        </li>
    )
}

export default AddedItem;