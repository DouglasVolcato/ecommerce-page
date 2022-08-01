import React, {Component} from "react";
import Product from "./Product"
export default class ShoppingCart extends Component{

    constructor(props){
        super(props);
        this.state = {
            products: [
                {  
                    id:1,
                    productName:"iPhone",
                    price: 8900,
                    quantity:0
                },
                {  
                    id:2,
                    productName:"Sony Camera",
                    price: 4500,
                    quantity:0
                },
                {  
                    id:3,
                    productName:"Samsung QLED TV",
                    price: 7745,
                    quantity:0
                },
                {  
                    id:4,
                    productName:"iPad Pro",
                    price: 12400,
                    quantity:0
                },
                {  
                    id:5,
                    productName:"Xbox",
                    price: 7780,
                    quantity:0
                },
                {  
                    id:6,
                    productName:"Dell Monitor",
                    price: 880,
                    quantity:0
                },
            ]
        }
    }

    render(){
            return( 
            <div>

                <br/><br/><br/>
                <h2 style={{textAlign: "center"}}>eCommerce</h2>
                <br/>

                <h4 style={{textAlign: "center"}}>Shoppping Cart</h4>

                <div className="d-flex m-3 flex-wrap justify-content-evenly">
                    {this.state.products.map((prod,index) => {

                        return <Product 
                            key={prod.id}
                            product={prod}
                            index={index}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                            deleteElement={this.deleteElement}
                            > 
                                <button type="button" class="btn btn-primary bg-secundary" style={{textAlign: "center"}}>Buy Now</button>
                            </Product>
                    })}

                </div>

            </div>
        )
    }

    handleIncrement = (product, index, maxValue) => {
        const allProducts = [...this.state.products];
        const num = allProducts.indexOf(product);

        if (allProducts[num].quantity < maxValue) {

            allProducts[num].quantity++;
            this.setState({products: allProducts});
        }
    }

    handleDecrement = (product, index, minValue) => {
        const allProducts = [...this.state.products];
        const num = allProducts.indexOf(product);

        if (allProducts[num].quantity > minValue){

            allProducts[num].quantity--;
            this.setState({products: allProducts});
        }
    }
    deleteElement = (index) => {
        if (window.confirm("Are you sure to delete?")){
            const allProducts = [...this.state.products];
        allProducts.splice(index, 1);
        this.setState({products: allProducts});
        }
    }
}