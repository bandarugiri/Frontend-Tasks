// import logo from './logo.svg';
import './App.css';
import { Member } from './component/member/Member';
import AboutUs from './component/aboutus/About-us';
import './App.css';
import Header from './component/header/Header';
import MembersList from './component/membersList/MembersList';
import Section from './component/section/Section';
// import Header from './component/header/header';

function App() {
	 const team = [
	{name: "Karthik" , city: "kuppam"},
	{name: "BGP" , city: "Tadipatri"},
	{name: "Tirupathi" , city: "Gurrapushala"},
	{name: "Nandheesh" , city: "kinchempalle"},
	{name: "Chandu" , city: "Venkatagiri"},
	{name: "Ashok" , city: "Tadipatri"},
	{name: "Nageshwar Reddy", city: "Tadipatri"},
	{name: "Mahesh" , city: "Tadipatri"},
	{name: "Akula Siva" , city: "Yerraguntapalli"},
	{name: "Govardan" , city: "Yerraguntapali"},
	{name: "Anji" , city: "Sajjaladinne"},
	{name: "Zakeer Bhasha" , city: "Tadipatri"},
	{name: "Pavan " , city: "Thalapula"},
	{name: "Venkatesh" , city: "Yadiki"},
	{name: "Trivikram" , city: "Tadipatri"},
	{name: "BabaZubed" , city: "Tadipatri"},
	{name: "Yashodha" , city: "Tadipatri"},
	{name: "Haji Bhasha" , city: "Tadipatri"},
	{name: "Haji" , city: "Tadipatri"},
	{name: "Srikanth", city: "Tadipatri"},
	{name: "Asain" , city: "Tadipatri"},
	{name: "Dinesh", city: "Madanapalli"},
	{name: "Venugopal Reddy" , city: "Gooty"},
	{name: "venu" , city: "Tadipatri"},
	{name: "Rajagopal Reddy" , city: "Yampalle"},
	{name: "Vishnu" , city: "Nellore"},
	{name: "Sai" , city: "Tadipatri"}
	];
   
	// while (true) {
	// const RandomNumber = () => {
		
	// 	const randomIndex = Math.floor(Math.random() * team.length);
	// 	const selectedMember = team[randomIndex];
	// 	// alert(`Selected Member: ${selectedMember.name} from ${selectedMember.city}`);
	// 	console.log(`Selected Member: ${selectedMember.name} from ${selectedMember.city}`);
		

	// 	document.querySelector(' .ranButton').innerHTML = `Lucky Person: ${selectedMember.name} ${selectedMember.city}`;

	// }


  return   (
        <div className="App"> 
			{/* <div className='header'>
            	<h1 className='appStyle'>First step is the great step</h1>
			</div> */}
            <Header />
			<div className='members-container' >

				<Section  title ="About-Us">
					<AboutUs />
				 </Section>

				<Section title = "Members">
					<MembersList /> 
				</Section>

				{/* <AboutUs />   	
				<MembersList /> */}
		   	</div>




			{/* <div className='selectingButton'>
				<h1><button className='ranButton'  onClick={RandomNumber} >Lucky Person</button></h1>
			</div> */}
        </div>
		
        
      
      );
  
}
// }

export default App;
