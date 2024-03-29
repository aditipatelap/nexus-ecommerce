import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import DataContext from '../context/DataContext';

const Login = () => {
    const navigate = useNavigate();
    const logoPath = process.env.PUBLIC_URL + "/images/logo/logo_3x.png";
    const { 
        setProfilePic, setCustomerId, setFirstName, setLastName, 
        email, setEmail, 
        password, setPassword, 
        setPhoneNumber, setGender, setBirthday, 
        setBuilding, setLandmark, setArea, setDistrict, setState,
        setFavoriteList, setBagList, setOrdersList,
    } = useContext(DataContext);

    useEffect(() => {
        setCustomerId();
        setProfilePic();
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setPhoneNumber('');
        setGender("Female");
        setBirthday('');
        setBuilding('');
        setLandmark('');
        setArea('');
        setDistrict("Ahmadabad");
        setState("Gujarat");
        setFavoriteList([]);
        setBagList([]);
        setOrdersList([]);
    }, [])

    const handleUserData = (user) => {
        setCustomerId(user._id);
        setProfilePic(user.profilePic);
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setEmail(user.email);
        setPassword(user.password);
        setPhoneNumber(user.phoneNumber);
        setGender(user.gender);
        setBirthday(user.birthday);
        setBuilding(user.building);
        setLandmark(user.landmark);
        setArea(user.area);
        setDistrict(user.district);
        setState(user.state);
        setFavoriteList(user.favorite);
        setBagList(user.bag);
        setOrdersList(user.orders);
    }

    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:8000/customer/login", {email, password} );
            setEmail('');
            setPassword('');
            const { data } = response;
            if (data.status === "success") {
                const user = data.user;
                handleUserData(user);
                navigate("/home");
            }
            else if (data.status === "incorrect") {
                alert("Wrong password");
                navigate("/");
            }
            else if (data.status === "notexist") {
                alert("User have not sign up");
                navigate("/signup");
            }
            else if (data.status === "fail") {
                alert("Something went wrong");
            }
        }
        catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-dvh">
            <div className="border-2 border-black rounded-lg pt-5 pb-14 px-10 sm:px-7 xs:px-5 mx-5 bg-[#98CDEA]">
                {/* logo */}
                <div className="w-full flex justify-center">
                    <div className="h-28 w-28 md:h-24 md:w-24 sm:h-24 sm:w-24 xs:h-20 xs:w-20">
                        <img src={logoPath} alt="Nexus" className="h-full w-full object-contain" />
                    </div>
                </div>
                {/* pickup line */}
                <p className="font-balsamiq-sans font-semibold text-2xl md:text-xl sm:text-xl xs:text-lg mt-5 mb-10 text-center">Login now and let the shopping spree begin...</p>
                {/* form  */}
                <form id="loginPage" action="POST" onSubmit={(e) => e.preventDefault()}>
                    <div className='w-full border-black shadow-md mb-8'>
                        <label htmlFor={email} className="text-nowrap mr-5 hidden">Email Id:</label>
                        <input
                            id="email"
                            required
                            autoFocus
                            type="email"
                            className='w-full rounded-md font-poly placeholder-slate-300 text-white p-3 text-lg bg-[#285F88]'
                            placeholder="Email ID"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='w-full border-black shadow-md mb-8'>
                        <label htmlFor={password} className="text-nowrap mr-5 hidden">Password:</label>
                        <input
                            id="password"
                            required
                            type="password"
                            className='w-full rounded-md font-poly placeholder-slate-300 text-white p-3 text-lg bg-[#285F88]'
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex">
                        <button
                            type="submit"
                            className="font-podkova bg-[#285F88] rounded-md p-4 px-10 sm:px-6 xs:px-6 mb-8 hover:shadow-lg hover:shadow-slate-400 text-center text-white text-2xl sm:text-xl xs:text-xl font-semibold"
                            onClick={() => handleLogin()}
                        >
                            SIGN IN
                        </button>
                    </div>
                </form>
                <div className="flex w-full justify-center sm:text-sm xs:text-sm">
                    <Link to='/signup' className='underline hover:text-blue-600'>
                        Don’t have account?  No Worries!
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login
