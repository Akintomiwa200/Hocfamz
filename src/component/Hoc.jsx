import {useState} from 'react'

const Hoc = (WrappedComponent) => {
    const HocComponent = () => {
        const [count, setCount] = useState(0);
        const [hover, setHover] = useState(0);

        const countHandler = () => {
            setCount(count + 1);
        };

        const hoverHandler = () => {
            setHover(hover + 1);
        };

        return (
            <div onMouseOver={hoverHandler}>
                <WrappedComponent hover={hover} count={count} onTextChanged={countHandler} />
            </div>
        );
    };

    return HocComponent;
};

export default Hoc;
