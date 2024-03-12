import '../styles/Footer.css'



function Footer(props) {
    // const placeholder = 'Entrez votre mail';
    
    return <div className="footer">
        <p className='plante'>{props.h1}</p>
        <h3 className='plante'>{props.h2}</h3>
        <input type="mail"   placeholder="Entrez votre mail"  className="input " />

        
    </div>
}

export default Footer