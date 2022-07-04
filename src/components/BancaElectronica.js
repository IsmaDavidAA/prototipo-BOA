import React from "react";
import bancounionnew from "../img/bancounionnew.png"
import economico from "../img/economico.png"
import bnb from "../img/bnb.jpg"
import bcp from "../img/bcp.png"
import Bisa from "../img/Bisa.png"
import eco from "../img/eco.png"
import msc from "../img/msc.png"
import prodem from "../img/prodem.png"
import  comunidad from "../img/comunidad.jpg"
export default class BancaElectronica extends React.Component{
    render(){
        return(
            <div clas="card p-2 m-3 ">
                <div class="card-body ">
                    <div class="container ">
                            <div class="row">
                            <div class="col">
                                <a href="https://uninetplus.bancounion.com.bo/Uninetplus/Account/Login"  target="_blank">
                                    <img src={bancounionnew} class=" imagen img-fluid"></img>
                                </a>
                            </div>
                            <div class="col">
                                <a  href="https://ebank.baneco.com.bo/ebank/"  target="_blank">
                                            <img src= {economico} class=" imagen img-fluid"></img>
                                    </a>
                            </div>
                                
                            <div class="col">
                                <a href="https://www.bnb.com.bo/BNBNet/IniciarSesion/IniciarIdentificador"  target="_blank">
                                            <img src={bnb} class=" imagen img-fluid"></img> 
                                    </a>
                            </div>
                                
                         </div>
                     <div class="row">
                            <div class="col">
                                <a href="https://www.bcp.com.bo/ibk2/Account/Login"  target="_blank">
                                <img src={bcp} class="img-fluid imagen"></img>
                                </a>
                            </div>
                                
                            <div class="col">
                                <a href="https://ebisaplus.bisa.com/BISA.UI/?version=6.6.1.7.0#/administrationGeneral/login"  target="_blank">
                                <img src={Bisa} class="img-fluid imagen"></img>
                                </a>
                            </div>
                                
                            <div class="col">
                                <a href="https://econet.bancoecofuturo.com.bo:447/EconetWeb"  target="_blank">
                                <img src={eco} class="img-fluid imagen"></img>  
                                </a>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col">
                                <a href="https://comunet.bco.com.bo/Administration.WebUI/Pages/General/Login.aspx?ReturnUrl=%2f&_ga=2.81002708.2145934115.1656209340-64729889.1656209340"  target="_blank">
                                <img src={comunidad} class="img-fluid imagen"></img>
                                </a>
                            </div>
                            <div class="col">
                                <a href="https://bnet.bmsc.com.bo/BMSC.ICBanking.WebUI/Administration.WebUI/Pages/General/Login.aspx?ReturnUrl=%2fBMSC.ICBanking.WebUI%2f"  target="_blank">
                                <img src={msc} class="img-fluid imagen"></img>
                                </a>
                            </div>
                            
                            <div class="col">
                                <a href="https://prodemnet.prodem.bo/login"  target="_blank">
                                <img src={prodem} class="img-fluid imagen"></img>
                                </a>
                            </div>
                        </div> 
                        </div>
                    
                </div>
              
                    
             </div>
        )
    }



}