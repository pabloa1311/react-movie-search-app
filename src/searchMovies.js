import React, {useState} from "react"
import MovieCard from "./movieCard"

function SearchMovies(){
    
    //states- input query, movies
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([])
    
    const searchMovies = async (e) => {
        e.preventDefault();
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=55267730325e050f50509a8d74572227&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url);
            const data  = await res.json();
            console.log(data.results);
            setMovies(data.results)
        }catch(err){
            console.error(err);
        }
    }
    
    return (
        <div>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input 
                    className="input" 
                    type="text" 
                    name="query"
                    value={query}
                    placeholder="i.e. Jurassic Park"
                    onChange={(e) => setQuery(e.target.value)}
                />
                    
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                   <MovieCard movie={movie} key={movie.id} />
                ))}
            </div> 
        </div>
    )
}

// class SearchMovies extends Component {
//     constructor() {
//         super()
//         this.state = {
//             query: ""
//         }
//         this.handleChange = this.handleChange.bind(this)
//         this.searchMovies = this.searchMovies.bind(this)
//     }
    
//     handleChange(event) {
//         const {value, name} = event.target
//         this.setState({ [name]:value })
//     }

//     async searchMovies(event) {
//         event.preventDefault()
//         const url = `https://api.themoviedb.org/3/search/movie?api_key=55267730325e050f50509a8d74572227&language=en-US&query=${this.state.query}&page=1&include_adult=false`

//         try {
//             const response = await fetch (url)
//             const data = await response.json()

//             console.log(url)
//             console.log(data)
//         }catch(err) {
//             console.error(err)
//         }
        
//     }
    
//     render() {
//         return(
//             <form className="form" onSubmit={this.searchMovies}>
//                 <label htmlFor="query" className="label">Movie Name</label>
//                 <input
//                     name="query"
//                     type="text"
//                     value={this.state.query}
//                     onChange={this.handleChange}
//                     placeholder="Type a Movie"
//                     className="input"                         
//                 />
                
//                 <button
//                     type="submit"
//                     className="button"
//                 >Submit</button>
//                 <p>{this.state.query}</p>
//             </form>
//         )
//     }
// }

export default SearchMovies