import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

function EditUser() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/users/${id}`).then((res) => {
      setName(res.data.name);
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPhone(res.data.phone);
      setWebsite(res.data.website);
    });
  }, []);

  const navigate = useNavigate();

  const data = {
    name: name,
    username: username,
    email: email,
    phone: phone,
    website: website,
  };

  function Update(e) {
    e.preventDefault();
    axios.put(`http://localhost:8000/users/${id}`, data).then(navigate("/"));
    alert("güncellendi");
  }

  return (
    <div>
      <div className="containerAdd">
        <h2 className="title1">Personel Bilgilerini Güncelle</h2>
        <table class="table">
          <thead>
            {/* <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
            </tr> */}
          </thead>
          <tbody>
            <tr>
              <th scope="row">Adı Soyadı</th>
              <td>
                <input
                  className="input1"
                  type="text"
                  value={data.name}
                  onChange={(e) => setName(e.target.value)}
                />{" "}
              </td>
            </tr>
            <tr>
              <th scope="row">Kullanıcı Adı</th>
              <td>
                <input
                  className="input1"
                  type="text"
                  value={data.username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Mail Adresi</th>
              <td colspan="2">
                <input
                  className="input1"
                  type="text"
                  value={data.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Telefon Numarası</th>
              <td>
                <input
                  className="input1"
                  type="text"
                  value={data.phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Website URL</th>
              <td>
                <input
                  className="input1"
                  type="text"
                  value={data.website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </td>
            </tr>
            <br></br>
            <Link to={`/`} className="btn closeButton">
              Vazgeç
            </Link>
            <button className="btn addButton" type="submit" onClick={Update}>
              Güncelle
            </button>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EditUser;
