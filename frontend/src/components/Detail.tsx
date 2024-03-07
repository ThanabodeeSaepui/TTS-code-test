import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Detail() {
  const { hn } = useParams();
  const [HN, setHN] = useState("")
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`/api/${hn}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setHN(data[0].HN);
        setName(data[0].Name);
        setSurname(data[0].Surname);
        setPhone(data[0].Phone);
        setEmail(data[0].Email);
      });
  }, []);

  const update = (e: any) => {   
    e.preventDefault();
    const person = {
      HN: hn,
      Name: name,
      Surname: surname,
      Phone: phone,
      Email: email
    }
    axios.put(`/api/${HN}`, person)
      .then(() => {
        setSuccess(true)
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
        // Handle success, such as updating UI or showing a success message
      })
      .catch(() => {
        setError(true)
        setTimeout(() => {
          setError(false);
        }, 3000);
        // Handle error, such as displaying an error message
      });
  }

  const newPerson = (e: any) => {   
    e.preventDefault();
    const person = {
      Name: name,
      Surname: surname,
      Phone: phone,
      Email: email
    }
    axios.post('/api/new', person)
      .then(() => {
        setSuccess(true)
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch(() => {
        setError(true)
        setTimeout(() => {
          setError(false);
        }, 3000);
      });
  }

  const remove = (e: any) => {
    e.preventDefault();
    axios.delete(`/api/${HN}`)
      .then(() => {
        window.open("/", '_parent')
        // Handle success, such as updating UI or showing a success message
      })
      .catch(() => {
        setError(true)
        setTimeout(() => {
          setError(false);
        }, 3000);
        // Handle error, such as displaying an error message
      });
  }

  return (
    <>
      <h1 className="font-bold my-2 text-2xl">เจ้าของ</h1>
      <div className="flex border-t-2 py-2">
        <input type="text" placeholder="HN" className="input input-bordered flex items-center gap-2 " disabled 
          value={HN}
          onChange={(e) => {setHN(e.target.value)}}
        />
        <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/3000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
          <input type="text" placeholder="ชื่อ" 
            value={name}
            onChange={(e) => {setName(e.target.value)}}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/3000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
          <input type="text" placeholder="นามสกุล" 
            value={surname}
            onChange={(e) => {setSurname(e.target.value)}}/>
        </label>
      </div>
      <div className="flex my-1">
        <input type="text" placeholder="เบอร์ติดต่อ" className="input input-bordered flex items-center gap-2" 
          value={phone}
          onChange={(e) => {setPhone(e.target.value)}}
        />
        <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/3000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
          <input type="text" placeholder="อีเมล์" 
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
          />
        </label>
      </div>
      <div className="flex border-b-2 py-2">
        <button className="btn" onClick={()=> window.open("/", '_parent')}>
          Cancel
        </button>
        <button className="btn btn-info"
          onClick={newPerson}
        >Add</button>
        <button className="btn btn-info"
          onClick={update}
        >Save</button>
        <button className="btn btn-error"
          onClick={remove}
        >Delete</button>
      </div>
      {success && (
        <div role="alert" className="alert alert-success">
          <svg xmlns="http://www.w3.org/3000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>Success</span>
        </div>
      )}
      {error && (
        <div role="alert" className="alert alert-error">
          <svg xmlns="http://www.w3.org/3000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>Error!</span>
        </div>
      )}
    </>
  )
}

export default Detail