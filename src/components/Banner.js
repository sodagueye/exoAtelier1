import '../styles/Banner.css'



function Banner(props) {
  
    return (<div className="lmj-banner">
        <img src={props.logo} alt='La maison jungle' className='lmj-logo' />
    <h1 className='lmj-title'>{props.title}</h1>
    <p>{props.nom}</p>
    </div>)
}

export default Banner