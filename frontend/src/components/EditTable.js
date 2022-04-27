import React from 'react';

const EditTable = ({editData, handleEditFormChange, handleCancelClick}) => {
    return (
        <tr>
            <td>
                <input type="iteamId" required="required" placeholder='Enter product id...' name="iteamId" value={editData.iteamId} onChange={handleEditFormChange}/>
            </td>
            <td>
            <input type="text" required="required" placeholder='Enter product name...' name="iteamName" value={editData.iteamName} onChange={handleEditFormChange}/>
            </td>
            <td>
            <input type="price" required="required" placeholder='Enter product price...' name="price" value={editData.price} onChange={handleEditFormChange}/>   
            </td>
            <td>
                <input type="quantity" required="required" placeholder='Enter product quantity...' name="quantity" value={editData.quantity} onChange={handleEditFormChange}/>
            </td>
            <td>
            <input type="text" required="required" placeholder='Enter product brand...' name="brandName" value={editData.brandName} onChange={handleEditFormChange}/>
            </td>
            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>
    )
}



export default EditTable;