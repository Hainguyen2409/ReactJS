import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

export default function Login() {
    return(
        <div className="container">
            <form>
                <h1>Log in</h1>
                <input type="text" placeholder='Please enter your email address' />
                <br />
                <input type="password" placeholder="Enter your password" />
                <br />
                <Link href="/Home">
                <button type="submit" className="btn btn-primary">Login</button>
                </Link> 
            </form>
        </div>
    )
}