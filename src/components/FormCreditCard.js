import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from "formik";
import { Button } from "bootstrap";
export default class FormCreditCard extends React.Component{
    state = {
        cvv: '',
        expiry: '',
        focus: '',
        nombre: '',
        number: '',
      };
     
      handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
      }
      
      handleInputChange = (e) => {
        const { name, value } = e.target;
        
        this.setState({ [name]: value });
      } 
render(){
    return(
        <div class="card container" >
            <div class="card-body">
            <form >
                <div class="form-group ">
                    <input
                    class="form-control"
                    type="text"
                    name="number"
                    maxLength="16"
                    placeholder="Número de tarjeta de credito"
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                    ></input>
                </div>
                
                <div  class="row" >
                    <div class="col-md">
                        <label for="mes">Vencimiento</label>
                        <select name="mes"  class="form-control">
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
                        </select>
                       
                    </div>
                    <div class="col-md" >
                         <label for="año"> </label>
                        <select name="año" class="form-control" >
                                <option value="22">2022</option>
                                <option value="23">2023</option>
                                <option value="24">2024</option>
                                <option value="25">2025</option>
                                <option value="26">2026</option>

                            </select>
                    </div>
                   
                    <div class="col-md"  >
                        <label for="cvv "> CVV
                        </label>
                        <input
                        name="cvv"
                        type="text"
                        maxLength="4"
                        class="form-control"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                        
                        >
                            
                        </input>
                    
                    </div>
                    
                </div>
                <divi class="form-group " >
                    <label for="Nombre">Nombre</label>
                    <input
                    type="text"
                    name="Nombre"
                    class="form-control"
                    placeholder=""
                    onChange={this.handleInputChange}
                    >
                    
                </input>
                </divi>
                <divi class="form-group ">
                    <label for="Apellido">Apellido</label>
                    <input
                    type="text"
                    name="Apellido"
                    class="form-control"
                    placeholder=""
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                    >
                </input>
                </divi>
                
           
                
                
            </form>   
            </div>
            <div class="mx-auto">
                <button type="button" class="btn btn-primary btn-lg btn-block ">Pagar</button>
            </div>
        </div>
    )
}    
}