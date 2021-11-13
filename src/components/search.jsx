import React, { Component } from 'react'
import { Input, Button } from 'antd';
import { AppleFilled } from "@ant-design/icons"

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
            is_loading: false
        }
    }

    onClickSeach = async (e) => {
        try{
            let value = this.state.term;
            this.setState({ is_loading: true});
            let resp = await fetch(`https://itunes.apple.com/search?term=${value}`);
            let data = await resp.json();
            this.setState({ is_loading: false });
            this.props.callbackFetch(data);
        }catch(e){
            console.log(e);
        }
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
                 <Button 
                    onClick={e => this.onClickSeach(e)} 
                    type="primary" 
                    shape="round" 
                    icon={<AppleFilled />} 
                    size="large" 
                    style={{width: 300}} 
                    loading={this.state.is_loading}>
                Search my song
                </Button>
            </div>
        )
    }
}


export default Search;