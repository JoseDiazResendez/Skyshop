export async function buscarItem({params}) {
    const objeto = params.objeto
    const response = await fetch(`http://localhost:3001/${objeto}`)
    const data = await response.json()

    return(data)
}