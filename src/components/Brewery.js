import Address from './Address';

function Brewery({ brewery }) {
  return (
    <div>
      <h4>
        <a href={brewery.website_url} target="_blank" rel="noreferrer">{brewery.name}</a>
      </h4>
      <Address address={brewery.address} />
      <div>Call: {brewery.phone}</div>      
      <br/>
    </div>
  )
}

export default Brewery
