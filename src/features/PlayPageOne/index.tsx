// import { playCard } from '@/utill/data';
import { playCard, point, playerBoardWinnerLoserImg, ruleBookImg, logo,questionMark } from '@/utill/data';
import { PlayPageStyled } from './styled';
import { useState } from 'react';
import { useEffect } from 'react';
import FirstPlayerShuffledCard from './FirstPlayerShuffledCard';
import SecondPlayerShuffledCard from './SecondPlayerShuffledCard';
import DealerShuffledCard from './DealerShuffledCard';
import { notification } from 'antd';
import { Modal, Button } from 'antd';
import Reset from '@/components/Reset';
import InputPlayerName from '@/components/InputPlayerName';
import ResultModal from '@/components/ResultModal';

interface CardProps {
    id: number;
    name: string;
    src: {
        src: string;
    };
}

const PlayPageOne = () => {
    // console.log('props로 roster와야지',roster,);

    // playcard데이터를 가져오자
    const playcard = playCard;
    // const playcard = playCard;
    // console.log('전체 카드값 배열로 가져오나?', playcard);

    const [roster, setRoster] = useState<string[]>([]);
    // console.log('PlayPageOne에 있는 roster씨 배열로 오나요', roster);

    // grid안에 들어갈 card데이터를 저장하자
    const [dealerShuffledCard, setDealerShuffledCard] = useState<CardProps[]>([]);

    // grid안에 선택된 card데이터를 저장하자
    const [pickedCard, setPickedCard] = useState<CardProps | null>(null);
    // console.log('PlayPage에 pickedCard 값이 와??', pickedCard);

    // 1player와 2Player에게 배포될 card데이터를 저장하자
    const [firstPlayerShuffledCard, setFirstPlayerShuffledCard] = useState<CardProps[]>([]);
    const [secondPlayerShuffledCard, setSecondPlayerShuffledCard] = useState<CardProps[]>([]);

    // true = 첫 번째 플레이어, false = 두 번째 플레이어
    const [turn, setTurn] = useState(true);

    // 1player와 2Player의 점수
    // 배열로 점수를 인식해보면 어떨까..13개의 card가 뿌려지니깐 점수가 -1 === 승리, 14 === 패배
    const [firstPlayerScore, setFirstPlayerScore] = useState<number>(4);
    // console.log('1P 점수 변경되나?', firstPlayerScore);

    const [secondPlayerScore, setSecondPlayerScore] = useState<number>(4);
    // console.log('2P 점수 변경되나?', secondPlayerScore);

    // 1player와 2Player가 맞출 card.id
    const [firstPlayerMatchingCard, setFirstPlayerMatchingCard] = useState<CardProps | null>(null);
    // console.log('1player 배열의 매칭할 카드', firstPlayerMatchingCard);

    const [secondPlayerMatchingCard, setSecondPlayerMatchingCard] = useState<CardProps | null>(null);
    // console.log('2player 배열의 매칭할 카드', secondPlayerMatchingCard);

    // const [btnName, setBtnName] = useState<string>('시작버튼');

    const [resultModal, setResultModal] = useState<boolean>(false);
    // console.log('시작과 종료시 값을 던질거야', resultModal);

    const [modalMessage, setModalMessage] = useState<string>('');

    const showModal = (message: string) => {
        setModalMessage(message);
        setResultModal(true);
    };

    // 메인페이지에서 roster를 갖고 PlayPage로 넘어 왔으
    useEffect(() => {
        // 로컬 스토리지에서 roster 가져오기
        const storedRoster = localStorage.getItem('roster');
        if (storedRoster) {
            const parsedRoster = JSON.parse(storedRoster); // JSON 문자열을 배열로 변환
            // console.log('parsedRoster배열로 오나?', parsedRoster);

            // 플레이어들 선(先) 정하기
            const nameShuffle = shuffle([...parsedRoster]);
            // console.log('이름 섞은겨?', nameShuffle);

            setRoster(nameShuffle);
        }
    }, []);

    // 컴포넌트가 마운트될 때 playcard 배열을 셔플하고 카드 배열결과를 3명의 플레이어 useState에 저장
    useEffect(() => {
        if (roster.length > 0) {
            const dealerShuffledCard = shuffle([...playcard]); // 딜러(grid)
            // console.log('딜러 셔플 카드 배열',dealerShuffledCard );
            const firstPlayerShuffledCard = shuffle([...playcard]).slice(0, 13); // 1player에게 카드 13장 보내기
            // console.log('1P 셔플 카드 배열',firstPlayerShuffledCard );
            const secondShuffledCard = shuffle([...playcard]).slice(0, 13); // 2player에게 카드 13장 보내기
            // console.log('2P 셔플 카드 배열',secondShuffledCard );

            setDealerShuffledCard(dealerShuffledCard); // 딜러(grid)
            setFirstPlayerShuffledCard(firstPlayerShuffledCard); // 1player
            setSecondPlayerShuffledCard(secondShuffledCard); // 2player

            // 플레이어들 선(先) 정하기
            // const nameShuffle = shuffle([...roster]);
            // console.log('이름 섞은겨?', nameShuffle);
        }
    }, [roster, resultModal]);

    // 1Player와 2Player가 맞춰야 할 카드를 지정
    useEffect(() => {
        if (firstPlayerShuffledCard[firstPlayerScore]) {
            // console.log('1P 맞았나??', firstPlayerShuffledCard[firstPlayerScore]);
            setFirstPlayerMatchingCard(firstPlayerShuffledCard[firstPlayerScore]);
        }
        if (secondPlayerShuffledCard[secondPlayerScore]) {
            // console.log('2P 맞았나??', secondPlayerShuffledCard[secondPlayerScore]);
            setSecondPlayerMatchingCard(secondPlayerShuffledCard[secondPlayerScore]);
        }
    }, [firstPlayerScore, firstPlayerShuffledCard, secondPlayerScore, secondPlayerShuffledCard]);

    const shuffle = (array: any) => {
        // console.log('shuffle작동함??');
        return array.sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
        // pickedCard가 null이면 아무 작업도 하지 않음
        if (pickedCard === null) return;

        // 1P 턴
        if (turn) {
            // 첫 번째 플레이어의 턴
            if (pickedCard.id === firstPlayerMatchingCard?.id) {
                setFirstPlayerScore(firstPlayerScore - 1);
            } else {
                setFirstPlayerScore(firstPlayerScore + 1);
                setTurn(false); // 턴을 두 번째 플레이어로 넘김
            }
        } else {
            // 두 번째 플레이어의 턴
            if (pickedCard.id === secondPlayerMatchingCard?.id) {
                setSecondPlayerScore(secondPlayerScore - 1);
            } else {
                setSecondPlayerScore(secondPlayerScore + 1);
                setTurn(true); // 턴을 첫 번째 플레이어로 넘김
            }
        }

        if (firstPlayerScore === 0) {
            showModal(`${roster[0]} 의 승리 ${roster[1]}의 패배`);
        } else if (firstPlayerScore === 12) {
            showModal(`${roster[0]} 의 패배 ${roster[1]}의 승리`);
        }

        if (secondPlayerScore === 0) {
            showModal(`${roster[1]} 의 승리 ${roster[0]}의 패배`);
        } else if (secondPlayerScore === 12) {
            showModal(`${roster[1]} 의 패배 ${roster[0]}의 승리`);
        }
    }, [pickedCard]);

    return (
        <>
            <ResultModal
                resultModal={resultModal}
                modalMessage={modalMessage}
                setResultModal={setResultModal}
                setTurn={setTurn}
                setFirstPlayerScore={setFirstPlayerScore}
                setSecondPlayerScore={setSecondPlayerScore}
                setRoster={setRoster}
                shuffle={shuffle}
            />

            <PlayPageStyled>
                <div className="LeftBox">
                    <div className={`firstPlayerName ${turn === true ? 'bright' : ''}`}>
                        {roster[0] ? `1st ${roster[0]}` : '1 Player 미등록'}
                    </div>
                    {/* <div>{firstPlayerScore + 1}</div> */}
                    <div className="LeftPlayerBox">
                        <FirstPlayerShuffledCard
                            cards={firstPlayerShuffledCard}
                            point={point}
                            firstPlayerScore={firstPlayerScore}
                            turn={turn}
                            playerBoardWinnerLoserImg={playerBoardWinnerLoserImg}
                            roster={roster}
                        />
                    </div>
                </div>
                <div className="CenterBox">
                    <DealerShuffledCard
                        cards={dealerShuffledCard}
                        pickedCard={pickedCard}
                        setPickedCard={setPickedCard}
                        ruleBookImg={ruleBookImg}
                        setRoster={setRoster}
                        logo={logo}
                        questionMark={questionMark}
                        setFirstPlayerScore={setFirstPlayerScore}
                        setSecondPlayerScore={setSecondPlayerScore}
                        shuffle={shuffle}
                    />
                </div>
                <div className="RightBox">
                    <div className={`secondPlayerName ${turn === false ? 'bright' : ''}`}>
                        {roster[1] ? `2nd ${roster[1]}` : '2 Player 미등록'}
                    </div>
                    {/* <div>{secondPlayerScore + 1}</div> */}
                    <div className="RightPlayerBox">
                        <SecondPlayerShuffledCard
                            cards={secondPlayerShuffledCard}
                            point={point}
                            secondPlayerScore={secondPlayerScore}
                            turn={turn}
                            playerBoardWinnerLoserImg={playerBoardWinnerLoserImg}
                        />
                    </div>
                </div>
            </PlayPageStyled>
        </>
    );
};
export default PlayPageOne;
