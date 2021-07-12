
import React from 'react';


class Landingpage extends React.Component{
    constructor(){
        super();
        this.state={
           char:[],
           product:{},
           count:{
               key:[],
               q:0
           }
        }
    }
    componentDidMount(){
       fetch("https://fakestoreapi.com/products")
        .then(response=>response.json())
        .then(data=> {
            console.log(data);
             
                this.setState({char:data})  
             
            
        })
        this.approveclick=this.approveclick.bind(this)
        this.declineclick=this.declineclick.bind(this)
    }
approveclick(){
    this.setState({
        
        product:{...this.state.char.id},
        
        key:[...this.state.char.id],
       

    }) 

}
declineclick(){
    
    
}
    render(){
        return ( <div style={{display:'flex', flexDirection:'row'}}>
            
            <div style={{width:'1500px'}} class="ui divided three column grid"><div class="row"><div class="column"></div></div>{this.state.char.map(d=>(
                
                <div class="ui cards"><div class="ui card"><div class="content"><img src={d.image} class="ui mini right floated image"/><div class="header">{d.title}</div><div class="meta">{d.price}</div><div class="description">{d.description}<strong>{d.category}</strong></div></div><div class="extra content"><div class="ui two buttons"><button onClick={this.approveclick} class="ui green basic button">Approve</button><button onClick={this.declineclick} class="ui red basic button">Decline</button></div></div></div></div>
                 ))}
             
                </div>
                <div style={{border:'2px solid black',width:"500px", height:"1000px"}}>
               
                
              { console.log(this.state.count.key)}
          
       })
                </div>
                </div>
        )
    }
}
export default Landingpage