import React, {useState,useEffect, Fragment} from 'react';
import axios from 'axios';
import EditTable from './EditTable';
import ViewTable from './ViewTable';

export default function Allinventory() {
 //create
  const [inventorys, setInventorys] = useState([]);
  const [i, setI] = useState("");

  useEffect(()=>{
    function getInventorys() {

      axios.get("http://localhost:8070/inventory/").then((res)=>{
        setInventorys(res.data);
      }).catch((err)=> {
        alert(err.message);
      })
    }
    getInventorys();
  },[])

  //update

  const [editData, setEditFormData] = useState({
        iteamId: "",
        iteamName: "",
        price: "",
        quantity: "",
        brandName: ""
})


const handleEditFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = {...editData};
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
}


function updateData(e){
    e.preventDefault();


    const updateInventory ={
        iteamId: editProduct,
        iteamName: editData.iteamName,
        price: editData.price,
        quantity: editData.quantity,
        brandName: editData.brandName
        
    }

    axios.put("http://localhost:8070/inventory/update/:iteamId",updateInventory).then(() =>{
        alert("Product updated")
        window.location.reload();
    }).catch((err) =>{
        alert(err)
    })


}


const [editProduct,setEditProduct] = useState(null);

const handleEditClick = (e, inventory)=> {
    e.preventDefault();
    setEditProduct(inventory._id)

    const formValues = {
        iteamId: inventory.iteamId,
        iteamName: inventory.iteamName,
        price: inventory.price,
        quantity: inventory.quantity,
        brandName: inventory.brandName,
    
    }

    setEditFormData(formValues);
}

const handleCancelClick = () => {
    setEditProduct(null);
}
//delete
const handleDeleteClick = (iteamId) => {

    axios.delete("http://localhost:8070/inventory/delete/"+iteamId).then(() =>{
        window.location.reload();
    }).catch((err) =>{
        alert(err)
    })
    
}

   

return(
    <div>
        <input type="text" placeholder="Search..." value={i} onChange={(e)=> setI(e.target.value)}/>

        <form onSubmit={updateData}>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Iteam code</th>
                        <th>Iteam Name</th>
                        <th>Price (Rs.)</th>
                        <th>Quantity</th>
                        <th>Brand Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {inventorys.filter((inventory)=> {
                        if(i == ""){
                            return inventory
                        }else if(inventory.iteamName.toLowerCase().includes(i.toLowerCase())) {
                            return inventory
                        }
                    }).map((inventory)=> (
                        <Fragment>

                            {editProduct === inventory._id ? (
                                <EditTable 
                                    editData={editData} 
                                    handleEditFormChange={handleEditFormChange}
                                    handleCancelClick={handleCancelClick}
                                />
                             ) : (
                                <ViewTable 
                                    inventory={inventory}
                                    handleEditClick={handleEditClick}
                                    handleDeleteClick={handleDeleteClick}
                                
                                />
                             )}
                             
                        </Fragment>
                        
                    ))}
                </tbody>

            </table>
        </form>
        

    </div>
);
 
    



}