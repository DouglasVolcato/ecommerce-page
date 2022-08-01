import React, {Component} from "react";

export default class MainContent extends Component{
    state = {appTitle: "Customers",
    customersCount: 4,
    customers: [
        {
            id:1,
            name:"Doug",
            phone:'12123-12323',
            photo: "https://picsum.photos/id/1010/60"
        },
        {
            id:2,
            name:"Jonas",
            phone: null,
            photo: "https://picsum.photos/id/1011/60"
        },
        {
            id:3,
            name:"Pedro", 
            phone:'87878-89898',
            photo: "https://picsum.photos/id/1012/60"
        },
        {
            id:4, 
            name:"Marcos", 
            phone:'82844-69699',
            photo: "https://picsum.photos/id/1013/60"
        },
    ]
    };

    render(){
        return <div>
            <h4 className="highLight" style={{margin: '1rem'}}>{this.state.appTitle} <span className="border border-dark" style={{padding:'0.2rem 0.7rem 0.2rem 0.7rem', margin: '2rem'}}>{this.state.customersCount}</span>

            <button type="button" className="btn btn-primary" onClick={this.onRefreshClick}>Refresh</button>
            </h4>        

            <table className="table">
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>ID</th>
                        <th style={{textAlign: "center"}}>Customer Name</th>
                        <th style={{textAlign: "center"}}>Phone</th>
                        <th style={{textAlign: "center"}}>Photo</th>
                        <th style={{textAlign: "center"}}>Change Photo</th>
                    </tr>
                </thead>
                <tbody>{this.getCustomerRow()}</tbody>
            </table>

        </div>
    }

    onRefreshClick = () =>{

        const arr = [...this.state.customers];

        const newCustomer = arr[Math.floor(Math.random() * arr.length)];
        arr.push(newCustomer);

        console.log(arr)
        this.setState({customers: arr});
        this.setState({customersCount: (arr.length)});
    }

    getPhoneToRender = (phone) =>{
        if (phone == null){
        return <div className="bg-danger text-white rounded-pill" style={{textAlign: 'center'}}>No Phone</div>;
        } else {
            return phone;
        }
    }

    getCustomerRow = () => {
        return this.state.customers.map((cust,index) => {
            return( 
            
                <tr>
                    <td style={{textAlign: "center"}}>{'ID: '+cust.id}</td>
                    <td style={this.customName(cust)}>{cust.name}</td>
                    <td style={this.highLight(cust)}>{this.getPhoneToRender(cust.phone)}</td>
                    <td style={{textAlign: "center"}}><img src={cust.photo} alt="" /></td>
                    <td style={{textAlign: "center"}}><button type="button" class="btn btn-secondary" onClick={() => {
                    this.onChangePictureClick(index);}}>Click</button></td>
                </tr>

            )
        })
    }

    onChangePictureClick = (index) => {

        const arr = this.state.customers;
        arr[index].photo = `https://picsum.photos/id/10${Math.floor(Math.random()*4)}${Math.floor(Math.random()*9+1)}/60`

        this.setState({customers: arr});
    }

    customName = (cust) => {
        if (cust.name.startsWith('D')){
            return {color:'red', textAlign: "center"};
        } else {
            return {color:'black', textAlign: "center"};
        }
    }

    highLight = (cust) => {
        if (cust.name.startsWith('D')){
            return {backgroundColor:'yellow', textAlign: 'center'};
        } else {
            return {color:'black', textAlign: 'center'};
        }
    }
}

