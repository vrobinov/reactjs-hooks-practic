import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";
const ChildrenExercise = () => {
    const ListComponents = ({ children }) => {
        return (
            <ul>
                {React.Children.map(children, (item, index) => {
                    const config = {
                        ...item.props,
                        seqNumber: index + 1,
                        key: index
                    };
                    return React.cloneElement(item, config);
                })}
            </ul>
        );
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ListComponents>
                <Component />
                <Component />
                <Component />
            </ListComponents>
        </CollapseWrapper>
    );
};

const Component = ({ seqNumber }) => {
    return <li>{seqNumber} - Компонент списка</li>;
};
ChildrenExercise.propTypes = {
    children: PropTypes.string
};
Component.propTypes = {
    seqNumber: PropTypes.number
};
export default ChildrenExercise;
