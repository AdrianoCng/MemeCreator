import logo from '../../img/memeFace.jpg';

const Header = () => {
	return (
		<div className="jumbotron d-flex justify-content-center align-items-center bg-white">
			<img src={logo} alt="logo" height="100px"/>
			<h1 className="mx-5">MemeCreator</h1>
		</div>
	)
};

export default Header;