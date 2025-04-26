import React, { Component } from 'react';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title1: 'Menu Makanan',
            title2: 'Menu Minuman',
            inputValue: 'fatichatus saadah',
        }
        this.rubahData = this.rubahData.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    rubahData(){
        this.setState({title : 'Pilih Makanan'});
    }
    handleChange(e){
        this.setState({
            inputValue: e.target.value,
        })
    }
    render() {
        return(
            <div>
                <h3>{this.state.title}</h3>
                <button onClick={this.rubahData}>Ubah Makanan</button>
                <input type = "text" onChange={this.handleChange}/>
            </div>
        );
    };
} 
export default Main;