import styled, { keyframes } from 'styled-components';
const jump = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

export const RuleModalStyled = styled.div`
    * {
        font-size: 16px;
        font-family: 'Handjet', sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        font-variation-settings: 'ELGR' 1, 'ELSH' 2;
    }
    /* .ant-modal-header {
        display:flex;
       
        width: 100%;
        justify-content: center;
        text-align: center;
        align-items: center;
    }
    .ant-modal title {
        display:flex;
        text-align: center;
        width: 100%;
        justify-content: center;
        text-align: center;
        align-items: center;
    } */

    .pointBox {
        display: inline-block;
        font-size: 16px;
        margin-bottom: 10px;
    }

    .point {
        display: inline-block;
        vertical-align: middle; /* 이미지가 텍스트와 수평으로 맞추어지게 */
    }

    .point img {
        width: 25px;
        height: 25px;
    }

    .pointJupmBox {
        display: inline-block;
        font-size: 16px;
        margin-bottom: 10px;
    }

    .pointJupm {
        display: inline-block;
        vertical-align: middle; /* 이미지가 텍스트와 수평으로 맞추어지게 */
    }

    .pointJupm img {
        width: 25px;
        height: 25px;
        animation: ${jump} 1.5s ease-in-out infinite;
    }
`;
