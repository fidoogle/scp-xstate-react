import React, { PureComponent } from 'react';
import SlickSlider from 'react-slick';

class Slider extends PureComponent {
    state = {
        isClient: false
    };

    componentDidMount() {
        this.setState((state) => { isClient: true });
    }

    render() {
        const {
            children,
            responsive,
            ...rest
        } = this.props;
        const { isClient } = this.state;

        return (
            <SlickSlider
                key={isClient ? 'client' : 'server'}
                responsive={isClient ? responsive : null}
                {...rest}
            >
                {children}
            </SlickSlider>
        );
    }
}

export default Slider;