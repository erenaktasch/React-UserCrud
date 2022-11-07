import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


function ViewUser() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    await axios
      .get(`http://localhost:8000/users/${id}`)
      .then((res) => {
        setData(res.data);
      });
  };

  return (
    <div>
      <div className="container mt-5">
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
              <td>{data.name}</td>
            </tr>
            <tr>
              <th scope="row">Kullanıcı Adı</th>
              <td>{data.username}</td>
            </tr>
            <tr>
              <th scope="row">Mail Adresi</th>
              <td colspan="2">{data.email}</td>
            </tr>
            <tr>
              <th scope="row">Telefon Numarası</th>
              <td>{data.phone}</td>
            </tr>
            <tr>
              <th scope="row">Website URL</th>
              <td>{data.website}</td>
            </tr>
            <br></br>
            <Link to={`/`} className="btn btn-info">
              Tamam
            </Link>
            {/* <Link to={`/edit-user/${user.id}`} className="btn btn-danger mx-3">
              Düzenle
            </Link> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewUser;
