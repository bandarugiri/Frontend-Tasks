import { useState } from "react";
import { Member } from "../member/Member";
import StyledButton from "../styledButton/StyledButton";
import './MembersList.css';
import Confetti from 'react-confetti';

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

function MembersList() { 

    const [luckyPerson, setLuckyPerson] = useState("");
    const [showCelebration, setShowCelebration] = useState(false); // Assuming you want to manage celebration state
    const [isLoading, setLoading] = useState(false); // Assuming you want to manage loading state
        function PickPerson() {
        setLoading(true);
        console.log("PickPerson function called");
        const randomIndex = Math.floor(Math.random() *team.length);
        console.log("Random Member Index:" , randomIndex);
        const selectedMember = team[randomIndex];
        console.log(`Selected Member: ${selectedMember.name} from ${selectedMember.city}`);
        const luckyMessage = `Lucky Person: ${selectedMember.name} from ${selectedMember.city}`;
        setTimeout( () => {
            setLuckyPerson(luckyMessage);
            console.log("Lucky Person set to:", luckyMessage);
            setLoading(false);
            setShowCelebration(true);
        } , 3000);
                
    }

    
    return (
        <>
        {showCelebration && <Confetti  numberOfPieces = {1000} wind = {0.05}/>}
        {/* <Confetti /> */}
             <h1>Members</h1>
         <div className = 'members'>
                
				{team.map(function (member) {
                return <Member name={member.name} city = {member.city} />
              })} 

              
				{/* <Member name ='BGP' city = 'AP' />
				<Member name = 'Venkatagiri' city = 'banglore' />
				<Member name = 'Karthik' city = 'banglore' /> */}
			</div>
            <div className="luckyOne">
                {isLoading &&  <h3>isLoading...</h3>}
                
                <h1 className="luckyOne">{luckyPerson}</h1>
                <StyledButton  title = "Lottery"  onClick = {PickPerson}/>
                
            </div>
            
        </> 
     );
}

export default MembersList;