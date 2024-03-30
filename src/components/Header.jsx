import { useRef } from 'react';
import CartModal from './CartModal.jsx';
import {CartContext} from "../store/shopping-cart-context.jsx";
import DialogModel from "../components/DialogModel.jsx";
import {useContext} from "react";


export default function Header() {
  const modal = useRef();
  let dialog = useRef();

  function handleOpenCartClick() {
    modal.current.open();
  }

  function handleShowInfo(){
    dialog.current.open();
  }

  let {items} = useContext(CartContext);

  let modalActions = <button>Close</button>;

  if (items.length > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <DialogModel ref={dialog} buttonCaption={"Close"} titleCaption={"UnderDevelopment!"}></DialogModel>
      <CartModal
        ref={modal}        
        title="Your Cart"
        actions={modalActions}
      />
      <header id="main-header">
        <div id="main-title">          
          <img src="logo.png" alt="Elegant model" />
          <div className="title_description">
            <h1>ZORA SHOPPING</h1>   
            <p>Everything comes under a affordable price <span className="info-icon" onMouseOver={handleShowInfo}>&#9432;</span></p>
          </div>          
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({items.length})</button>
        </p>
      </header>
    </>
  );
}
