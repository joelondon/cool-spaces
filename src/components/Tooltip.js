import React from 'react'

const Tooltip = ({ feature }) => {
  return (
    <div>
      {Object.entries(feature.properties).reduce(
        (acc, curr) => (
          <div>
            {acc}
            {curr[0]} : {curr[1]}
          </div>
        ),
        ''
      )}
    </div>
  )
}

export default Tooltip
