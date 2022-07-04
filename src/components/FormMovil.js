
import React from "react";
import captcha from "../img/captcha.jpg"
import { withFormik, Field, ErrorMessage, Form } from "formik";


const  FormMovil = (props)=>{
    const{ isSubmitting,isValid,modal}=props;
   
    return(
        <div class="card p-2 m-3 border-0 ">
            <div class="card-body">
                <Form class="pr-3" >
                    <div clas="form-group m-2">
                        <label for="linea"> <b>linea</b></label>
                        <Field 
                        name="linea"
                        type = "text"
                        class = "form-control"
                        placeholder = "Numero de la linea"

                        />
                      <ErrorMessage name="linea" >
                        {message => <div class="alert alert-warning">{message}</div>}
                      </ErrorMessage>
                    </div>
                   
                    <div clas="form-group m-2">
                        <label for="nombre"> <b>Nombre Completo</b></label>
                        <Field 
                        name="nombre"
                        type = "text"
                        class = "form-control"
                        placeholder = "Nombre del abonado"

                        />
                        <ErrorMessage name="nombre" >
                        {message => <div class="alert alert-warning">{message}</div>}
                      </ErrorMessage>         
                    </div>
                    <div clas="form-group m-2">
                        <label for="numero"> <b>Nro. Documento</b></label>
                        <Field 
                        name="numero"
                        type = "text"
                        class = "form-control"
                        placeholder = "Número del abonado"
                    
                        />
                          <ErrorMessage name="numero" >
                        {message => <div class="alert alert-warning">{message}</div>}
                      </ErrorMessage>           
                    </div>
                    <div class="row"> 
                        <div clas="col col-lg-2 form-group m-2">
                            <b> Ingrese los caracteres que aparecen en la imagen:</b>
                            <div class="d-flex justify-content-center">
                            <img src= {captcha} clas ="img-fluid mx-auto " ></img>
                            </div>
                            <label for="capt"> </label>
                            <Field 
                            name="capt"
                            type = "text"
                            class = "form-control"
                            placeholder = ""
                      
                            />
                              <ErrorMessage name="capt" >
                        {message => <div class="alert alert-warning">{message}</div>}
                      </ErrorMessage>              
                        </div>

                    </div>
                    
                    <div class="d-flex justify-content-center p-2">
                            <button type="submit" class="btn btn-primary btn-lg btn-block submit ${isSubmitting || !isValid ? 'disabled' : ''} " disabled={isSubmitting || !isValid} >Pagar</button>
                     </div>
                </Form>
              
            </div>
        
        
        </div>
        
    )
}
export default  withFormik({
    mapPropsToValues(props){
        return{
            linea: "",
            nombre: "",
            numero: "",
            capt: ""

        }
    },
    validate(values){
        const errors = {}
        
        if(!values.linea){
            errors.linea ="El  numero de linea es necesario"
            
        }else if(values.linea.length < 8 ||  values.linea.length > 8){
            errors.linea ="La linea debe tener 8 numeros"
   
        }if(!(/^([0-9])*$/.test(values.linea))){
            errors.linea = "La linea solo puede contener numeros"
        }
        if(!values.nombre){
            errors.nombre ="El nombre del abonado es necesario"
        }else if(!(/^[a-z ñ.áéíóúäëïöü\'-]*$/.test(values.nombre))){
            errors.nombre = "Ingrese un nombre de abonado valido"
        }else if(values.nombre.length < 5){
            errors.nombre="Ingrese un nombre de abonado valido"
        }
        if(!values.numero){
            errors.numero ="El  numero de documento es necesario"
            
        }else if(values.numero.length < 7 ){
            errors.numero ="Ingrese un numero de carnet valido"
   
        }
        if(!(/^([0-9])*$/.test(values.numero))){
            errors.numero = "Ingrese un numero de carnet valido"
        }
        if(!values.capt){
            errors.capt ="Por favro ingrese las letras de la imagen"
            
        }else if(values.capt != "qGphJD"){
            
            errors.capt ="Error en captcha"
            
        }
    
    return errors
    
    },
    handleSubmit(values,formikBag){
       
        console.log(values);
        formikBag.setSubmitting(false)
       return(
        alert("Tu pago se esta procesando, gracias por utilizar los servicios!!!")
       )
        
    }
}) (FormMovil)