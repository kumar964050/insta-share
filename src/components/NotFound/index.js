import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      className="not-found-image"
      alt="page not found"
      src="https://res.cloudinary.com/narri/image/upload/v1650214147/Insta_share/erroring_1_urknot.png"
    />
    <h1 className="posts-search-error-message">Page Not Found</h1>
    <p className="posts-search-error-description not-found-description">
      we are sorry, the page you requested could not be found. Please go back to
      the homepage.
    </p>
    <Link className="not-found-link" to="/">
      <button className="user-profile-error-button" type="button">
        Home Page
      </button>
    </Link>
  </div>
)

export default NotFound
