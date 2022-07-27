import React, { useContext, useEffect, useState } from "react";
import StaticContext from "../../../contexts/StaticProvider";
import Gasto from "./Gasto";

import CuadroGastos from "../../atoms/gastos/CuadroGastos";
import ListadoCaja from "./ListadoCaja";

import IconoInicioCaja from "../../../img/iconCaja.png";
import Spiner from "../../atoms/Spiner";
import IconoTooltip from "../../../img/iconoExclamacion2.png";

const ListadoGastos = () => {
  const {
    gastos,
    setGastos,
    gasto,
    setGasto,
    screenSize,
    setScreenSize,
    setTotalValorGastos,
    montoTotalVentasEfectivo,
    inicioCaja,
    isCargando,
    setIsCargando,
  } = useContext(StaticContext);

  // const diccionarioIConos = {
  //   Gastos: IconoGastosVarios,
  //   Proveedor: IconoProveedor,
  //   Comida: IconoComida,
  // };

  const [montoTotalGastosComida, setMontoTotalGastosComida] = useState();
  const [montoTotalGastosVarios, setMontoTotalGastosVarios] = useState();
  const [montoTotalGastosProveedores, setMontoTotalGastosProveedores] =
    useState();
  const [montoTotalGastosInventario, setMontoTotalGastosInventario] =
    useState();

  const [montoTotalGastos, setMontoTotalGastos] = useState();

  const { _id, nombre, valor, cantidad, fecha } = gasto;

  // Get Base de datos
  useEffect(() => {
    const obtenerGastos = async () => {
      setIsCargando(true);
      try {
        const url = `${import.meta.env.VITE_API_URL}/gastos`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setMontoTotalGastosComida(resultado.montoTotalGastosComida);
        setMontoTotalGastosVarios(resultado.montoTotalGastosVarios);
        setMontoTotalGastosProveedores(resultado.montoTotalGastosProveedores);
        setMontoTotalGastosInventario(resultado.montoTotalGastosInventario);

        setGastos(resultado.gastos);
        setIsCargando(false);
      } catch (error) {
        console.log(error);
      }
    };
    setTotalValorGastos(0);

    obtenerGastos();
  }, []);

  // Styles
  const tableStyles =
    // "hidden mt-5 md:block table-auto shadow-lg bg-white w-full text-center border rounded-3xl  ";
    "w-full";
  const tableStylesPhone = "";
  const linea = <div className="h-[2px] w-full mx-auto bg-red-500"> </div>;

  const titlesStlyles = "text-lg xs:text-2xl font-black uppercase my-2";
  const contenedorDivTitulos = "justify-between flex flex-wrap gap-y-4 gap-x-5 px-5 my-2  sm:flex sm:scroll-x-auto"
  return (
    <div>
      {isCargando ? <Spiner /> : ""}
      <div className="overflow-auto rounded-xl  shadow-xl  my-5 text-center max-w-7xl ">
        <table className={tableStyles}>
          <thead className=" bg-white border-b-2 border-gray-200">
            <tr className="  bg-white">
              <th className="p-2">Categoria</th>
              <th className="p-2">Nombre</th>
              <th className="p-2">Valor</th>
              <th className="p-2">Fecha</th>
              <th className="p-2 flex justify-center ">
                <p>Funciones</p>
                <img
                  src={IconoTooltip}
                  alt=""
                  className="h-5 pt-1 float-left cursor-pointer items-center"
                  data-bs-toggle="tooltip"
                  title="Por el momento no se puede editar ni ver el gasto unico. "
                />
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {gastos.length > 0 ? (
              gastos.map((gasto) => <Gasto key={gasto._id} gasto={gasto} />)
            ) : (
              <p className="my-5 text-center">
                No hay ningun gasto para mostrar
              </p>
            )}
          </tbody>
        </table>
      </div>

      <div className="max-w-4xl">
        <h3
          className={titlesStlyles}
          data-bs-toggle="tooltip"
          title="Caja Actual = Inicio Caja + Venta Efectivo - Gastos Efectivo"
        >
          Caja y Ventas Efectivo
        </h3>

        <div
          className={contenedorDivTitulos}
          data-bs-toggle="tooltip"
          title="Caja Actual = Inicio Caja + Ventas Efectivo - Gastos Efectivo"
        >
     
          <ListadoCaja />
        </div>

        <h3 className={titlesStlyles}>Gastos Hoy</h3>
        <div className={contenedorDivTitulos}>
        <div className={contenedorDivTitulos}>
          <CuadroGastos
            // img={diccionarioIConos.Comida}
            title="Gastos Comidas"
            valor={montoTotalGastosComida}
          />{" "}
          <CuadroGastos
            // img={diccionarioIConos.Proveedor}
            title="Gastos Proveedores"
            valor={montoTotalGastosProveedores}
          />
          <CuadroGastos
            // img={diccionarioIConos.Proveedor}
            title="Gastos Inventario"
            valor={montoTotalGastosInventario}
          />
          <CuadroGastos
            // img={diccionarioIConos.Gastos}
            title="Gastos"
            title2="Varios"
            valor={montoTotalGastosVarios}
          />
          </div>
        </div>
          
      </div>
      <div>
        <h3 className={titlesStlyles}>
          Gastos Semana
        </h3>
        <div className={contenedorDivTitulos}>
        <div className={contenedorDivTitulos}>
          <CuadroGastos
            // img={diccionarioIConos.Comida}
            title="Gastos Comidas"
            valor={montoTotalGastosComida}
          />{" "}
          <CuadroGastos
            // img={diccionarioIConos.Proveedor}
            title="Gastos Proveedores"
            valor={montoTotalGastosProveedores}
          />
          <CuadroGastos
            // img={diccionarioIConos.Gastos}
            title="Gastos"
            title2="Varios"
            valor={montoTotalGastosVarios}
            />
             <CuadroGastos
            // img={diccionarioIConos.Gastos}
            title="Gastos"
            title2="Varios"
            valor={montoTotalGastosInventario}
          />
        </div>
        </div>
        </div>
    </div>
  );
};

export default ListadoGastos;

     {/* <CuadroGastos
            img={IconoInicioCaja}
            title="Caja"
            title2="Actual"
            valor={
              inicioCaja +
              montoTotalVentasEfectivo -
              montoTotalGastosVarios -
              montoTotalGastosProveedores -
              montoTotalGastosComida -
              montoTotalGastosInventario
            }
          />
          <CuadroGastos
            img={inicioCaja}
            title="Inicio"
            title2="Caja"
            valor={
              inicioCaja +
              montoTotalVentasEfectivo -
              montoTotalGastosVarios -
              montoTotalGastosProveedores -
              montoTotalGastosComida -
              montoTotalGastosInventario
            }
          /> */}

          {/* Ventas Efectivo  */}
          {/* <CuadroGastos
            img={IconoInicioCaja}
            title="Total Gastos"
            title2=""
            valor={
              montoTotalGastosVarios +
              montoTotalGastosProveedores +
              montoTotalGastosComida +
              montoTotalGastosInventario
            }
          /> */}
