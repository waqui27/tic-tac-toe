import React from "react";
import {FaTimes, FaPen, FaRegCircle} from "react-icons/fa"

const Icon = ({name}) => {
    switch (name) {
        case 'circle':
            return <FaRegCircle className="icon-circle" />
        case 'cross':
            return <FaTimes className="icon-cross" />
        default:
            return <FaPen className="icon" />
    }
};

export default Icon