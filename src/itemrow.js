import React, { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { addLog, addProduct,delProduct } from './redux/action'
import image1 from "./assets/image1.png"
import image2 from "./assets/image2.png"
import image3 from "./assets/image3.png"
import image4 from "./assets/image4.png"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

function Itemrow({ category, id }) {
    
    const dispatch = useDispatch()
    const [items,setItems] = useState([
        {
            image: image4,
            price: 0.69,
            name: "Banana 1 ct",
            weight: "18 oz",
            added: false,
        },
        {
            image: image1,
            price: 0.69,
            name: "Strawberries",
            weight: "1 lb",
            added: false,
        },
        {
            image: image3,
            price: 0.69,
            name: "Yogurt",
            weight: "1 lb",
            added: false,
        },
        {
            image: image2,
            price: 0.69,
            name: "Black berries",
            weight: "1 lb",
            added: false,
        },
        {
            image: image4,
            price: 0.69,
            name: "Banana 1 ct",
            weight: "18 oz",
            added: false,
        },
        {
            added: false,
            image: image1,
            price: 0.69,
            name: "Strawberries",
            weight: "1 lb"
        },
        {
            added: false,
            image: image3,
            price: 0.69,
            name: "Yogurt",
            weight: "1 lb"
        },
        {
            added: false,
            image: image2,
            price: 0.69,
            name: "Black berries",
            weight: "1 lb"
        },
        {
            added: false,
            image: image3,
            price: 0.69,
            name: "Yogurt",
            weight: "1 lb"
        },
        {
            added: false,
            image: image2,
            price: 0.69,
            name: "Black berries",
            weight: "1 lb"
        },

    ])
    const handleProduct = (operation,ind,name) => {
        let localItems = items
        localItems[ind]["added"] = operation == "add" ?  true : false;
        setItems(localItems)
        operation == "add" ? dispatch(addProduct()) : dispatch(delProduct())
        const date = new Date();
        const dateTime = date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()+","
                        +date.getHours()+':'+date.getMinutes()+":" + date.getSeconds()
        dispatch(addLog({"category":category,"name":name,"dateTime":dateTime,"request":operation,"statusCode":"404","response":"success"}))
    }
    return (
        <div style={{ borderBottom: "1px solid #f1efef", padding: "20px 5px", overflow: "hidden" }} id={id} >
            <span class=" categoryHeading">{category}</span> <ArrowForwardIosIcon className="categoryHeadingIcon" style={{ marginTop: "-10px" }} />
            <div className='flex flex-row' style={{ display: "flex", overflow: "hidden", gap: "6px" }}>
                {
                    items.map((o, ind) => {
                        return (
                            <div style={{ textAlign: "center", padding: "6px" }} >
                                <img src={o?.image} />
                                {
                                    o?.added
                                        ?<RemoveCircleIcon fontSize='large' style={{ marginLeft: "85px", marginTop: "-70px", color: "#40D589",cursor:"pointer" }} onClick = {(e) => handleProduct("del",ind,o?.name)}/>
                                        :<AddCircleIcon fontSize='large' style={{ marginLeft: "85px", marginTop: "-70px", color: "#40D589",cursor:"pointer" }} onClick = {(e) => handleProduct("add",ind,o?.name)}/>
                                        
                                }
                                <div>{o?.price}</div>
                                <div>{o?.name}</div>
                                <div>{o?.weight}</div>
                            </div>
                        )
                    })
                }
            </div>

        </div>

    )
}

export default Itemrow
