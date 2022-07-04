import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Field,withFormik, ErrorMessage } from "formik";


const FormCreditCard = (props)=>{
    const{ isSubmitting,isValid}=props;
      

    return(
        <div class="card p-2 m-3 border-0" >
            <div class="card-body ">
            <Form >
                <div class="form-group ">
                    <Field
                    class="form-control"
                    type="text"
                    name="number"
                    pattern="[0-9]{0,16}"
                    placeholder="Número de tarjeta de credito"
                    ></Field>
                    <ErrorMessage name="number" >
                        {message => <div class="alert alert-warning">{message}</div>}
                      </ErrorMessage>
                </div>
                
                <div  class="row" >
                    <div class="col-md">
                        <label for="mes"><b>Vencimiento</b></label>
                        <Field as="select" name="mes"  class="form-control">
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                            <option value="4">04</option>
                            <option value="5">05</option>
                            <option value="6">06</option>
                            <option value="7">07</option>
                            <option value="8">08</option>
                            <option value="9">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </Field>
                        
                    </div>
                    <div class="col-md" >
                         <label for="año"> </label>
                        <Field as="select" name="año" class="form-control" >
                                <option value="22">2022</option>
                                <option value="23">2023</option>
                                <option value="24">2024</option>
                                <option value="25">2025</option>
                                <option value="26">2026</option>

                            </Field>
                    </div>
                   
                    <div class="col-md"  >
                        <label for="cvv"> <b>CVV</b> 
                        </label>
                        <Field
                        name="cvv"
                        type="text"
                        maxLength="4"
                        class="form-control"

                        
                        >
                            
                        </Field>
                        <ErrorMessage name="cvv" >
                        {message => <div class="alert alert-warning">{message}</div>}
                      </ErrorMessage>
                    </div>
                    
                </div>
                <divi class="form-group " >
                    <label for="nombre"><b>Nombre</b></label>
                    <Field
                    type="text"
                    name="nombre"
                    class="form-control"
                    placeholder=""

                    >
                    
                </Field>
                <ErrorMessage name="nombre" >
                        {message => <div class="alert alert-warning">{message}</div>}
                      </ErrorMessage>
                </divi>
                <divi class="form-group p-2 ">
                    <label for="apellido"><b>Apellido</b></label>
                    <Field
                    type="text"
                    name="apellido"
                    class="form-control"
                    placeholder=""

                    >
                </Field>
                <ErrorMessage name="apellido" >
                        {message => <div class="alert alert-warning">{message}</div>}
                      </ErrorMessage>
                </divi>
                <div class="d-flex justify-content-center p-2-auto">
                <button type="submit" class="btn btn-primary btn-lg btn-block submit ${isSubmitting || !isValid ? 'disabled' : ''} " disabled={isSubmitting || !isValid} >Pagar</button>
            </div>
            </Form>   
            </div>
            
        </div>
    )
   
}
export default withFormik({
    mapPropsToValues(props){
        return{
            number: "",
            mes: "1",
            año: "22",
            cvv: "",
            nombre: "",
            apellido:""

        }
    },validate(values){
        const errors = {}
        
        if(!values.number){
            errors.number ="El  numero de tarjeta es necesario"
            
        }else if(values.number.length < 15 ||  values.number.length > 16){
            errors.number ="Ingrese un numero de tarjeta valido"
   
        }if(!(/^([0-9])*$/.test(values.number))){
            errors.number = "Ingrese un numero de tarjeta valido"
        }
        if(!values.nombre){
            errors.nombre ="El nombre del  propietario de la tajeta  es necesario"
        }else if(!(/^[a-z ñ.áéíóúäëïöü\'-]*$/.test(values.nombre))){
            errors.nombre = "Ingrese un nombre  valido"
        }else if(values.nombre.length < 3){
            errors.nombre="Ingrese un nombre  valido"
        }
        if(!values.cvv){
            errors.cvv ="El  numero cvv de la terjeta es necesario"
            
        }else if(values.cvv.length < 3){
            errors.cvv ="Ingrese un numero de cvv  valido"
   
        }if(!(/^([0-9])*$/.test(values.cvv))){
            errors.cvv = "Ingrese un numero de cvv  valido"
        }
        if(!values.apellido){
            errors.apellido ="El apellido del  propietario de la tajeta  es necesario"
        }else if(!(/^[a-z ñ.áéíóúäëïöü\'-]*$/.test(values.apellido))){
            errors.apellido = "Ingrese un apellido  valido"
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
}) (FormCreditCard)