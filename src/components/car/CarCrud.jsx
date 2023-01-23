import React, { useState, useEffect } from "react";
import axios from "axios";
import Main from "../template/Main";

const headerProps = {
  icon: "car",
  title: "Carros",
  subtitle: "Cadastro de carros: Incluir, Listar, Alterar e Excluir!",
};

const baseUrl = "http://localhost:3333/carros";

export default function CarCrud() {
  const [values, setValues] = useState({
    name: "",
    marca: "",
    year_manufacture: "",
    description: "",
  });
  const [listCars, setListCars] = useState([]);

  const handleChangeValue = (value) => {
    setValues((preValue) => ({
      ...preValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleSave = () => {
    const car = values;
    const method = car.id ? "put" : "post";
    const url = car.id ? `${baseUrl}/${car.id}` : baseUrl;
    axios[method](url, car).then((resp) => {
      const listCars = resp.data;
      setListCars({ car });
    });
  };

  const handleClean = () => {
    setValues(values);
  };

  useEffect(() => {
    try {
      async function load() {
        const resp = await axios(baseUrl);
        setListCars(resp.data);
      }
      load();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const renderFrom = () => {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Nome</label>
              <input
                type="text"
                className="form-control"
                name="name"
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
                onChange={handleChangeValue}
              />
            </div>
          </div>

          <div className="col-12 col-md-6 mb-3">
            <div className="form-group">
              <label>Descrição</label>
              <input
                type="text"
                className="form-control"
                name="description"
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

  const handleRemove = async (car) => {
    try {
      const resp = await axios.delete(`${baseUrl}/${car.id}`);
      setListCars(listCars);
    } catch (error) {
      console.log(error);
    }
  };

  const renderTable = () => {
    return (
      <table className="table mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Marca</th>
            <th>Ano</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
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
            <td>
              <button className="btn btn-warning">
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
