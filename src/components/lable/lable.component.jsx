import React from "react";

import './lable.styles.scss';

const Lable = ({name, value}) => (
    <div className="lable">
        <span className="labe-name">{name}</span>:<span className="lable-value">{value}</span>
    </div>
)


export default Lable;