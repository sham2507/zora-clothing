import {createPortal} from "react-dom";
import {forwardRef} from "react";
import {useImperativeHandle} from "react";
import {useRef} from "react";

let DialogModel = forwardRef(function DialogModel({titleCaption,buttonCaption},ref){

    let dialog = useRef();

    useImperativeHandle(ref,() =>{
        return{            
            open(){
                dialog.current.showModal();
            }
        };
    });

    return createPortal(
    <dialog className="info" ref={dialog}>
        <h2>{titleCaption}</h2>
        <p>Hello Customers, this website is under development and soon more updates on this website will be implemented, please bare with us.</p>        
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>,
    document.querySelector("#modal")
);
});

export default DialogModel;

