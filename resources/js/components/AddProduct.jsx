import { useState } from "react";

export default function AddProduct(props) {
    const [newProduct, setNewProduct] = useState(
        {
            title: '',
            description: '',
            price: 0,
            availability: 0
        }
    );

    function handleInput (key, e) {
        const {value} = e.target;
        setNewProduct(prevProduct => ({
            ...prevProduct, [key]: value
        }));
    }
    function handleSubmit(e) {
        e.preventDefault();
        props.onAdd(newProduct);
    }

    return (
        <div>
        <h2>Add new product</h2>    
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text"  onChange={(e) => handleInput('title', e)}/>
            </label>
            <label>
                Descritpion:
                <input type="text"  onChange={(e) => handleInput('description', e)}/>
            </label>

            <input type="submit" value="Ssubmit" />
        </form>
        </div>
    );
}