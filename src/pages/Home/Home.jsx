import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    let navigate = useNavigate();
    const handleLogout = () => {
      sessionStorage.removeItem('Auth Token');
      navigate('/login')
    }
    useEffect(() => {
      let authToken = sessionStorage.getItem('Auth Token')
      console.log(authToken)
      // if (authToken) {
      //     navigate('/')
      // }

      // if (!authToken) {
      //     navigate('/signup')
      // }
  }, [])
  return (
  <>
    <div style={{backgroundColor:"yellow"}}>
      Home page

        <button onClick={handleLogout}>Log out</button>
    </div>
    <Footer />
  </>
  )
}

export default Home