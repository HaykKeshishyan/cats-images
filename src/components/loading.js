import loader from "../assets/img/hourglass.png";

const Loading = () => {
    return (<div className={"loading"}>
        <img src={loader}/>
        <p>Loading...</p>
    </div>);
};

export default Loading;