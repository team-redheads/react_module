import React, { Component } from 'react'
import { Modal, Button } from 'antd';

class ActorInfo extends Component {
    state = { visible: false }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    renderActors () {
        const {actor, movieActors} = this.props;
        const actorsItem = movieActors && movieActors.map((item, index) => {
            if (item.indexOf(actor.fullName.split(', ')[0]) !== -1)  {
                return (
                    <div key={index} className='block-actor-info'>
                        <div className='block-actor-info__wrapper-img'>
                            <img src={actor.img} alt="" />
                        </div>

                        <div className='block-actor-info__wrapper-text'>
                            <h2 className='block-actor-info__header'>{item}</h2>

                            <span className='block-actor-info__title'> Карьера: </span>
                            <span className='block-actor-info__text'>
                                {actor.career.join(", ")}
                            </span>
                        </div>
                    </div>
                )}
        });
        return actorsItem
    }

    render() {
        const {actor} = this.props;
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    {actor.fullName}
                </Button>

                <Modal
                    title={actor.fullName}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    {this.renderActors()}
                </Modal>
            </div>
        );
    }
}
export default ActorInfo;