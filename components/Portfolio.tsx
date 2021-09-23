import { useEffect, useState } from "react"
import { getDatabase, ref, get, child } from 'firebase/database'

const dbRef = ref(getDatabase())

interface PortfolioSnapshot {
    name: string
    link: string
    year: string
}

const PortfolioFetching = () => (
    <div className="grid grid-cols-2 gap-3">
        {[...Array(4)].map((index) => (
            <div className="border border-yellow-200 border-opacity-25 shadow rounded-lg p-4 w-full mx-auto" key={index}>
                <div className="animate-pulse flex space-x-4">
                    <div className="flex-1 space-y-4 py-1">
                        <div className="h-4 bg-yellow-200 opacity-25 rounded w-full"></div>
                        <div className="space-y-2">
                            <div className="h-2 bg-gray-600 rounded w-5/6"></div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
)

const Portfolio = () => {
    const [fetching, setFetching] = useState(true)
    const [portfolio, setPortfolio] = useState<PortfolioSnapshot[]>()

    useEffect(() => {
       get(child(dbRef, 'portfolio')).then(snapshot => {
           if (snapshot.exists()) {
               setPortfolio(snapshot.val())
               setFetching(false)
           }
       })
    }, [])

    if (fetching) return <PortfolioFetching/>

    return (
        <div className="grid grid-cols-2 gap-3">
            {portfolio?.map((item, index) => (
                <a key={index} href={item.link} target="_blank" rel="noreferrer" className="p-4 rounded-lg border-yellow-200 border">
                    <h2 className="font-bold text-yellow-200">{item.name}</h2>
                    <h2 className="font-semibold text-gray-400 text-sm">{item.year}</h2>
                </a>
            ))}
        </div>
    )
}

export default Portfolio