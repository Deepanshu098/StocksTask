import { BiUser } from "react-icons/bi";
import Dropdown from "react-bootstrap/Dropdown";
import { useEffect, useState } from "react";
import { singleDataApi, stocksDataApi} from "../api/Api";

function StockMarket() {
    const[stocks,setStocks]=useState([])
    const[stockDetails,setStockDetails]=useState()
    
    async function getAllStocks(){
    const result = await singleDataApi();
    console.log(result);
    setStocks(result.data)
    }

    useEffect(()=>{
        getAllStocks();
    },[])


    async function stockPrice(symbol){
            const res = await stocksDataApi({symbol});
            setStockDetails(res)
        }
    


    return (
        <>
            {/* Header */}
            <div className="container-fluid p-0 m-0">
                <div className="row p-0 m-0 bg-dark d-flex align-items-center">
                    <div className="col-md-1">
                        <div className="stockSelector_logo">
                            <img src="/images/logo.png" alt="logo" width={60} height={60}></img>
                        </div>
                    </div>
                    <div className="col-md-11">
                        <div className="row d-flex justify-content-between text-white ">
                            <div className="col-md-2 d-flex align-items-center">
                                <h1>Home</h1>
                            </div>
                            <div className="col-md-3 justify-content-center d-flex align-items-center">
                                <Dropdown style={{ fontSize: "25px" }}>
                                    <Dropdown.Toggle>Select Yours Favorite Stock</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                    {
                                        stocks.map((ele,index)=>{
                                            return(
                                                    <li key={index} onClick={()=>{stockPrice(ele.symbol)}} style={{cursor:'pointer'}}>
                                                        {ele.name}
                                                    </li>
                                            )   
                                        })
                                    }
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="col-md-2 d-flex align-items-center">
                                <span style={{ fontSize: "25px" }}>
                                    <BiUser style={{ fontSize: "30px", marginRight: "10px" }} />
                                    <span>Deepanshu</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Body part */}
                <div className="row p-0 m-0 stockSelector_backgroundImage d-flex justify-content-center">
                    <div className="col-md-8 text-white p-0 m-0">
                        <div className="p-4">
                            {/* <h1>{counter}</h1> */}
                            <h1 className="text-center">Welcome to my Stock Price Tracket Page</h1>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-6">
                                <div className="stockSelector_stockInformation ">
                                    <h1 style={{ fontSize: "35px" }}>Stock Information</h1>
                                    <div className="mt-5">
                                    <div className="fs-3">
                                            <span>Stock Symbol :</span>
                                            <span className="ps-3" >{stockDetails?.symbol}</span>
                                        </div>
                                        <div className="fs-3">
                                            <span>Stock Name :</span>
                                            <span className="ps-3" >{stockDetails?.name}</span>
                                        </div>
                                        <div className="fs-3">
                                            <span>Stock Price :</span>
                                            <span className="ps-3">Rs.{stockDetails?.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="row p-0 m-0">
                    <p className="text-center bg-dark text-white p-2 m-0">STOCK PRICE TRACKER. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </>
    );
}

export default StockMarket;
