import React, {Component} from "react";
export default class Product extends Component{

    state = {
        product: this.props.product,
        index: this.props.index
    }

    render(){
        return(

                <div class="p-3 card m-2 col-3 bg-secondary text-light d-flex flex-column justify-content-evenly" style={{width:'30rem'}}>

                    <div className='d-flex justify-content-center'>
                        <div className="w-50"></div>
                        <div className='d-flex justify-content-between w-50'>
                            <div className='text-light m-1' style={{cursor: "pointer", align: "center", fontWeight: 'bold', fontSize: '1.4rem'}}>#{this.state.product.id}</div>
                            <button type="button" class="btn btn-warning fs-6 fw-bold" onClick={() => this.props.deleteElement(this.props.index)}>X</button>
                        </div>
                    </div>

                    
                    <h5 className="pt-5 border-top m-1" style={{textAlign: "center"}}>{this.state.product.productName}</h5>
                    <div className="m-1" style={{textAlign: "center"}}>${this.state.product.price}</div>

                    <div className="card-footer m-1 d-flex justify-center" style={{textAlign: "center"}}>

                        <button type="button" style={{textAlign: "center"}} class="btn btn-success m-auto" onClick={() => {this.props.onIncrement(this.state.product, this.state.index, 10)}}><h3 className="fw-bold fs-1">+</h3></button>
                        <h4 className="m-1 text-uppercase m-auto" style={{textAlign: "center"}}>{this.state.product.quantity}</h4>
                        <button type="button" class="btn btn-danger m-auto" onClick={() => {this.props.onDecrement(this.state.product, this.state.index, 0)}}><h3 className="fw-bold fs-1"> - </h3></button>

                    </div>
                    {this.props.children}
                        
                </div>
        )
    }
}