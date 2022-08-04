import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";

import StaticContext from "../../../contexts/StaticProvider";

import CuadroEstadisticas from "./CuadroEstadisticas";
import Spiner from "../../atoms/Spiner";
import ContenedorSeleccionados from "./ContenedorSeleccionados";

const SeleccionadoGeneral = () => {
  const { isOpenErrorModal, setIsOpenErrorModal, isCargando, setIsCargando } =
    useContext(StaticContext);

  const [montoTotalVentas, setMontoTotalVentas] = useState(0);
  const [montoTotalGastos, setMontoTotalGastos] = useState(0);
  const [inicioCaja, setInicioCaja] = useState(0);
  const [montoCajaActual, setMontoCajaActual] = useState(0);

  useEffect(() => {
    // LLamar Funciones
    llamarATodasLasFunciones();
    async function llamarATodasLasFunciones() {
      setIsCargando(true);

      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const respuesta = await axios.get(
          `${import.meta.env.VITE_API_URL}/estadisticas/`,
          config
        );
        const respuesta2 = await axios.get(
          `${import.meta.env.VITE_API_URL}/estadisticas/hoy`,
          config
        );
        setInicioCaja(respuesta.data.valorInicialCaja);
        setMontoTotalGastos(respuesta.data.montoTotalGastos);
        setMontoTotalVentas(respuesta.data.montoTotalVentas);
        setMontoCajaActual(respuesta.data.montoCajaActual);
        console.log(respuesta2.data);
      } catch (error) {
        console.log(error);
      }
      setIsCargando(false);
    }
  }, []);

  const titlesStlyles = "text-lg xs:text-2xl font-black uppercase my-2";

  return (
    <>
      {isCargando ? (
        <Spiner />
      ) : (
        <ContenedorSeleccionados>
          <CuadroEstadisticas
            tittle="Caja"
            tittle2="Actual"
            value={montoCajaActual}
          />
          <CuadroEstadisticas
            tittle="Inicio"
            tittle2="Caja"
            value={inicioCaja}
          />
          <CuadroEstadisticas
            tittle="Ventas"
            tittle2="Totales"
            value={montoTotalVentas}
          />
          <CuadroEstadisticas
            tittle="Gastos"
            tittle2="Totales"
            value={montoTotalGastos}
          />
          <h1 className="font-bold capitalize text-xl my-2">Dia de Hoy</h1>

          <CuadroEstadisticas
            tittle="Gastos"
            tittle2="Totales"
            value={montoTotalGastos}
          />
        </ContenedorSeleccionados>
      )}
    </>
  );
};

export default SeleccionadoGeneral;
