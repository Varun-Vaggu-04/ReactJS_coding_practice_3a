// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCardsList} = props
  const {headerText, description, className} = bannerCardsList

  return (
    <li className={className}>
      <div className="list-container">
        <h1>
            {headerText}
        </h1>
        <p 
            className="banner-description"
        >
            {description}
        </p>
        <button 
            type="button">
                Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
