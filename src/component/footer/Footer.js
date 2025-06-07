function Footer(props) {
    const { team } = props;
    const RandomNumber = () => {
		
		const randomIndex = Math.floor(Math.random() * team.length);
		const selectedMember = team[randomIndex];
		// alert(`Selected Member: ${selectedMember.name} from ${selectedMember.city}`);
		console.log(`Selected Member: ${selectedMember.name} from ${selectedMember.city}`);
		

		document.querySelector(' .ranButton').innerHTML = `Lucky Person: ${selectedMember.name} ${selectedMember.city}`;

	}
    return ( 
        <div className='selectingButton'>
				<h1><button className='ranButton'  onClick={RandomNumber} >Lucky Person</button></h1>
		</div>
     );
}

export default Footer;