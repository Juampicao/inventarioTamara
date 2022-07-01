import React, { useState } from "react";
import CajaEfectivo from "../atoms/CajaEfectivo";
import CuadroVentas from "../atoms/CuadroVentas";
import Dropdown from "../atoms/Dropdown";
import Modal from "../atoms/Modal";
import { BotonSecundario } from "../atoms/Botones";

import Header from "../molecules/Header";
import ListadoVentas from "../molecules/ListadoVentas";
// import "tw-elements";

const Ventas = () => {
  const [caja, setCaja] = useState(6943);

  const handleVender = () => {
    setCaja(caja + 1240);
  };

  const handleReiniciarCaja = () => {
    setCaja(0);
  };
  return (
    <div>
      <Header title="Ventas" />
      {/* <p> Pagina en Construccion</p> */}
      {/* <Dropdown /> */}
      <CajaEfectivo valorCaja={caja} />
      <div className="py-5 flex space-x-3">
        <Modal onClick={handleVender} />
        <BotonSecundario onClick={handleReiniciarCaja} value="Reiniciar Caja" />
      </div>
      <h1 className="font-black uppercase text-2xl text-end p-3">
        30 de Junio de 2022
      </h1>
      <div className="grid grid-rows space-y-10">
        <div>
          <h3 className="text-2xl font-bold font-mono uppercase">Ventas hoy</h3>
          <div className="flex space-x-3 text-center">
            <CuadroVentas title="Cantidad Ventas: " valor="10" className="" />
            <CuadroVentas title="Ganancia neta: " valor="$5930" />
            <CuadroVentas title="Ventas Brutas: " valor="$12040" />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold font-mono uppercase">
            Ventas Semana
          </h3>
          <div className="flex space-x-3 text-center">
            <CuadroVentas title="Cantidad Ventas: " valor="54" />
            <CuadroVentas title="Ganancia neta: " valor="$24012" />
            <CuadroVentas title="Ventas Brutas: " valor="$59002" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold font-mono uppercase">Ventas Mes</h3>
          <div className="flex space-x-3 text-center">
            <CuadroVentas title="Cantidad Ventas: " valor="102" />
            <CuadroVentas title="Ganancia neta: " valor="$124032" />
            <CuadroVentas title="Ventas Brutas: " valor="$2402431" />
          </div>
        </div>
      </div>
      <ListadoVentas />
    </div>
  );
};

export default Ventas;
