import React,{useState} from "react";
import useGlobal from "../hooks/useGlobal";
import FormCreditCard from "../components/FormCreditCard";
import BancaElectronica from "../components/BancaElectronica";
import FormMovil from "../components/FormMovil";
import PagoQR from "../components/PagoQR";

export default function Pagar() {
  const { userDef, setUserDef } = useGlobal();
  const [tarjeta,setTarjeta] = useState(true)
  const [banca,setBanca] = useState(false)
  const [qr,setQr] = useState(false)
  const [movil,setMovi] = useState(false)
  const tarjetaTrue = () =>{
    setTarjeta(true)
    setBanca(false)
    setQr(false)
    setMovi(false)
    
  }
  const bancaTrue = () =>{
    setTarjeta(false)
    setBanca(true)
    setQr(false)
    setMovi(false)
    
  }
  const qrTrue = () =>{
    setTarjeta(false)
    setBanca(false)
    setQr(true)
    setMovi(false)
    
  }
  const movilTrue = () =>{
    setTarjeta(false)
    setBanca(false)
    setQr(false)
    setMovi(true)
    
  }
  return (

    <div class="container">
      <h1>Pagar</h1>
        <div class="card border-0 d-flex justify-content-center "> 
          <div class="card-title mx-auto">
              <h3>Codigo de reserva</h3>
                <div class="card-body   ">
                  <h4 class="px-md-5">XRG11</h4>
                </div>
          </div>
        <div class="card p-2 m-3">
          <div class="card-title">
            <p>Datos de facturacion</p>
          </div>
          <div class="card-body">
            <form >
              <div class="form-group  d-inline d-flex">
                
                  <label for="Razon" class="d-bloclk">Razon Social </label>
                  <input class="form-control m-3" type="text" name="Razon"></input>
                  <label for="Razon" class="d-bloclk">NIT </label>
                  <input class="form-control m-3" type="text" name="NIT"></input>
              </div>
              <div class="custom-control custom-checkbox justify-content-center ">
                <input type="checkbox" class="custom-control-input mx-3 " id="customCheck1" required></input>
                <label class="custom-control-label" for="customCheck1"> He leido y acepto los <a href="https://www.ticketsbolivia.com.bo/assets/js/lib/pdf/condiciones.pdf" target="_blank">términos y condiciones</a></label>
                
              </div>
            </form>
          </div>
         </div>
        </div>
        <div class="container  justify-content-center pt-2 pl-5 pr-5 ">
          <div class=" container" >
          
              <div class="row">
                  <div class="col">
                  <button type="button" onClick={()=>tarjetaTrue()} class="btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-credit-card m-2" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
                    <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
                  </svg>
                  <b>Tarjeta</b>
                  </button>
                </div>
                <div class="col">
                <button type="button" class="btn" onClick={()=>bancaTrue()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-ban m-2" viewBox="0 0 16 16">
                <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 6v7h1V6H2Zm2 0v7h2.5V6H4Zm3.5 0v7h1V6h-1Zm2 0v7H12V6H9.5ZM13 6v7h1V6h-1Zm2-1V4H1v1h14Zm-.39 9H1.39l-.25 1h13.72l-.25-1Z"/>
                </svg>
                  <b>Banca Electrónica</b>
                  </button>
                </div>
                <div class="col">
                <button type="button" class="btn" onClick={()=>qrTrue()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-qr-code-scan m-2" viewBox="0 0 16 16">
                      <path d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0v-3Zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5ZM.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5ZM4 4h1v1H4V4Z"/>
                      <path d="M7 2H2v5h5V2ZM3 3h3v3H3V3Zm2 8H4v1h1v-1Z"/>
                      <path d="M7 9H2v5h5V9Zm-4 1h3v3H3v-3Zm8-6h1v1h-1V4Z"/>
                      <path d="M9 2h5v5H9V2Zm1 1v3h3V3h-3ZM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8H8Zm2 2H9V9h1v1Zm4 2h-1v1h-2v1h3v-2Zm-4 2v-1H8v1h2Z"/>
                      <path d="M12 9h2V8h-2v1Z"/>
                    </svg>
                      <b>Pago QR</b>
                  </button>
                </div>
                <div class="col">
                  <button type="button" class="btn" onClick={()=>movilTrue()}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-phone-fill m-2" viewBox="0 0 16 16">
                      <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>
                  </svg>
                      <b>Billetera Móvil</b>
                    </button>
                </div>
            </div>
                    </div>
          <div>
            {tarjeta && <FormCreditCard/>}
            {banca && <BancaElectronica/>}
            {qr && <PagoQR/>}
            {movil &&  <FormMovil/> }
          </div>
        
        
      
        
        </div>
        
      
    </div>
  );
}
