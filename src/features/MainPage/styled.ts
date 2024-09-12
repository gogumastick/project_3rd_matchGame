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

export const MainPageStyled = styled.div`
    margin-top: 50px;

    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .mainTitle {
        /* background-color : green;
        color: gold; */
        font-weight: bold;
    }
    .mainWrap {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 100%;
        height: 100vh;
    }

    .mainBox {
        width: 600px;
        height: 720px;
        padding: 30px;
        /* background-color : purple; */
        /* border : solid; */
        /* opacity: 0.7; */
        z-index: 10;
        position: absolute;
        /* position: relative; */
        box-shadow: 0px 0px 15px 15px #339900;
    }
    .logoBox {
        background-color: lightyellow;
        text-align: center;
        align-items: center;
    }
    .titleBox {
        background-color: white;
        text-align: center;
    }
    .ruleNameBox {
        background-color: white;
        text-align: center;
    }
    .explainBox {
        padding: 20px;
        background-color: white;
        height: 530px;
        overflow-y: auto;
    }
    .inputPlayerNameBox {
        padding: 0 10px 10px;
        background-color: white;
        justify-content: space-evenly;
        width: 100%;
    }
    .backgoundBox {
        filter: blur(3px);
        z-index: 5;
        position: relative;
    }

    .firstGridBox {
        display: grid;
        grid-template-columns: repeat(5, 120px);
        grid-template-rows: repeat(3, 120px);
    }
    .firstGridBox img {
        width: 102%;
        height: 102%;
        border: 5px solid white;
    }
    .secondGridBox {
        display: grid;
        grid-template-columns: repeat(5, 120px);
        grid-template-rows: repeat(3, 120px);
    }
    .secondGridBox img {
        width: 102%;
        height: 102%;
        border: 5px solid white;
    }
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

    .logoBox img {
        width: 40px;
        height: 40px;
        animation: ${jump} 1.3s ease-in-out infinite;
    }

    .loadingImgBox {
        z-index: 15;
        position: absolute;
        display: flex;
        flex-direction: column; /* 수직 정렬을 위한 설정 */
        justify-content: center; /* 수직 중앙 정렬 */
        align-items: center; /* 가로 중앙 정렬 */
        width: 600px;
        height: 720px;
        /* width: 100%; */
        background-color: white;
        font-size: 40px;
        font-weight: bold;
    }
    .loadingText {
        background-color: gold; /* 원하는 배경색 */
    }

    .loadingImg {
        display: flex;
        width: 200px;
        height: 200px;
        animation: ${jump} 0.5s ease-in-out infinite;
    }
    .noLoadingImgBox {
        display: none;
    }

    @media (max-width: 768px) {
        display: flex;
        .mainWrap {
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100vh;
        }
        .mainBox {
            width: 90%;
            height: 720px;
            /* z-index: 10; */
            /* position: relative; */
            /* position: absolute; */
            box-shadow: none;
        }
        .backgoundBox {
            /* display: flex; */
            width: 90%;
            height: 720px;
            /* z-index: 5; */
            /* position: relative; */
        }
        .firstGridBox {
            /* display: grid; */
            grid-template-columns: repeat(3, 120px);
            grid-template-rows: repeat(5, 120px);
        }
        .firstGridBox img {
            width: 90%;
            height: 90%;
            border: 5px solid white;
        }
        .secondGridBox {
            /* display: grid; */
            grid-template-columns: repeat(3, 120px);
            grid-template-rows: repeat(1, 120px);
        }
        .secondGridBox img {
            width: 90%;
            height: 90%;
            border: 5px solid white;
        }
        .loadingImgBox {
            width: 100%;
        }
    }
`;
