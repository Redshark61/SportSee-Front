import className from './style.module.css'

export default function Loader() {
	return <div className={`${className['lds-roller']}`}>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
}