import { BrowserRouter as Router, Route, Routes, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        if (!name || !email || !password) {
            setError('All fields are required.');
            return;
        }
        if (!email.includes('@')) {
            setError('Email must contain "@"');
            return;
        }
        if (password.length < 8) {
            setError('Password must be at least 8 characters long.');
            return;
        }

        try {
            await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
            navigate('/login');
        } catch (err) {
            setError('Registration failed. Try again.');
        }
    };

    return (
        <div className="form-container">
            <div className="glass-form">
                <h2>Register</h2>
                {error && <p className="error-message">{error}</p>}
                <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button className="form-btn" onClick={handleRegister}>Register</button>
                <p className="login-link">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
}

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!email || !password) {
            setError('All fields are required.');
            return;
        }

        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            localStorage.setItem('token', res.data.token);
            navigate('/dashboard');
        } catch (err) {
            setError('Invalid login credentials.');
        }
    };

    return (
        <div className="form-container">
            <div className="glass-form">
                <h2>Login</h2>
                {error && <p className="error-message">{error}</p>}
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button className="form-btn" onClick={handleLogin}>Login</button>
                <p className="register-link">
                    New User? <Link to="/">Register</Link>
                </p>
            </div>
        </div>
    );
}

function Dashboard() {
    const navigate = useNavigate();

    return (
        <div className="dashboard-container">
            <div className="dashboard-card">
                <h1>🎉 Welcome to Dashboard! 🎉</h1>
                <p>Enjoy your stay here.</p>
                <button className="dashboard-btn" onClick={() => navigate('/')}>Return</button>
            </div>
        </div>
    );
}

function Footer() {
    return <div className="footer">© 2025 Vaibhav Talekar | All Rights Reserved</div>;
}

function App() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.classList.add('transition-mode');
        document.body.className = darkMode ? 'dark-mode' : '';
    }, [darkMode]);

    return (
        <Router>
            <div className="toggle-container">
                <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? '      ' : '      '}
                </button>
            </div>
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
