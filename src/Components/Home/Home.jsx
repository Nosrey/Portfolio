// importo profilePic
import HomeHeader from './HomeHeader/HomeHeader'
import HomeBack from './HomeBack/HomeBack'
import './Home.css'

// creo un componente de react
const Home = () => {
    return (
        <div className='flex flex-row justify-center items-center'>
            <HomeBack />
            <HomeHeader />
        </div>
    )
}

// exporto el componente
export default Home