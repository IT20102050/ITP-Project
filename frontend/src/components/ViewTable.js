import React from 'react';

const ViewTable = ({inventory , handleEditClick, handleDeleteClick}) => {
    return(
        
        <tr>
            <td>{inventory.iteamId}</td>
            <td>{inventory.iteamName}</td>
            <td>{inventory.price}</td>
            <td>{inventory.quantity}</td>
            <td>{inventory.brandName}</td>
            <td>
                <button type="button" onClick={(e) => handleEditClick(e,inventory)}>Edit</button>
                <button type="button" onClick={() => handleDeleteClick(inventory._id)}>Delete</button>
            </td>
        </tr>
                        
    )
}

export default ViewTable;
