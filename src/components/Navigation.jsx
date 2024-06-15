import {
    Link,
} from "react-router-dom";

const Navigation = (props) => {
    const userData = props?.userCtx?.user || null;
    const loginButton = () => (<Link to="/login">Login</Link>);
    const logoutButton = () => (<Link to="#logout">Logout</Link>);

    return (
        <div>
            <ul className='navigation'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/public">Public page</Link></li>
                <li><Link to="/protected">Protected page</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li>{props?.userCtx?.isLoggedIn ? logoutButton() : loginButton()}</li>
                {props?.userCtx?.isLoggedIn ? <li><Link to="#profile">{userData.name}</Link></li> : ''}
            </ul>
        </div>
    );
}


export default Navigation
