// import { Link } from "react-router-dom";

function MasterTable() {
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
            <tr>
              <th><button className="btn btn-outline">Edit</button></th>
              <td>002520</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th><button className="btn btn-outline">Edit</button></th>
              <td>002520</td>
              <td>Desktop Support Technician</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th><button className="btn btn-outline">Edit</button></th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
            {/* row 4 */}
            <tr>
              <th><button className="btn btn-outline">Edit</button></th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
            {/* row 5 */}
            <tr>
              <th><button className="btn btn-outline">Edit</button></th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default MasterTable