import React, { Component } from 'react';
import { Transition } from 'react-spring'
import styled from 'styled-components';
import { Portal, absolute } from 'Utilities';
import Icon from './Icon';
import { Card } from './Cards';




export default class Modal extends Component {
  render() {
    const { children, on, toggle } = this.props
    return (
      <Portal>
        <Transition
          from={{ opacity: 0 }}
          enter={{ opacity: 0 }}
          leave={{ opacity: 0 }}
        >
          {on && (())
            (
            <ModalWrapper>
              <ModalCard>
                <CloseButton onClick={toggle}><Icon name="close" /></CloseButton>
                <div>{children}</div>
              </ModalCard>
              <Background onClick={toggle} />
            </ModalWrapper>
            )
          }
        </Transition>
      </Portal>
    )
  }
}


const ModalWrapper = styled.div`
    ${absolute({})};
    width:100%;
    height: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const ModalCard = styled(Card)`
position:relative;
z-index:10;
min-width:320px;
margin-bottom:100px;
`;

const CloseButton = styled.button`
${absolute({ y: 'top', x: 'right' })};
border:none;
background:transparent;
padding:10px;
outline:none;
`;

const Background = styled.div`
${absolute({})};
width:100%;
height:100%;
background:black;
opacity:0.5;

`;
