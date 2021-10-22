import React, { Component } from 'react'
import { Input, Button } from 'antd';
import { AppleFilled } from "@ant-design/icons"

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        }
    }

    onClickSeach = async (e) => {
        let value = this.state.term;
        let resp = await fetch(`https://itunes.apple.com/search?term=${value}`);
        let data = await resp.json();
        this.props.callbackFetch(data);
    }

    render() {
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <br/>
                <h1>My songs</h1>
                <br/>
                <br/>

                <Input size="large" placeholder="Ex: .. Hello Adele" prefix={<AppleFilled />} style={{width: 500}} onChange={e => this.setState({term: e.target.value})} value={this.state.term}/>
                <br/>
                <br/>
                 <Button onClick={e => this.onClickSeach(e)} type="primary" shape="round" icon={<AppleFilled />} size="large" style={{width: 300}}>
                Search my song
                </Button>
            </div>
        )
    }
}


export default Search;