import './Member.css';
export function Member(props){
    console.log(props.name);
    // const MemberName = props.name || 'karthik'; 
    // const MemberCity = props.city || 'kuppam';
    // object destructuring
    const { name = "nandheesh"  , city = "kinchempalle" } = props;
    

    return (
        <div className="member">
            <h1>{name}</h1>
            <p className='city'>{city}</p>
        </div>
    );
}