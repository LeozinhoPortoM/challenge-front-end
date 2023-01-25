import React, { useState, useEffect } from "react";
import axios from "axios";
import Main from "../template/Main";
import Table from "./components/Table";
import Form from "./components/Form";
import RowsTable from "./components/RowsTable";

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

  const renderRows = () => {
    {
      return listCars.data?.map((car) => {
        return (
          <RowsTable
            car={car}
            onClickLoad={load}
            onClickHandleRemove={handleRemove}
          />
        );
      });
    }
  };

  return (
    <Main {...headerProps}>
      <Form
        values={values}
        handleChangeValue={handleChangeValue}
        onClickClean={handleClean}
        onClickSave={handleSave}
      />
      <Table renderRows={renderRows} />
    </Main>
  );
}
