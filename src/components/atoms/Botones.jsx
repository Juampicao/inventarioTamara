import React from "react";
import { useNavigate } from "react-router-dom";

export const BotonPrincipal = ({ value, onClick }) => {
  // Styles
  const BotonStyle =
    "bg-black hover:bg-white hover:text-black hover:border hover:border-black text-white px-2 py-3 w-full mx-auto uppercase text-xs  font-bold uppercase cursor-pointer hover:scale-x-105 hover:duration-150 duration-150 ";
  const SecondaryStyle = "";
  const BotonEliminarStyle = "bg-red-500 rounded-lg";
  const Tamaño = "";
  return (
    <>
      <input
        type="submit"
        className={`${BotonStyle}${SecondaryStyle}`}
        value={value}
        onClick={onClick}
      />
    </>
  );
};

export const BotonSecundario = ({ onClick, value }) => {
  return (
    <>
      <input
        type="submit"
        className="border-slate-500 border px-3 py-2 hover:bg-blue-700 hover:text-white uppercase cursor-pointer font-medium
      text-xs
      leading-tight"
        onClick={onClick}
        value={value}
      />
    </>
  );
};

export const BotonVer = ({ value, onClick }) => {
  const navigate = useNavigate();

  return (
    <>
      <input
        type="button"
        className="bg-yellow-500 hover:bg-yellow-600 block mx-auto w-[75px]  text-white p-2 uppercase font-bold text-xs  cursor-pointer "
        onClick={onClick}
        value={value}
      />
    </>
  );
};

export const BotonEliminar = ({ value, onClick }) => {
  return (
    <>
      <input
        type="submit"
        className="bg-red-600 hover:bg-red-700 block mx-auto w-[75px] text-white p-2 uppercase font-bold text-xs  cursor-pointer"
        onClick={onClick}
        value={value}
      />
    </>
  );
};

export const BotonEditar = ({ value, onClick }) => {
  return (
    <>
      <input
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 block mx-auto w-[75px]  text-white p-2 uppercase font-bold text-xs  cursor-pointer"
        onClick={onClick}
        value={value}
      />
    </>
  );
};

export const BotonNuevoProducto = ({ value, onClick }) => {
  return (
    <>
      <input
        type="submit"
        onClick={onClick}
        className="cursor-pointer border  border-slate-500 border-2 px-5 py-2 font-bold duration-200 ease-in-out  transition-all hover:bg-green-900 hover:text-white active:bg-green-700"
        value={value}
      />
    </>
  );
};

export const BotonNuevaVenta = ({ value, onClick }) => {
  return (
    <>
      <input
        type="submit"
        className="cursor-pointer border bg-slate-500 text-white border-slate-500 border-2 px-5 py-2 font-bold duration-200 ease-in-out  transition-all hover:bg-green-900 hover:text-white active:bg-green-700"
        onClick={onClick}
        value={value}
      />
    </>
  );
};

export default {
  BotonPrincipal,
  BotonSecundario,
  BotonEliminar,
  BotonNuevoProducto,
  BotonNuevaVenta,
  BotonVer,
};
