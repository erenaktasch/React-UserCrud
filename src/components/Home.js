import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    await axios.get("http://localhost:8000/users").then((res) => {
      setData(res.data);
    });
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/users/${id}`, id).then((res) => {
      alert("deleted!");
    });
    getUser();
  };

  return (
    <div>
      <div className="container">
        <h1 className="title1">Personel Listesi</h1>
        <div className="tools">
          <input
            type="text"
            class="searchInput"
            placeholder="Personel Ara"
          ></input>
          <button class="searchButton" type="button" id="button-addon2">
            ARA
          </button>
          <Link to={"/add-user"}>
            <button className="button1">Yeni Personel Ekle</button>
          </Link>
        </div>

        <table className="table">
          <thead>
            <tr className="text-center">
              <th className="col-1">ID</th>
              <th className="col-1">Adı Soyadı</th>
              <th className="col-1">Kullanıcı Adı</th>
              <th className="col-1">Mail Adresi</th>
              <th className="col-2">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((user, index) => (
                <tr key={index} className="text-center ">
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link
                      to={`/users/${user.id}`}
                      className="btn viewButton"
                    >
                      Görüntüle
                    </Link>
                    <Link
                      to={`/edit-user/${user.id}`}
                      className="btn editButton"
                    >
                      Düzenle
                    </Link>
                    <Link
                      onClick={() => handleDelete(user.id)}
                      className="btn delButton"
                    >
                      Sil
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
