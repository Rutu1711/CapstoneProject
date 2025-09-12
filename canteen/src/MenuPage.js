import React, {useEffect, useState} from "react";

function MenuPage() {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        //mock data later fetch from spring boot api

        fetch("/data/data.json")
        .then((response) => response.json())
        .then((data) => setMenu(data))
        .catch((error) => console.error("Error loading menu!!"));
        
    }, []);

    const handleOrder = (item) => {
        alert('Ordered : ${item.name}');
        // TODO: Send order to Order Microservice
    }

    return(
        <div style={{padding: "20px"}}>
            <h2>Today's menu</h2>
            {menu.map((item) => (
                <div key={item.id} style={{marginBottom:"10px"}}>
                    <strong>{item.name}</strong> - ₹{item.price} 
                    <button
                        onClick={() => handleOrder(item)}
                        style={{marginLeft: "10px", padding: "5px 10px",
                    background: "blue", color: "white"}}
                    >
                        Order
                    </button>
                </div>
            ))}
        </div>
    )
}
export default MenuPage;