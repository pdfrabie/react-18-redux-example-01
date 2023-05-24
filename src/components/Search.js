import { useState } from "react";

const Search = ({ searchByName }) => {
  const [inputValue, setInputValue] = useState('');
  const [labelColor, setLabelColor] = useState('#000');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) {
      setLabelColor('#F00');
      return;
    }

    searchByName(inputValue);
  }

  const searchOnChange = (text) => {
    setInputValue(text);
    setLabelColor(!text ? '#F00' : '#000');
    setShowConfirmation(!text ? false : true);
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className='form-control'>
          <label style={{color: labelColor}}>Please enter a name to search for</label>

          {/* search string */}
          <input
            type='text'
            data-testid='searchBar'
            placeholder='by name ...'
            value={inputValue}
            onChange={(e) => searchOnChange(e.target.value)}
          />

          {/* confirmation */}
          {showConfirmation &&
            <label data-testid='searchConfirmation'>
                Searching for: <span data-testid='searchString'>{inputValue}</span>
            </label>
          }
          
      </div>
      <input type='submit' value='SEARCH' className='btn btn-block' />
    </form>
  )
}

export default Search
