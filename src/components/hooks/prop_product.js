import React from 'react'
import propTypes from 'prop-types'

function Prop_product(props) {
   const { title , body } = props.data
  return (
    <div>
        <h1> { title } </h1>
        <p> { body } </p>
    </div>
  )
}



Prop_product.propTypes = {
    title: propTypes.string.isRequired,
    body: propTypes.string.isRequired,
}

export default Prop_product
