import Navbar from '../components/navbar/Navbar'
import Featured from '../components/featured/Featured'
import './home.css'


function Home() {
    return (
        <div className='h'>
            <Navbar />
            <Featured />
        </div>
    )
}

export default Home