import { Link } from 'react-router-dom'

function Detail() {
  return (
    <>
      <h1 className="font-bold my-2 text-2xl">เจ้าของ</h1>
      <div className="flex border-t-2 py-2">
        <input type="text" placeholder="HN" className="input input-bordered flex items-center gap-2" />
        <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
          <input type="text" placeholder="ชื่อ" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
          <input type="text" placeholder="นามสกุล" />
        </label>
      </div>
      <div className="flex my-1">
        <input type="text" placeholder="เบอร์ติดต่อ" className="input input-bordered flex items-center gap-2" />
        <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
          <input type="text" placeholder="อีเมล์" />
        </label>
      </div>
      <div className="flex border-b-2 py-2">
        <button className="btn">
          <Link to="/">Cancel</Link>
        </button>
        <button className="btn btn-info">Add</button>
        <button className="btn btn-info">Save</button>
        <button className="btn btn-error">Delete</button>
      </div>
    </>
  )
}

export default Detail