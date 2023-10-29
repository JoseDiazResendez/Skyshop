import { Link } from 'react-router-dom';

const image = 'https://scontent.fcjs4-1.fna.fbcdn.net/v/t1.15752-9/384195907_697212241842952_4261141029124665149_n.png?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeH7rP_I2oGEs0nUbscLG73Lo7G5rSjQ6bCjsbmtKNDpsCvsJJd0jI3izynrVuOp3ddSvjDk3Lfa5PL0WW3dIJrP&_nc_ohc=9aaslIkic88AX_TcceT&_nc_ht=scontent.fcjs4-1.fna&oh=03_AdTFnAa6cw3m4SHIrIorTAYqsYKkffjAAVhVXd55SI8OUQ&oe=65655873';

export default function Header() {
  return (
    <header className='header'>
        <div className='title'>
            <img src={image} height={65} width={65} />
            <h1><Link to='/' className='link'>Skyshop</Link></h1>
        </div>
        <nav className='nav'>
            <ul className='ul'>
                <li><Link to= '/' className='link li'>Home</Link></li>
                <li><Link to = 'Nosotros' className='link li'>Nosotros</Link></li>
                <li><Link to = 'Soporte' className='link li'>Contactanos</Link></li>
            </ul>
        </nav>
    </header>
  )
}
