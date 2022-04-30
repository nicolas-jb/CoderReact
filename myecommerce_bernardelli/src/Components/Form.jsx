/* eslint-disable no-useless-escape */
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import ItemStyle from "./Form.module.css";
import { cartContext } from "../Context/CartContext";
import { saveOrder } from "../utils/ApiResponse.js";
import ModalComponent from "./ModalComponent";

export default function Form({ onClose }) {
  const { getCart, getTotalPrice } = useContext(cartContext);

  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");

  const handleModalView = (show) => {
    setShowModal(show);
    if (!show) onClose();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const order = {
      buyer: data,
      items: getCart().map((p) => {
        return {
          id: p.id,
          title: p.title,
          price: p.price,
          quantity: p.quantity,
        };
      }),
      total: getTotalPrice(),
    };

    const orderId = await saveOrder(order);
    handleModalView(true);

    if (orderId) {
      setModalText(
        `Felicitaciones ${
          order.buyer.name.split(" ")[0]
        }! La orden ${orderId} por ${getTotalPrice().toLocaleString("es-AR", {
          style: "currency",
          currency: "ARS",
        })} ya fue reservada. En instantes se comunicará un representante para que pueda finalizar la compra. Muchas gracias por confiar en Berna App `
      );
    } else {
      setModalText(
        "Se produjo un error. En unos instantes un agente se comunicará con ud. Lamentamos lo sucedido."
      );
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={ItemStyle.formBody}>
        <label>Nombre</label>
        <input
          {...register("name", {
            required: true,
            maxLength: 20,
            pattern: /^[a-z ,.'-]+$/i,
          })}
        />
        {errors?.name?.type === "required" && <p>Este campo es obligatorio</p>}
        {errors?.name?.type === "maxLength" && (
          <p>El largo del nombre no puede superar los 20 caracteres</p>
        )}
        {errors?.name?.type === "pattern" && (
          <p>Por favor completar solamente con caracteres alfabéticos</p>
        )}
        <label>Teléfono</label>
        <input
          {...register("phone", {
            required: true,
            pattern:
              /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
            minLength: 14,
            maxLength: 20,
          })}
        />
        {errors?.phone?.type === "required" && <p>Este campo es obligatorio</p>}
        {errors?.phone?.type === "pattern" && (
          <p>El teléfono cargado no es válido</p>
        )}
        {errors?.phone?.type === "minLength" && (
          <p>El largo del teléfono no es válido</p>
        )}
        {errors?.phone?.type === "maxLength" && (
          <p>El largo del teléfono no es válido</p>
        )}
        <label>Email</label>
        <input
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
          })}
        />
        {errors?.email?.type === "required" && <p>Este campo es obligatorio</p>}
        {errors.email?.type === "pattern" && (
          <p>El mail cargado no es válido</p>
        )}
        <input type="submit" />
      </form>
      {showModal && (
        <ModalComponent content={modalText} onChange={handleModalView} />
      )}
    </>
  );
}
