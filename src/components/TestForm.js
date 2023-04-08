import React, { useState } from "react";
// import Table from "./Table";

export default function TestForm() {
  const [data, setdata] = useState({ CarModel: "Volvo" });
  const [arr, setarr] = useState([]);
  const [status, setStatus] = useState(false);
  const [idErr, setIdErr] = useState(false);

  const handleonchange = (e, fieldName) => {
    const value = e.target.value;

    setdata((state) => {
      return { ...state, [fieldName]: value };
    });
  };

  const onclickbutton = () => {
    const { id, name, email, CarModel } = data;
    if (
      id.length < 3 ||
      name.length < 2 ||
      email.length < 15 ||
      CarModel.length < 3
    ) {
      setIdErr(true);
      return;
    } else {
      setarr((state) => [...state, data]);
      setIdErr(false);
    }
    if (data.id.length < 3);
  };
  const handledelete = (id) => {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id !== id) {
        newarr.push(arr[i]);
      }
    }
    setarr(newarr);
  };
  return (
    <div className="container">
      {status ? (
        <div>
          <label>ID</label>
          <input
            type="text"
            onChange={(e) => handleonchange(e, "id")}
            placeholder="Enter id"
          />{" "}
          {idErr ? <span>Not Valid ID</span> : ""}
          <label>Name</label>
          <input
            type="text"
            onChange={(e) => handleonchange(e, "name")}
            placeholder="Enter name"
          />{" "}
          {idErr ? <span>Not Valid Name</span> : ""}
          <label>Email</label>
          <input
            type="text"
            onChange={(e) => handleonchange(e, "email")}
            placeholder="Enter Email"
          />{" "}
          {idErr ? <span>Not Valid Email</span> : ""}
          <label>Choose a car:</label>
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
            <tbody>
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
                    <td>
                      {" "}
                      <button
                        type="delete"
                        onClick={() => handledelete(data.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
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
