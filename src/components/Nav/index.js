import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
    const categories = [
        {
            item: "commercial",
            description: "Photos of grocery stores, food trucks, and other commercial projects"
        },
        {
            item: "portraits",
            description: "Portraits of people in my life"
        },
        {
            item: "food",
            description: "Delicious delicacies"
        },
        {
            item: "landscape",
            description: "Fields, farmhouses, waterfalls, and the beauty of nature"
        }
    ];

    const categorySelected = (item) => {
        console.log(item);
        return item;
    };

    return(
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera"> 📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about" onClick={() => categorySelected("About")}>
                            About Me
                        </a>
                    </li>
                    <li>
                        <span onClick={() => categorySelected("Contact")}>
                            Contact
                        </span>
                    </li>
                    {categories.map((category) => (
                        <li className="mx-1" key={category.item}>
                            <span onClick={() => {categorySelected(category.item);}}>
                                {capitalizeFirstLetter(category.item)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
export default Nav;