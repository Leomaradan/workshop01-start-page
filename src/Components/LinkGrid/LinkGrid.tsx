import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../Models/State";
import GridItem from "./GridItem";

export interface LinkGridProps {

}

const LinkGrid: React.SFC<LinkGridProps> = () => {

    const links = useSelector((state: State) => state.links.links);

    return (
        <>
            <span>LinkGrid</span>
            <ul>
                {links?.map(link => <GridItem key={link.url} link={link} />)}
            </ul>
        </>
    );
}

export default LinkGrid;