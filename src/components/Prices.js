import React ,{useState,useEffect}from "react";
import Button from "react-bootstrap/esm/Button";
const Prices = (props) =>{
    const data = [{key:"1",dia:"mar 5/7 " , precio:"629 bs" },{key:"2",dia:"mie 6/7 " , precio:"546 Bs"},{key:"3",dia:"jue 7/7 " , precio:"489 Bs"},{key:"4",dia:"vie 8/7 " , precio:"559 Bs"},{key:"5",dia:"sab 9/7 " , precio:"499 Bs"}]
    const [selec,setSelec] = useState(null)
    const getDatos = (id) =>{
        let elemen = data.filter(element => element.key  == id);
        let res = elemen[0]
        setSelec(res)
    }
    return(
        <div className="contairner">
            <div class=" justify-content-center  row precios">
            {data.map(salida =><div class="col p-1">
                <Button class ="btn active" key={salida.key}
                onClick={()=> getDatos(salida.key)} 
                > 
                    <p>{salida.dia}</p>
                    <b>{salida.precio} </b> 
                
                </Button>
            </div> )}
           </div>
        </div>
           
        )
}

export default Prices