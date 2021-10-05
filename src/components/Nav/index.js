import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;
    
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.item);
    }, [currentCategory]);
    
    return(
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera">
                        {""}📸
                    </span>
                    {""}Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about"> 
                            About Me
                        </a>
                    </li>
                    <li>
                        <span>
                            Contact
                        </span>
                    </li>
                    {categories.map((category) => (
                        <li className={
                            `mx-1 ${currentCategory.item === category.item && 'navActive'}`
                        } key={category.item}>
                            <span onClick={() => {setCurrentCategory(category)}}>
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