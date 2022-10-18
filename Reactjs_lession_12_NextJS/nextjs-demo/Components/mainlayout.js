import Link from "next/link";

export default function Layout ({children}) {
    return (
        <div className="container">
            <Link href="/Home">
                <p>Home</p>
            </Link>  
            <Link href="/About">
                <p>About</p>
            </Link>
            <Link href="/Login">
                <p>Logout</p>
            </Link>
            <Link href="/Login">
                <p>Login</p>
            </Link>
            <Link href="/Blog">
                <p>Blog</p>
            </Link>
            <div className="text-center">{children}</div>
        </div>
    )
}