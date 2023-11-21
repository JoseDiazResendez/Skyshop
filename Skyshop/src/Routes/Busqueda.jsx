import { useLoaderData } from "react-router-dom"
import './search.css'

export function Busqueda() {
    let items = useLoaderData()
    
    

    return ( 
        items?.map(item => ( 
            <>
                <div className="bodyBuscar">
                    <div class="ad" > <a href = "https://www.callofduty.com/playnow/modernwarfare3?utm_source=webedia&utm_medium=paid&utm_campaign=brand"><img src="https://i.gyazo.com/ea212af7c28f3161b20434c31315e843.png" class = "mw3" /></a></div>
                    <ul key={item.titleItem} className="containerBuscar">
                        <div className="displayer">
                            <h2 className="no-pad">{item.titleItem}</h2>
                            <h1 className="no-pad">{item.priceItem}</h1>
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <h3 className="no-pad">Valoracion: {item.rateItem}</h3>
                                <h3 className="no-pad"><a href={item.urlItem} rel='noreferrer' target='_blank'>Ver en tienda...</a></h3>
                            </div>
                        </div>
                        <img src={item.imgItem} alt="producto" className="imgBuscar" />
                    </ul>
                </div>
                <div style={{marginBottom: "2rem"}}></div>
            </>
        ))
    )
}
