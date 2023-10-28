import { Link } from "react-router-dom";

const image = 'data:image/jpeg;base64,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';

export default function Header() {
  return (
    <header className='header'>
        <div className='title'>
            <img src={image} height={50} width={50} />
            <h1>Skyshop</h1>
        </div>
        <nav className='nav'>
            <ul className='ul'>
                <li className='li'><Link to= "/">Home</Link></li>
                <li className='li'><Link to = "Nosotros">Text2</Link></li>
                <li className='li'><Link to = "Soporte">Text3</Link></li>
            </ul>
        </nav>
    </header>
  )
}
