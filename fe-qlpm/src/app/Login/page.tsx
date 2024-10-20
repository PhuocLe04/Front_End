import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="login-container">
      <div className="logo">
        <Image src="/Images/OIP.png" alt="LLT Logo" width={100} height={100} />
      </div>
      <h2>LOGIN</h2>
      <p>Welcome!</p>
      <form className="login-form">
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="example@gmail.com" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="123z@#" />
          <span className="toggle-password"></span>
        </div>
        <Link href="#" className="forgot-password">
          Forgot password?
        </Link>
        <button type="submit">Sign in</button>
      </form>
      <p>
        No account?{' '}
        <Link href="#">
          Sign up
        </Link>
      </p>
    </div>
  );
}
