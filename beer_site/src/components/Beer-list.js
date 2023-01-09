import {useState, useEffect} from 'react'
import {getBeer} from '../api'

const BeerList = () => {
    const [beerArr, setBeerArr] = useState([{}])
    const [pageNum, setPageNum] = useState()
    const [pageSize, setPageSize] = useState()

    useEffect(() => {
        getBeer(pageNum, pageSize)
        .then(res => {
            setBeerArr(res)
        })

    },[pageNum, pageSize])


    return (
        <main>
            <section>
                <form className='form'>
                    <input id='page number' placeholder='Page Number' type="number" min="1" onChange={(event) => {
                        setPageNum(event.target.value)
                    }}/>
                    <input id='page size' placeholder='Page Size' type="number"  min="1" onChange={(event) => {
                        setPageSize(event.target.value)
                    }}/>
                </form>
            </section>
            <section>
                <h2>Beer</h2>
                <ul className="beer-list">
                    {beerArr.map(beer => {
                        return (
                            <li className="single-beer" key={beer.id}>
                               <p id="name">{beer.name}</p>
                               <p id="tagline">{beer.tagline}</p>
                               <img className="beer-img" src={beer.image_url} alt={beer.name}/>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </main>
    )

}

export default BeerList