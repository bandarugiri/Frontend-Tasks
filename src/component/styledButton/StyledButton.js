import './StyledButton.css';

function StyledButton(props) {
    console.log("StyledButton component rendered", props);
    const {title , onClick } = props;
    return ( 
        <div className='flex-Container'>
            <button className='styledButton' onClick= {onClick}>
                {title}
            </button>
        </div>
     );
}

export default StyledButton;