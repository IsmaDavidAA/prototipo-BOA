import React from "react";
import bancounionnew from "../img/bancounionnew.png"
import economico from "../img/economico.png"
import bnb from "../img/bnb.jpg"
export default class BancaElectronica extends React.Component{
    render(){
        return(
            <div clas="card container">
                <div class="card-body">
                    <div class="container">
                            <div class="row">
                            <div class="col-sm">
                                <a href="https://uninetplus.bancounion.com.bo/Uninetplus/Account/Login">
                                    <img src={bancounionnew} class="img-fluid"></img>
                                </a>
                            </div>
                            <div class="col-sm"></div>
                                <a  href="https://ebank.baneco.com.bo/ebank/">
                                        <img src= {economico} class="img-fluid"></img>
                                </a>
                            <div class="col-sm"></div>
                                <a href="https://www.bnb.com.bo/BNBNet/IniciarSesion/IniciarIdentificador">
                                        <img src={bnb} class="img-fluid"></img>
                                    
                                </a>
                         </div>
                     <div class="row">
                            <div class="col">
                                <a href="https://www.bcp.com.bo/ibk2/Account/Login">
                                <img src="" class="img-fluid"></img>
                                </a>
                            </div>
                                
                            <div class="col">
                                <a href="https://ebisaplus.bisa.com/BISA.UI/?version=6.6.1.7.0#/administrationGeneral/login"></a>
                            </div>
                                
                            <div class="col">
                                <a href="https://econet.bancoecofuturo.com.bo:447/EconetWeb"></a>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col">
                                <a href="https://comunet.bco.com.bo/Administration.WebUI/Pages/General/Login.aspx?ReturnUrl=%2f&_ga=2.81002708.2145934115.1656209340-64729889.1656209340"></a>
                            </div>
                            <div class="col">
                                <a href="https://bnet.bmsc.com.bo/BMSC.ICBanking.WebUI/Administration.WebUI/Pages/General/Login.aspx?ReturnUrl=%2fBMSC.ICBanking.WebUI%2f"></a>
                            </div>
                            
                            <div class="col">
                                <a href="https://prodemnet.prodem.bo/login"></a>
                            </div>
                        </div> 
                        </div>
                    
                </div>
              
                    
             </div>
        )
    }



}