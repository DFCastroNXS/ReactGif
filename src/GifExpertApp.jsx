import { useState } from "react"
import { AddCategory, GifGrid } from "./components/index";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Real Madrid']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GrifExpertApp</h1>
            <AddCategory
                //setCategories={setCategories}
                onNewCategory={(value) => onAddCategory(value)}
            />
            <ol>
                {
                    categories.map((category) => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}