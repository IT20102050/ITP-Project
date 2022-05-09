import React, { useState } from "react";
import axios from "axios";



export default function AddIteam() {


  const [iteamName, setiteamname] = useState("");
  const [category, setcategory] = useState("");
  const [date, setdate] = useState("")
  const [price, setprice] = useState("");
  const [quantity, setquantity] = useState("");
  const [brandName, setbarndName] = useState("");


  function sendData(e) {
    e.preventDefault();

    const newIteam = {


      iteamName,
      category,
      date,
      price,
      quantity,
      brandName
    }

    axios.post("http://localhost:8070/inventory/add", newIteam).then(() => {
      alert("Iteam Added")
      window.location.reload();

    }).catch((err) => {
      alert(err)
    })

  }

  return (

    <div className="body">

      <div className="container">
        <h1>Add Iteams</h1>


        <form onSubmit={sendData}>



          <div class="from-group">
            <label for="iteamName" class="form-label">Iteam Name</label>
            <input type="iteamName" class="form-control" id="iteamname" placeholder="Enter iteam_name"

              onChange={(e) => {

                setiteamname(e.target.value);

              }}
            />


          </div>

          <br />

          <div className="col-md-7 element">
            <label className="form-label" for="categorySelect">Category</label>
            <select name="category" className="form-select" id="categorySelect"

              onChange={(e) => {

                setcategory(e.target.value);
              }} >
              <option>Choose...</option>
              <option>Dry Food</option>
              <option>Wet Food</option>
              <option>Supplements</option>
              <option>Flea & Tick Care</option>
              <option>Beds & Blankets</option>
              <option>Health & Wellness</option>
              <option>Crates & Kennels</option>
              <option>Accessories</option>
            </select>


          </div>

          <br />

          <div className="col-md-3 element" style={{ display: 'block' }}>
            <label for="datePicker" className="form-label">Received Date</label>
            <input id="date" name="date" label="Choose Received Date" type="date" defaultValue="2022-03-01" InputLabelProps={{ shrink: true, }} required

              onChange={(e) => {

                setdate(e.target.value);
              }}

            />


          </div>

          <br />

          <div class="from-group">
            <label for="price" class="form-label">Price</label>
            <input type="price" class="form-control" id="price" placeholder="Enter_price"

              onChange={(e) => {

                setprice(e.target.value);

              }}
            />
          </div>
          <br />

          <div class="from-group">
            <label for=" quantity" class="form-label"> Quantity</label>
            <input type=" quantity" class="form-control" id=" quantity" placeholder="Enter_ quantity"

              onChange={(e) => {

                setquantity(e.target.value);

              }}

            />

            <td>
              <div className="col-md-14">
                <label for="" className="form-label">Unit</label>
                <select id="inputState" className="form-select">
                  <option selected>Choose...</option>
                  <option value="1">pieces</option>
                  <option value="2">kg</option>
                  <option value="3">liter</option>
                </select>
              </div>
            </td>

          </div>
          <br />

          <div class="from-group">
            <label for=" brandName" class="form-label">  Brand Name</label>
            <input type=" brandName" class="form-control" id="  brandName" placeholder="Enter_ brandName"

              onChange={(e) => {

                setbarndName(e.target.value);

              }}

            />
          </div>

          <div className="element">
            <label for="actual-btn" className="form-label">Upload Product Image</label>
            <input type="file" id="actual-btn" name="image" className="upload text-white" required />
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>

  )
}