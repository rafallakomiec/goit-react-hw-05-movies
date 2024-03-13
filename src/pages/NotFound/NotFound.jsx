import { Link } from "react-router-dom";

const NotFound = () => { 
    return (<>
        <h2>You seem to got lost...</h2>
        <Link to="/">Go back Home</Link>
    </>);
};

export default NotFound;