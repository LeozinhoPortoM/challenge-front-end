import React, { useState, useEffect } from "react";
import axios from "axios";
import Main from "../template/Main";

const headerProps = {
  icon: "car",
  title: "Carros",
  subtitle: "Cadastro de carros: Incluir, Listar, Alterar e Excluir!",
};

const baseUrl = "http://localhost:3333/carros";
const initialState = {
  name: "",
  marca: "",
  year_manufacture: "",
  description: "",
  name_user: "",
  email_user: "",
  phone_user: "",
};

export default function CarCrud() {
  const [values, setValues] = useState({ ...initialState });
  const [listCars, setListCars] = useState([]);

  const handleChangeValue = (value) => {
    setValues((preValue) => ({
      ...preValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleSave = async () => {
    const car = values;
    const method = car.id ? "put" : "post";
    const url = car.id ? `${baseUrl}/${car.id}` : baseUrl;
    try {
      if (
        !car.name == "" &&
        !car.marca == "" &&
        !car.year_manufacture == "" &&
        !car.description == "" &&
        !car.name_user == "" &&
        !car.email_user == "" &&
        !car.phone_user == ""
      ) {
        const resp = await axios[method](url, car);
        const listCars = resp.data;
        alert(listCars.message);
        setListCars({ car });
        handleGetCars();
        handleClean();
      } else {
        alert("Preencha todos os campos.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClean = () => {
    setValues(initialState);
  };

  const handleGetCars = async () => {
    try {
      const resp = await axios(baseUrl);
      setListCars(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = async (car) => {
    try {
      const resp = await axios.delete(`${baseUrl}/${car.id}`);
      setListCars(listCars);
      alert(resp.data.message);
      handleGetCars();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetCars();
  }, []);

  const load = (value) => {
    setValues({
      id: value.id,
      name: value.name,
      marca: value.marca,
      year_manufacture: value.year_manufacture,
      description: value.description,
      name_user: value.name_user,
      email_user: value.email_user,
      phone_user: value.phone_user,
    });
  };

  const renderFrom = () => {
    return (
      <div className="form">
        <div className="row">
          <h1>Dados do carro</h1>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Nome</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={values.name}
                onChange={handleChangeValue}
                // placeholder="Digite o nome..."
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Marca</label>
              <input
                type="text"
                className="form-control"
                name="marca"
                value={values.marca}
                onChange={handleChangeValue}
                // placeholder="Digite a marca..."
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Ano</label>
              <input
                type="date"
                className="form-control"
                name="year_manufacture"
                value={values.year_manufacture}
                onChange={handleChangeValue}
              />
            </div>
          </div>

          <div className="col-12 col-md-6 mb-4">
            <div className="form-group">
              <label>Descrição</label>
              <input
                type="text"
                className="form-control"
                name="description"
                value={values.description}
                onChange={handleChangeValue}
                // placeholder="Descrição..."
              />
            </div>
          </div>

          <hr />

          <h1>Dados do proprietário</h1>

          <div className="col-12 col-md-6 mb-3">
            <div className="form-group">
              <label>Nome</label>
              <input
                type="text"
                className="form-control"
                name="name_user"
                value={values.name_user}
                onChange={handleChangeValue}
                // placeholder="Descrição..."
              />
            </div>
          </div>

          <div className="col-12 col-md-6 mb-3">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email_user"
                value={values.email_user}
                onChange={handleChangeValue}
                // placeholder="Descrição..."
              />
            </div>
          </div>

          <div className="col-12 col-md-6 mb-4">
            <div className="form-group">
              <label>Telefone</label>
              <input
                type="text"
                className="form-control"
                name="phone_user"
                value={values.phone_user}
                onChange={handleChangeValue}
                // placeholder="Descrição..."
              />
            </div>
          </div>

          <hr />

          <div className="row">
            <div className="col-12 d-flex justify-content-end">
              <button className="btn btn-primary" onClick={handleSave}>
                Salvar
              </button>

              <button className="btn btn-secondary ms-2" onClick={handleClean}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderTable = () => {
    return (
      <div className="table-responsive">
        <table className="table mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Marca</th>
              <th>Ano</th>
              <th>Descrição</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>{renderRows()}</tbody>
        </table>
      </div>
    );
  };

  const renderRows = () => {
    {
      return listCars.data?.map((car) => {
        return (
          <tr key={car.id}>
            <td>{car.id}</td>
            <td>{car.name}</td>
            <td>{car.marca}</td>
            <td>{car.year_manufacture}</td>
            <td>{car.description}</td>
            <td>{car.name_user}</td>
            <td>{car.email_user}</td>
            <td>{car.phone_user}</td>
            <td>
              <button className="btn btn-warning" onClick={() => load(car)}>
                <i className="fa fa-pencil"></i>
              </button>
              <button className="btn btn-danger ms-2">
                <i
                  className="fa fa-trash"
                  onClick={() => handleRemove(car)}
                ></i>
              </button>
            </td>
          </tr>
        );
      });
    }
  };

  return (
    <Main {...headerProps}>
      {renderFrom()}
      {renderTable()}
    </Main>
  );
}
