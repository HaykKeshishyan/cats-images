import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {addCats, clearData, setCats} from "../../redux/ducks/catDuck";
import {api} from "../../helper/api";
import CatCard from "./catCard";

import "./styles.css";

const MainDisplay = ({limit, categoryId, pageNum}) => {

    const dispatch = useDispatch();
    const cats = useSelector(({catDuck}) => catDuck.cats);
    const [page, setPage] = useState(pageNum);

    const buttonRef = useRef(null);

    const scrollToBottom = () => {
        page !== pageNum && buttonRef.current?.scrollIntoView({behavior: "smooth"});
    };

    useEffect(scrollToBottom, [cats]);


    const loadMoreHandler = () => setPage(prev => ++prev);

    /**
     * fetch initial data
     */
    useEffect(() => {
        fetch(`${api}/images/search?limit=${limit}&page=${pageNum}&category_ids=${categoryId}`)
            .then(res => res.json())
            .then(res => dispatch(setCats(res)))
            .catch(err => console.log(err));

        return () => {
            dispatch(clearData({}));
        };
    }, [categoryId]);


    /**
     * fetch more data
     */
    useEffect(() => {
        fetch(`${api}/images/search?limit=${limit}&page=${page}&category_ids=${categoryId}`)
            .then(res => res.json())
            .then(res => page !== pageNum && dispatch(addCats(res)))
            .catch(err => console.warn(err));
    }, [page]);


    return (
        <>
            <div>

                <div className={"main-display-wrapper"}>
                    {/*TODO there are some images with the same id. So the best id is random nums.*/}
                    {cats.map(({id, url}) => <CatCard key={Math.random()} img_url={url}/>)}
                </div>
                {cats.length > 0 &&
                    <button ref={buttonRef} id={"loadMore"} onClick={loadMoreHandler}> Load more cats</button>}
            </div>
        </>

    );
};

export default MainDisplay;