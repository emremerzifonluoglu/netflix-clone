import "./list.css"
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import ListItem from "./listItems/ListItem";
import { useRef, useState } from "react";

function List() {

    const listRef = useRef()
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if (direction === "right" && slideNumber < 4) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }
    return (
        <div className="l">
            <span className="l-title">Continue to watch</span>
            <div className="l-wrapper">
                <ArrowBackIosOutlined className="l-arrow left" onClick={() => handleClick("left")}
                    style={{ display: !isMoved && "none" }} ></ArrowBackIosOutlined>
                <div className="l-container" ref={listRef}>
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
                <ArrowForwardIosOutlined className="l-arrow right" onClick={() => handleClick("right")}></ArrowForwardIosOutlined>
            </div>
        </div >
    )
}

export default List