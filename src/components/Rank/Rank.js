import React from 'react';




const Rank = ({ name, entries }) => {
    return (
        <div>
          <div className='white f3'>
              {`${name}, your current entry count is...`}
          </div>
          <div className='white f'>
              {entries}
          </div>
        </div>
    );
}

export default Rank ; 
