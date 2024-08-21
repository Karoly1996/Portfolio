import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

export const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>Im Karoly Nemeth,</span> Software Developer based in Canada</h1>
      <p>Software developer specializing in front-end and back-end solutions. Passionate about tech and problem-solving.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>

    </div>
  )
}
