import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('CR7');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event)=>{
        event.preventDefault()
        if(inputValue.trim().length<=1)return;        
        //setCategories(categories=>[inputValue, ...categories])
        onNewCategory(inputValue.trim());
        setInputValue('');
    }
    return (
//      <form onSubmit={onSubmit}>
        <form onSubmit={(event)=>onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar Gif"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>

    )
} 