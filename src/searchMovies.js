import React, {Component} from "react"

class SearchMovies extends Component {
    constructor() {
        super()
        this.state = {
            query: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {value, name} = event.target
        this.setState({ [name]:value })
    }
    
    render() {
        return(
            <form className="form">
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