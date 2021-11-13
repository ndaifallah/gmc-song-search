import React, { Component } from 'react'
import { Input, Button } from 'antd';
import { AppleFilled } from "@ant-design/icons"
import { connect } from 'react-redux';

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
            let dispatch = this.props.dispatch;
            let value = this.state.term;
            this.setState({ is_loading: true});
            dispatch({ 
                type: "set_loading",
                is_loading: true
            });
            let resp = await fetch(`https://itunes.apple.com/search?term=${value}`);
            let data = await resp.json();
            this.setState({ is_loading: false });
            dispatch({
                type: "set_loading",
                is_loading: false
            })
            this.props.callbackFetch(data);
        }catch(e){
            console.log(e);
        }
    }

    render() {
        console.log("------", this.props)
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
                    loading={this.props.nimporte_quoi}>
                Search my song
                </Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    // My prop is_loading on lui affecte le state (loading) depuis notre state global
    nimporte_quoi: state.loading
})

export default connect(mapStateToProps, null) (Search);