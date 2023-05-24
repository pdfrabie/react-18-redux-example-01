import { useSelector } from 'react-redux';
import Brewery from './Brewery';

const Breweries = () => {
  const brewaries  = useSelector((state) => state.brewaries.value.data);

  return (
    <div>
      <h2>Breweries</h2>      
      {
        brewaries.length > 0 ?
          brewaries.map((brewery) => (
            <Brewery
              key={brewery.id}
              brewery={brewery}
            />
          ))
        : 'No Breweries to show'
      }
    </div>
  )
}

export default Breweries
