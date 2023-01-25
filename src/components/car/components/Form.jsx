import React from "react";

export default ({values, handleChangeValue, onClickSave, onClickClean}) => {
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
            <button className="btn btn-primary" onClick={onClickSave}>
              Salvar
            </button>

            <button className="btn btn-secondary ms-2" onClick={onClickClean}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
