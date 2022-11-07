import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function AddUser() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const handleFormSubmit = async (e) => {
    let response = await axios
      .post("http://localhost:8000/users", formData)
      .then(navigate("/"));
  };

  return (
    <div className="containerAdd">
      <h2 className="title1">Personel Ekle</h2>
      <table class="table">
        <tbody>
          <tr>
            <th scope="row">Adı Soyadı</th>
            <td>
              <input
                type="text"
                value={formData.name}
                placeholder="Adı Soyadı"
                className="input1"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </td>
          </tr>
          <tr>
            <th scope="row">Kullanıcı Adı</th>
            <td>
              <input
                className="input1"
                type="text"
                value={formData.username}
                placeholder="Kullanıcı Adı"
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </td>
          </tr>
          <tr>
            <th scope="row">Mail Adresi</th>
            <td colspan="2">
              <input
                className="input1"
                type="text"
                value={formData.email}
                placeholder="Mail Adresi"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </td>
          </tr>
          <tr>
            <th scope="row">Telefon Numarası</th>
            <td>
              <input
                className="input1"
                type="text"
                value={formData.phone}
                placeholder="Telefon numarası"
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </td>
          </tr>
          <tr>
            <th scope="row">Website URL</th>
            <td>
              <input
                className="input1"
                type="text"
                value={formData.website}
                placeholder="Website URL"
                onChange={(e) =>
                  setFormData({ ...formData, website: e.target.value })
                }
              />
            </td>
          </tr>
          <br></br>
          <Link to={`/`} className="btn closeButton">
            Vazgeç
          </Link>
          <button
            onClick={handleFormSubmit}
            type="submit"
            className="btn addButton"
          >
            Ekle
          </button>
        </tbody>
      </table>
    </div>
  );
}

export default AddUser;
