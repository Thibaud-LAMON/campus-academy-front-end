import './header.css';

function Navlinks() {

    return(
        <div className='navlinks'>
            <b>Home</b>
            <tr>
                <td className='navlinks-td'><p>TV shows</p></td>
                <td className='navlinks-td'><p>Movies</p></td>
                <td className='navlinks-td'><p>New & popular</p></td>
                <td className='navlinks-td'><p>My list</p></td>
                <td><p>Browse by language</p></td>
            </tr>
        </div>
    )
}

export default Navlinks