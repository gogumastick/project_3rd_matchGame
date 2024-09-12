import styled, { keyframes } from 'styled-components';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// FontAwesomeIcon을 스타일링하는 StyledIcon 컴포넌트
// export const StyledIcon = styled(FontAwesomeIcon)`
//     color: red; /* 원하는 색상 */
//     font-size: 50px; /* 원하는 크기 */
//     margin: 10px; /* 간격 */
// `;

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

const rotateYAnimation = keyframes`
  0% {
    transform: rotateY(0deg);
    opacity: 1;
  }
  50% {
    transform: rotateY(90deg);
    opacity: 0;
  }
  100% {
    transform: rotateY(180deg);
    opacity: 1;
  }
`;

export const PlayPageStyled = styled.div`
    display: flex;
    width: 100%;

    .LeftBox {
        flex: 2.5;
        /* background-color: orange; */
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        align-items: flex-end;
        font-size: 25px;
        font-weight: bold;
        margin-top: 10px;
    }

    .LeftPlayerBox {
        /* background-color: purple; */
        display: flex;
        flex-direction: column;
        margin-top: 5px;
    }
    .firstPlayerName {
        /* border: 1px solid; */
        width: 200px;
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
    }
    .secondPlayerName {
        /* border: 1px solid; */
        width: 200px;
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
    }
    .bright {
        box-shadow: 0px 0px 2px 2px #339900;
    }

    .RightBox {
        flex: 2.5;
        /* background-color: lightgreen;  */
        justify-content: center;
        flex-direction: column;
        text-align: center;

        font-size: 25px;
        font-weight: bold;
        margin-top: 10px;
    }
    .RightPlayerBox {
        /* background-color: black; */
        display: flex;
        flex-direction: column;
        margin-top: 5px;
    }
    .CenterBox {
        flex: 5;
        /* background-color: lightblue;  */
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: start; /* 가로 중앙 정렬 */
        align-items: center; /* 세로 중앙 정렬 */
        width: 100%;
        height: 100%;
        margin-top: 5px;
    }
    .centerWrap {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 80px;
    }

    .centerTopBox {
        /* background-color: deeppink; */
        display: flex;
        justify-content: space-evenly; // 아이템들의 사이와 양 끝에 일정한 간격
        width: 100%;
        margin: 10px 0;
    }

    .logo {
        flex: 1;
        text-align: center;
        color: white;
        /* background-color: salmon; */
        position: relative;
    }
    .logoImg {
        width: 70px;
        height: 70px;
        margin-left: 30px;
        /* background-color: darkslateblue; */
        position: relative;
    }
    .questionMarkImg {
        width: 30px;
        height: 30px;
        /* background-color: lightseagreen; */
        position: absolute;
        transform: translate(10%, -40%);
        visibility: ${({ onClick }) => (onClick ? 'visible' : 'hidden')}; /* true일 때 보이고, false일 때 숨김 */
    }

    .ruleBook {
        flex: 1;
        text-align: center;
        /* color: white; */
        position: relative;
    }
    .ruleBookImg {
        width: 70px;
        height: 70px;
        transition: transform 0.3s ease, filter 0.3s ease;

        /* Hover 상태일 때의 스타일 */
        &:hover {
            transform: scale(1.1); /* 이미지 확대 */
            filter: brightness(1.2); /* 밝기 증가 */
            cursor: pointer; /* 마우스 커서를 포인터로 변경 */
        }
    }

    .resetBox {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        /* background-color: green; */
        width: 100%;
        height: 100%;
        /* padding: 0 30px; */
        /* color: white; */
    }
    .resetBNT {
        /* flex: 1; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #339900;
        position: relative;
        /* background-color: whitesmoke; */
        width: 100%;
        font-weight: bold;
        /* height :100%; */
        /* padding: 0 100px; */
    }

    .resetBNT svg {
        width: 40px;
        height: 40px;
    }

    .resetBNT:hover::after {
        content: '플레이어 순서 및 카드 섞기'; /* The tooltip text */
        position: absolute;
        top: 60px;
        background-color: black;
        color: gold;
        padding: 5px;
        border-radius: 5px;
        font-size: 12px;
        white-space: nowrap;
        z-index: 20;
        opacity: 1;
        transition: opacity 0.3s ease;
    }

    /* Initially hide the tooltip */
    .resetBNT::after {
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .dealerCardBox {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .coverBox {
        display: grid;
        grid-template-columns: repeat(4, 130px);
        grid-template-rows: repeat(4, 130px);
        grid-gap: 10px;
        z-index: 10;
        /* position: relative; */
        position: absolute;
        /* top: 0;
        left: 0; */
        pointer-events: none;
        /* color: #339900; */
        /* padding : 20px; */

        font-size: 75px;
        font-family: 'Zen Tokyo Zoo', system-ui;
        font-weight: 400;
        font-style: normal;
    }
    .coverCard {
        border: 5px solid #1e3050;
        width: 102%;
        height: 102%;
        background-color: white;
        opacity: 1;
        border-radius: 10px;
        color: rgba(51, 153, 0, 1); // 글씨 색깔에 투명도 값주기 0이면 안보임
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .flip {
        animation: ${rotateYAnimation} 4s ease none;
        /* opacity: 0; */
        color: rgba(51, 153, 0, 0); // 글씨 투명도 값을 0으로 해서 안보이게 안보임
        background-color: none;
    }
    /* .coverBox > * {
        border: 5px solid #1e3050; 
        width: 96%;
        height: 96%;
        background-color: gray;
        opacity: 0.9;
        border-radius : 10px;

    } */

    .dealerBox {
        display: grid;
        grid-template-columns: repeat(4, 130px);
        grid-template-rows: repeat(4, 130px);
        grid-gap: 10px;
        z-index: 5;
        top: 0;
        left: 0;
        /* position: absolute; */
        position: relative;
    }
    .dealerCardImg {
        width: 102%;
        height: 102%;
        object-fit: scale-down; /* 이미지 비율을 유지하면서 잘 맞게 크기를 조정될려나? */

        border: 5px solid white;
        border-radius: 10px;
    }
    .PlayerBox img {
        display: flex;
        /* width: 50px;
    height: 50px; */
        /* border: 2px solid black; */
    }
    .firstPlayerBox {
        width: 100%;
        padding-right: 20px;
    }
    .firtstEachCardBox {
        width: 100%;
        display: flex;
        justify-content: right;
        align-items: center;
    }
    .LeftWinLoseImgBox {
        /* background-color: skyblue; */
        width: 100%;
        display: flex;
        justify-content: right;
        align-items: center;
    }
    .LeftWinLoseImg {
        width: 100px;
        height: 100px;
        border: 2px solid white;
    }
    .secondPlayerBox {
        width: 100%;
        padding-left: 20px;
    }
    .secondEachCardBox {
        width: 100%;
        display: flex;
        justify-content: left;
        align-items: center;
    }
    .RightWinLoseImgBox {
        /* background-color: skyblue; */
        width: 100%;
        display: flex;
        justify-content: left;
        align-items: center;
    }
    .RightWinLoseImg {
        width: 100px;
        height: 100px;
        border: 2px solid white;
    }
    .indexNo {
        margin-right: 10px; /* Adjust spacing between index and image */
        /* visibility: hidden; 글자 안보이게 */
        display: none;
    }
    .pointBox {
        margin: 0 8px;
    }
    .point {
        width: 30px;
        height: 30px;

        /* animation: ${jump} 1.5s ease-in-out infinite; */
    }
    .active {
        animation: ${jump} 1.5s ease-in-out infinite;
    }

    .cardImg {
        width: 50px;
        height: 50px;
        border: 2px solid white;
    }

    .inputPlayerNameFormBox {
        width: 100%;
        height: 100%;
        /* background-color:blue; */
        display: flex;
        justify-content: space-evenly !important;

        align-items: center;
    }
    /* form 요소를 flex로 설정하고 내부 요소를 가운데 정렬 */
    .inputPlayerNameForm {
        display: flex;
        justify-content: space-evenly; /* 수직 중앙 정렬 */
        align-items: center; /* 가로 중앙 정렬 */
        width: 100%;
    }

    .ant-input {
        width: 190px;
        box-shadow: 0px 0px 2px 2px #339900;
        color: #000000; /* 글자색을 진하게 */
        font-weight: bold; /* 글자 굵기 설정 */

        &::placeholder {
            color: #808080;
        }
    }
    .ant-input:hover {
        width: 190px;
        /* background-color: blue; */
    }
    .ant-btn {
        box-shadow: 0px 0px 2px 2px #339900;
        font-weight: bold;
    }
    .ant-btn:hover {
        background-color: green !important;
        color: gold !important;
        font-weight: bold !important;
    }
    @media (max-width: 768px) {
        .firstPlayerName {
            width: 150px;
        }
        .secondPlayerName {
            width: 150px;
        }
        .coverBox {
            grid-template-columns: repeat(4, 90px);
            grid-template-rows: repeat(4, 90px);
            font-size: 60px;
        }
        .dealerBox {
            grid-template-columns: repeat(4, 90px);
            grid-template-rows: repeat(4, 90px);
        }
        .LeftBox {
            margin-top: 30px;
        }
        .RightBox {
            margin-top: 30px;
        }
        .centerWrap {
            margin-top: 100px;
        }
    }
`;
