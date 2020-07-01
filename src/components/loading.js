/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core';
const flagging = keyframes`
  0%{
    color: #FF8053;
    transform: transLateY(0);
    margin-left: 0;
  }
  25%{
    color: #FF8053;
    transform: translateY(-15px);
    margin-left: 10px;
    text-shadow: 0 15px 5px rgba(0,0,0,1);
  }
  100%{
    color: #FF8053;
    transform: translateY(0);
  }
`
const flagLoading = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  span {
    font-size: 2em;
    color: #FF8053;
    display: inline-block;
    animation: ${flagging} 2s infinite;
    &:nth-of-type(1) {
      animation-delay: .1s;
    }
    &:nth-of-type(2) {
      animation-delay: .2s;
    }
    &:nth-of-type(3) {
      animation-delay: .3s;
    }
    &:nth-of-type(4) {
      animation-delay: .4s;
    }
    &:nth-of-type(5) {
      animation-delay: .5s;
    }
    &:nth-of-type(6) {
      animation-delay: .6s;
    }
    &:nth-of-type(7) {
      animation-delay: .7s;
    }
  }
`


const Loading = () => (
  <div css={flagLoading}>
    <span>L</span>
    <span>o</span>
    <span>a</span>
    <span>d</span>
    <span>i</span>
    <span>n</span>
    <span>g</span>
  </div>
)

export default Loading;
