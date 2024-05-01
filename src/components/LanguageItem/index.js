import './index.css'

const LanguageItem = props => {
  const {languageDetails} = props
  const {imageUrl, imageAltText} = languageDetails
  return (
    <div className="main-container">
      <li className="item-container">
        <img className="item-image" src={imageUrl} alt={`${imageAltText}`} />
      </li>
    </div>
  )
}

export default LanguageItem
