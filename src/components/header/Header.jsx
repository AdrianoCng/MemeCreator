import logo from '../../img/memeFace.jpg';

const Header = () => {
	return (
		<div className="d-flex justify-content-center align-items-center bg-white my-3">
			<img src={logo} alt="logo" height="100px"/>
		</div>
	)
};

export default Header;