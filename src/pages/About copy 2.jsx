import axios from 'axios'
import React, { useEffect, useState } from 'react'

const About = () => {
  const [getData, setgetData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/data');
        console.log(res.data);
        setgetData(res.data);
      } catch (error) {
        setgetData({ error: 'Failed to fetch data' });
      }
    }
    fetchData();
  }, [])

  // =================
  const initialState = {
    Task: "",
    Taskdescription: "",
  };
  const [FromData, setFromData] = useState(initialState);
  const [Field, setField] = useState([]);


  const FromHandler = (e) => {
    e.preventDefault();
  };
  const clearForm = () => {
    setFromData(initialState);
  };
  const FieldValue = (e) => {
    const { name, value } = e.target;
    setFromData({
      ...FromData,
      [name]: value
    });
  };
  const createEle = () => {
    if (!FromData.Task.trim() || !FromData.Taskdescription.trim()) {
      alert("please fill all the field");
      return;
    }
    const newTask = {
      ...FromData
    };
    setField([...Field, newTask]);
    alert("success");
    clearForm();
  };


  // ============

  return (
    <>
      <div>
        {getData ? (
          Object.entries(getData).map(([key, value]) => (
            <p key={key}>
              <strong>{key}:</strong> {value}
            </p>
          ))
        ) : (
          <p>please wait...</p>
        )}
      </div>
      
      <h2>todo</h2>
      <form onSubmit={FromHandler}>
        <input
          onChange={FieldValue}
          value={FromData.Task}
          type="text"
          name='Task'
          className="form-input"
          placeholder='Task name' />
        <br />
        <textarea
          onChange={FieldValue}
          value={FromData.Taskdescription}
          className="form-input"
          name="Taskdescription"
          placeholder='write Your task ...'
        ></textarea>
        <button onClick={createEle} className='form-btn'>create</button>
      </form>
      <br />

      <div className="admin-table">
        <table>
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Description</th>
              <th>status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Field.map((items, i) => (
              <tr key={i}>
                <td>{items.Task}</td>
                <td>{items.Taskdescription}</td>
                <td>✅ ❌</td>
                <td style={{ display: 'flex' }}>
                  <button className='admin-btn-secondary admin-btn-sm'>done</button>
                  <button className='admin-btn-danger admin-btn-sm'>Del</button>
                </td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default About