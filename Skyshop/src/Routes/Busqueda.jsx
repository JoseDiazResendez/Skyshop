import { useLoaderData } from "react-router-dom"

export function Busqueda() {
    let items = useLoaderData()

    return (
        items?.map(item => (
            <>
                <div className="bodyBuscar">
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
