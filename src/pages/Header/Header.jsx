import { header } from '../../components/portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'
import ErrorBoundary from '../../ErrorBoundary'
const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <a href={homepage} className='link' style={{ color: '#FFD700' }}>
            {title}
          </a>
        ) : (<div style={{ color: '#FFD700' }}>
          {title}
        </div>
        )}
      </h3>
      <ErrorBoundary>
        <Navbar />
      </ErrorBoundary>
    </header>
  )
}



export default Header;