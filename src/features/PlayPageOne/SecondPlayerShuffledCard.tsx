import { PlayPageStyled } from './styled';

// interface CardProps {
//     id: number;
//     name: string;
//     src: {
//         src: string;
//     };
// }

// interface PointProps {
//     id: number;
//     name: string;
//     src: {
//         src: string;
//     }; // src는 문자열로 정의됩니다.
// }

interface SecondPlayerShuffledCardProps {
    cards: {
        id: number;
        name: string;

        src: {
            src: string;
        };
    }[];
    point: {
        id: number;
        name: string;

        src: {
            src: string;
        };
    };
    turn: boolean;
    secondPlayerScore: number;
    playerBoardWinnerLoserImg: {
        id: number;
        name: string;

        src: {
            src: string;
        };
    }[];
    // cards: CardProps[];
    // point: PointProps;
}

const FirstPlayerShuffledCard = ({
    cards,
    point,
    secondPlayerScore,
    turn,
    playerBoardWinnerLoserImg,
}: SecondPlayerShuffledCardProps) => {
    // console.log('2p에서 turn값', turn);
    // id가 1인 승리 이미지 찾기
    const winnerImg = playerBoardWinnerLoserImg.find((img) => img.id === 1);
    // id가 2인 패배 이미지 찾기
    const loserImg = playerBoardWinnerLoserImg.find((img) => img.id === 2);

    return (
        <>
            <PlayPageStyled>
                <div className="secondPlayerBox">
                    <div className="RightWinLoseImgBox">
                        {winnerImg && <img className="RightWinLoseImg" src={winnerImg.src.src} alt={winnerImg.name} />}
                    </div>
                    {cards.map((card, i) => (
                        <div key={card.id} className="secondEachCardBox">
                            <div className="indexNo">{i + 1}</div>
                            <img className="cardImg" src={card.src.src} alt={card.name} />
                            <div className="pointBox">
                                <img
                                    className={`point ${!turn && secondPlayerScore === i ? 'active' : ''}`}
                                    src={point.src.src}
                                    alt={point.name}
                                    style={{
                                        display: secondPlayerScore === i ? 'block' : 'none',
                                        // animation: turn ? 'active' : 'none',
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                    <div className="RightWinLoseImgBox">
                        {loserImg && <img className="RightWinLoseImg" src={loserImg.src.src} alt={loserImg.name} />}
                    </div>
                </div>
            </PlayPageStyled>
        </>
    );
};

export default FirstPlayerShuffledCard;
