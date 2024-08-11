import ItemList from "./ItemList";
import { useState } from "react";

const RestraurantCategory = ({ rescategory, showItems, setShowIndex }) => {

    const handleClick = () => {
        setShowIndex();
    }

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg sm:text-xl">{rescategory.title} ({rescategory.itemCards.length})</span>
                    <span className="text-xl animate-bounce w-6 h-6 ...">{showItems ? '⬆' : '⬇'}</span>
                </div>
                <div>
                    {/* Accordion Body */}
                    {showItems && <ItemList items={rescategory?.itemCards} />}
                </div>
            </div>
        </div>
    );
}

export default RestraurantCategory;
