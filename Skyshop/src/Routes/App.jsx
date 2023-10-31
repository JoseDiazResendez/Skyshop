import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function App() {
    const inputRef = useRef()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    async function buscarObjeto() {
        const objeto = inputRef.current.value
        setIsLoading(true)
        navigate(`/Busqueda/${objeto}`)
    }

    return (
        <main style={{ height: "80vh" }}>
            {!isLoading ? <> <h3 className="search">
                <input className='container' placeholder='Que deseas buscar' ref={inputRef} />
                <button onClick={buscarObjeto} className="buscar">Buscar</button>
            </h3>
                <div className='video'>
                    <iframe width="900" height="500" src="https://www.youtube.com/embed/widZEAJc0QM?si=DBs9DRAwSolkRosr" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <h3 className="text">TODO LO QUE NECESITAS EN UN SOLO LUGAR</h3>
            </> :
                <div className="loader-container">
                    <span className="loader"></span>
                    <span style={{color: "#333", fontWeight: "bold", fontSize: "24px"}}>SERCHing</span>
                </div>}
        </main>
    )
}