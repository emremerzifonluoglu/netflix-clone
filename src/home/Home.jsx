import Navbar from '../components/navbar/Navbar'
import Featured from '../components/featured/Featured'
import './home.css'
import List from '../components/list/List'


function Home() {
    return (
        <div className='h'>
            <Navbar />
            <Featured />
            <List />
            <List />
            <List />
            <List />
        </div>
    )
}

export default Home