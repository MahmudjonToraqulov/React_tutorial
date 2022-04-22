 

function Data(props) {
  const products = props.products
  return (
    <div>
        { products.map( inf => {
            return <div key={inf.id}>
                <h1>{ inf.id } { inf.title } </h1>
            </div>
        }) }
    </div>
  )
}

export default Data