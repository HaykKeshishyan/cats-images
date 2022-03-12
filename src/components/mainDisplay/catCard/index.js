import { memo } from "react";

import LoadableImg from "../LoadableImg";

import "./styles.css";

const CatCard = ({ img_url }) => {

    return (
        <div className={"cat-card"}>
            <LoadableImg src={img_url} alt={'cat image'} />
        </div>
    );
};

export default memo(CatCard);