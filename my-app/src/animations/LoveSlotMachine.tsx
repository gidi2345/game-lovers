import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../assets/animations/lottie-animations/love-icon-animation.json';

export default class LottieControl extends React.Component<{},{isStopped: any, isPaused: any}> {

    constructor(props: any) {
        super(props);
        this.state = {isStopped: false, isPaused: false};
    }

    render() {
        const buttonStyle = {
            display: 'block',
            margin: '10px auto'
        };

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return <div>
            <Lottie options={defaultOptions}
                    height={500}
                    width={500}
                    isStopped={this.state.isStopped}
                    isPaused={this.state.isPaused}/>
        </div>
    }
}
