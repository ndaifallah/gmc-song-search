import { render } from "@testing-library/react"
import React,{Component} from "react"
import { Input } from 'antd';
import {AppleFilled, SearchOutlined } from "@ant-design/icons"
import { Button, Radio } from 'antd';
// import { DownloadOutlined } from '@ant-design/icons';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {content:""};
      }
    
      onClickSearch= async (e)=>{
          let value= this.state.content
          let response= await fetch(`https://itunes.apple.com/search?term=${value}`)
          let data= await response.json()
          this.props.datacallback(data.results)
      }
    render(){
        return(<div style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: 'column',
            alignItems:"center"
        }}>

            <h1>My Songs</h1>
            <Input size="large" placeholder="Song/Artist Name" prefix={<AppleFilled />} style={{width:"500px"}} onChange={e=>{
              this.setState({content: e.target.value} ) }} value={this.state.content} />
            <Button type="primary" shape="round" icon={<SearchOutlined />} size={"large"} style={{width:"150px",marginTop:'5px'}} onClick={e=> this.onClickSearch(e)}>
          Search 
        </Button>
        </div>
        )
    }
}
export default Search