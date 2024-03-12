import '../styles/Cart.css'


function Cart(props) {
	
return (
		<div className="lmj-cart">
			<h2>{props.title}</h2>
			{props.children}
			
		</div>
	)
}

export default Cart