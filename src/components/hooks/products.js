import Data from './Data'
import { useFetch } from './useFetch'

const url = 'https://jsonplaceholder.typicode.com/posts'
function Products() {
    const { loading , products } = useFetch(url)
    console.log(products);

  return (
    <div>
        { loading ? 'loading' : <Data products={ products }/> }
    </div>
  )
}

export default Products