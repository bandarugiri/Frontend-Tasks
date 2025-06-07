function Section(props) {
    console.log("Section component rendered" , props);
    const {title , children} = props;
    return (
        <> 
            <h2  className="about">{title}</h2>
            {children}
        </>
     );
}

export default Section;