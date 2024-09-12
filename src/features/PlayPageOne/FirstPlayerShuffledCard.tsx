import { styleText } from 'util';
import { PlayPageStyled } from './styled';

interface FirstPlayerShuffledCardProps {
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
    firstPlayerScore: number;
    turn: boolean;
    playerBoardWinnerLoserImg: {
        id: number;
        name: string;

        src: {
            src: string;
        };
    }[];
    roster : string[];
}

const FirstPlayerShuffledCard = ({ cards, point, firstPlayerScore, turn,playerBoardWinnerLoserImg }: FirstPlayerShuffledCardProps) => {
    
        // id가 1인 승리 이미지 찾기
        const winnerImg = playerBoardWinnerLoserImg.find(img => img.id === 1);
        // id가 2인 패배 이미지 찾기
        const loserImg = playerBoardWinnerLoserImg.find(img => img.id === 2);  
    
    
    return (
        <>
            <PlayPageStyled>
            

                <div className="firstPlayerBox">
                
                    <div className='LeftWinLoseImgBox'>
                    {winnerImg && <img className="LeftWinLoseImg" src={winnerImg.src.src} alt={winnerImg.name} />}
                    </div>
                    {cards.map((card, i) => (
                        <div key={card.id} className="firtstEachCardBox">
                            <div className="indexNo">{i + 1}</div>
                            <div className="pointBox">
                                
                                <img
                                    className={`point ${turn && firstPlayerScore === i ? 'active' : ''}`}
                                    src={point.src.src}
                                    alt={point.name}
                                    
                                    style={{
                                        display: firstPlayerScore === i ? 'block' : 'none',
                                        // animation: turn ? 'active' : 'none',
                                    }}
                                />
                            </div>

                            <img className="cardImg" src={card.src.src} alt={card.name} />
                        </div>
                    ))}
                    <div className='LeftWinLoseImgBox'>
                    {loserImg && <img className="LeftWinLoseImg" src={loserImg.src.src} alt={loserImg.name} />}
                    </div>
                </div>
            </PlayPageStyled>
        </>
    );
};

export default FirstPlayerShuffledCard;
