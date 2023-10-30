const facebook = 'https://i.pinimg.com/originals/95/d1/63/95d16377f0820c48b9ad3e679d4aa3fe.png'
const instagram = 'https://static.vecteezy.com/system/resources/previews/017/743/718/original/instagram-icon-logo-free-png.png'
const twitter = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1245px-Logo_of_Twitter.svg.png'

export default function Footer() {
  return (
    <footer>
      <div >
        <span className="footerLink"><a className = "foot footerLink" href = "https://www.facebook.com/profile.php?id=61552776575260" rel='noreferrer' target='_blank'>Facebook<img className='footerIcon' src={facebook} /></a></span>
        <span className="footerLink"><a className = "foot footerLink" href = "https://www.instagram.com/skyshop_page/" rel='noreferrer' target='_blank'>Instagram<img className='footerIcon' src={instagram} /></a></span>
        <span className="footerLink"><a className = "foot footerLink" href ="https://twitter.com/Skyshop273192" rel='noreferrer' target='_blank'>Twitter<img className='footerIcon' src={twitter} /></a></span>
      </div>
      <span className="privacity">La privacidad de sus datos personales es de gran importancia para la Universidad Autonoma de Ciudad Juárez, por lo que hacemos de su conocimiento nuestro Aviso de Privacidad.</span>
    </footer>
  )
}
