import React, { useState } from "react";
// import Table from "./Table";

export default function TestForm() {
  const [data, setdata] = useState({ CarModel: "Volvo" });
  const [arr, setarr] = useState([]);
  const [status, setStatus] = useState(false);

  const handleonchange = (e, fieldName) => {
    const value = e.target.value;
    setdata((state) => {
      return { ...state, [fieldName]: value };
    });
  };

  const onclickbutton = () => {
    setarr((state) => [...state, data]);
  };
  return (
    <div className="container">
      {status ? (
        <div>
          <label htmlFor="Id">ID</label>
          <input
            type="text"
            onChange={(e) => handleonchange(e, "id")}
            placeholder="Enter id"
          />
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            onChange={(e) => handleonchange(e, "name")}
            placeholder="Enter name"
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            onChange={(e) => handleonchange(e, "email")}
            placeholder="Enter Email"
          />
          <label for="cars">Choose a car:</label>
          <select
            name="cars"
            id="cars"
            onChange={(e) => handleonchange(e, "CarModel")}
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <button type="submit" onClick={() => onclickbutton()}>
            Submit
          </button>
          <br />
          <table>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Email</td>
              <td>CarModel</td>
            </tr>
            {arr.map((data) => {
              return (
                <tr>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.CarModel}</td>
                  <button type="delete">Delete</button>
                </tr>
              );
            })}
          </table>
        </div>
      ) : null}
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setStatus(false)}
      >
        Hide
      </button>
      <button
        type="button"
        className="btn btn-success"
        onClick={() => setStatus(true)}
      >
        Show
      </button>

      <button
        type="button"
        className="btn btn-danger"
        onClick={() => setStatus(!status)}
      >
        Toggle
      </button>
    </div>
  );
}
