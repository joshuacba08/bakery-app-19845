import React,{useState, useEffect} from 'react';

const SearchItemList = ({ query }) => {

    const [products, setProducts] = useState([]);
    const url = "https://run.mocky.io/v3/e90c9e56-1102-4091-8d22-78b1722aec9e"

    useEffect(()=>{

        fetch(url)
            .then( resp => resp.json())
            .then( data => {
                const results = data.filter( prod => prod.name.includes(query));
                setProducts(results);
            })
            .catch( error => console.error(error) );

    },[query]);


    return (
    <div>

        {
            products.length ?

                (products.map( prod => {

                    return(
                        <div key={prod.id}>
                            <p>{prod.name}</p>
                        </div>
                    )

                })
                
                )

            :<p> Cargando productos... </p>

        }


    </div>
  )
}

export default SearchItemList