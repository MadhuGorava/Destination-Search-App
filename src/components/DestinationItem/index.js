// Write your code here
import DestinationItem from './Components'
import './index.css'

const DestinationItem = props => {
  const {placesDetails} = props
  const {imgUrl, name, id} = placesDetails
}

return (
  <li className="list-item-container">
    <img src={imgUrl} alt={name} className="image" />
    <h1 className="heading">{name}</h1>
  </li>
)

export default DestinationItem
