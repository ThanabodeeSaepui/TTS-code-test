// import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function MasterTable() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/api/data')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.data);
      });
  }, []);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Operation</th>
              <th>HN เจ้าของ</th>
              <th>ชื่อเจ้าของ</th>
              <th>เบอร์ติดต่อ</th>
              <th>อีเมล์</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.map((person) => (
              <tr>
                <th>
                  <button className="btn" onClick={()=> window.open(`/details/${person.HN}`, '_parent')}>
                    {/* <Link to={`/details/${person.HN}`}>Edit</Link> */}
                    Edit
                  </button>
                </th>
                <td>{person.HN}</td>
                <td>{person.Name} {person.Surname}</td>
                <td>{person.Phone}</td>
                <td>{person.Email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default MasterTable