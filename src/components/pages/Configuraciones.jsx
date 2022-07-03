import React, { useContext } from "react";
import Iconos from "../atoms/Iconos";
import Header from "../molecules/Header";

import StaticContext from "../../contexts/StaticProvider";
import { ModalGuardado } from "../atoms/ModalNotificacion";
import VerVenta from "../molecules/ventas/VerVenta";
import FormularioGasto from "../molecules/gastos/FormularioGasto";
import { useModal } from "../../hooks/useModal";

const Configuraciones = () => {
  const { isOpenEdit, setIsOpenEdit } = useContext(StaticContext);

  return (
    <div>
      <Header title="Configuracion" />
      <p>Pagina en Construccion</p>
      {isOpenEdit ? (
        <ModalGuardado
          titleModal="Guardado!"
          subtitleModal="Puedes ver los cambios en el Listado."
          buttonLabel="Ir al listado"
          // handleClick={handleModalClick}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Configuraciones;
