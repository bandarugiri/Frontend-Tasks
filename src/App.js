import logo from './logo.svg';
import './App.css';
import { Member } from './Member';
import AboutUs from './About-us';
import './App.css';

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
  return   (
        <div className="App"> 
            <h1 style={{backgroundColor: 'blue' , textAlign:'center'}}>First step is the great step</h1>
            
            <AboutUs />
            <div class = 'members'>
{/* 
              {team.map(function (member) {
                return <Member name={member.name} city = {member.city} />
              })} */}
            {/* <Member name ='BGP' city = 'AP' />
            <Member name = 'Pallavi' city = 'banglore' />
            <Member name = 'Karthik' city = 'banglore' /> */}
            </div>
        </div>
        
      
      );
            
           
             





  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  
}

export default App;
