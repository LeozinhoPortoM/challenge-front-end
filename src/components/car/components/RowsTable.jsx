import React from "react";

export default ({ car, onClickHandleRemove, onClickLoad }) => {
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
        <button className="btn btn-warning" onClick={() => onClickLoad(car)}>
          <i className="fa fa-pencil"></i>
        </button>
        <button className="btn btn-danger ms-2">
          <i
            className="fa fa-trash"
            onClick={() => onClickHandleRemove(car)}
          ></i>
        </button>
      </td>
    </tr>
  );
};
