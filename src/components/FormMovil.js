
import React ,{useState}from "react";
import captcha from "../img/captcha.jpg"

const  FormMovil = ()=>{
    
    return(
        <div class="card container m-5">
            <div class="card-body">
                <form >
                    <div clas="form-group">
                        <label for="Linea"> Linea</label>
                        <input 
                        name="Linea"
                        type = "text"
                        class = "form-control"
                        placeholder = "Numero de la linea"
                        >
                        
                        </input>
                    
                    </div>
                    <div clas="form-group">
                        <label for="nombre"> Nombre Completo</label>
                        <input 
                        name="nombre"
                        type = "text"
                        class = "form-control"
                        placeholder = "Nombre del abonado"
                        >
                        </input>                
                    </div>
                    <div clas="form-group">
                        <label for="numero"> Número</label>
                        <input 
                        name="numero"
                        type = "text"
                        class = "form-control"
                        placeholder = "Número del abonado"
                        >
                        </input>                
                    </div>
                    <div class="row"> 
                        <div clas="col col-lg-2 form-group">
                            <p > Ingrese los caracteres que aparecen en la imagen:</p>
                            <div class="d-flex justify-content-center">
                            <img src= {captcha} clas ="img-fluid mx-auto " ></img>
                            </div>
                            <label for="capt"> </label>
                            <input 
                            name="capt"
                            type = "text"
                            class = "form-control"
                            placeholder = ""
                            >
                            </input>                
                        </div>

                    </div>
                    
                    <div class="d-flex justify-content-center p-2">
                            <button type="button" class="btn btn-primary btn-lg btn-block  ">Pagar</button>
                     </div>
                </form>
                
            </div>
        
        
        </div>

    )
}
export default FormMovil