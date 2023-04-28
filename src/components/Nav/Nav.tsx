import logo from '../../assets/logo.svg'

export default function Nav() {
	return (
		<nav className={"bg-primary text-white flex justify-between items-center h-[90px]"}>
			<img src={logo} className="ml-30" alt="logo" />
			<ul className={"flex w-[80%] justify-around text-2xl font-medium"}>
				<li>Accueil</li>
				<li>Profil</li>
				<li>Réglage</li>
				<li>Communauté</li>
			</ul>
		</nav>
	)
}