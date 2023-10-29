const facebook = 'https://i.pinimg.com/originals/95/d1/63/95d16377f0820c48b9ad3e679d4aa3fe.png'
const instagram = 'https://static.vecteezy.com/system/resources/previews/017/743/718/original/instagram-icon-logo-free-png.png'
const twitter = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1245px-Logo_of_Twitter.svg.png'

export default function Footer() {
  return (
    <footer>
      <div >
        <span className="footerLink"><a className = "foot footerLink" href = "https://www.facebook.com/profile.php?id=61552776575260" >Facebook</a><img className='footerIcon' src={facebook} /></span>
        <span className="footerLink"><a className = "foot footerLink" href = "https://www.instagram.com/skyshop_page/">Instagram</a><img className='footerIcon' src={instagram} /></span>
        <span className="footerLink"><a className = "foot footerLink" href ="https://twitter.com/Skyshop273192">Twitter</a><img className='footerIcon' src={twitter} /></span>
      </div>
      <span className="privacity">La privacidad de sus datos personales es de gran importancia para la Universidad Autonoma de Ciudad Juárez, por lo que hacemos de su conocimiento nuestro Aviso de Privacidad.</span>
    </footer>
  )
}
