import React from "react";
import GridItem from "./GridItem";
import { Link } from "../../Models/Link";

export default {
    title: 'GridItem',
};

const link: Link = {
    url: 'https://redux.js.org/',
    title: 'Redux',
    imageUrl: 'https://redux.js.org/img/redux.svg',
    description: 'A predictable state container for JavaScript apps.',
    order: 1
}

export const defaultView = () => <GridItem link={link} />;