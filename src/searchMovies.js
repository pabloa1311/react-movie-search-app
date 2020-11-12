import React, {Component} from "react"

class SearchMovies extends Component {
    constructor() {
        super()
        this.state = {
            query: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.searchMovies = this.searchMovies.bind(this)
    }
    
    handleChange(event) {
        const {value, name} = event.target
        this.setState({ [name]:value })
    }

    async searchMovies(event) {
        event.preventDefault()
        const url = `https://api.themoviedb.org/3/search/movie?api_key=55267730325e050f50509a8d74572227&language=en-US&query=${this.state.query}&page=1&include_adult=false`

        try {
            const response = await fetch (url)
            const data = await response.json()

            console.log(url)
            console.log(data)
        }catch(err) {
            console.error(err)
        }
        
    }
    
    render() {
        return(
            <form className="form" onSubmit={this.searchMovies}>
                <label htmlFor="query" className="label">Movie Name</label>
                <input
                    name="query"
                    type="text"
                    value={this.state.query}
                    onChange={this.handleChange}
                    placeholder="Type a Movie"
                    className="input"                         
                />
                
                <button
                    type="submit"
                    className="button"
                >Submit</button>
                <p>{this.state.query}</p>
            </form>
        )
    }
}

export default SearchMovies