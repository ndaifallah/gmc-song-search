import React, {Component} from 'react';
import { Input,Button} from 'antd'; // psq on a import from le site antd (choisire)
import  {AppleFilled,DownloadOutlined}  from '@ant-design/icons' // pour import les icons from antd lzmm
class Search extends Component {
    constructor(props){  //pour verifier l'ecriture et sur onchange
        super(props);
       
        this.state = {
            search: "",
        };
    } 



onCliksearch=async(e)=>{
let va =this.state.search;
let resp = await fetch ('https://itunes.apple.com/search?term=${value}');
let data = resp.json()

this.props.callbackFetch(data)
}





render(){
     return (
         <div>
        <h1>MY SONGS</h1>
        <Input size="large" placeholder="large size" prefix={<AppleFilled />} onChange={e=>{
           this.setState({search:e.target.value})} } value={this.state.search}
        />
        <Button  onClick={e=>this.onCliksearch()}   type="primary" shape="round" icon={<DownloadOutlined />} size={'large'} style={{
            display:'flex',justifycontent:'center',alignitems:'center'}} >  {/*size tjrs choisiire la taille*/ }
          Download
        </Button>   ; 


        </div>
     )
}
}
export default Search 