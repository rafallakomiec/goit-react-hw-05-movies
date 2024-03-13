import { useLocation, Link } from "react-router-dom";

const BackButton = () => {
    const location = useLocation();

    return (<Link to={location.state?.back ?? "/"}>&larr; GO BACK</Link>);
};

export default BackButton;