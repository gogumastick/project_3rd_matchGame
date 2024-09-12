// import {
//     faA,
//     faB,
//     faC,
//     faD,
//     faE,
//     faF,
//     faH,
//     faK,
//     faL,
//     faM,
//     faN,
//     faP,
//     faR,
//     faS,
//     faX,
//     faY,
//     faShuffle,
//     faRepeat,
//     faReplyAll,
// } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PlayPageStyled } from './styled';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import Reset from '@/components/Reset';
import RuleModal from '@/components/RuleModal';

interface CardProps {
    id: number;
    name: string;
    src: {
        src: string;
    };
}

interface DealerShuffledCardProps {
    cards: CardProps[];
    pickedCard: CardProps | null;
    setPickedCard: (card: CardProps | null) => void;
    ruleBookImg: {
        id: number;
        name: string;

        src: {
            src: string;
        };
    }[];
    setRoster: (names: string[]) => void;
    logo: {
        id: number;
        name: string;

        src: {
            src: string;
        };
    };
    questionMark: {
        id: number;
        name: string;

        src: {
            src: string;
        };
    };
    setFirstPlayerScore: (score: number) => void;
    setSecondPlayerScore: (score: number) => void;
    shuffle: any;
}

const coverLetters = ['A', 'C', 'N', 'K', 'B', 'X', 'R', 'D', 'F', 'H', 'E', 'W', 'S', 'M', 'L', 'P'];

const DealerShuffledCard = ({
    cards,
    pickedCard,
    setPickedCard,
    ruleBookImg,
    setRoster,
    logo,
    questionMark,
    setFirstPlayerScore,
    setSecondPlayerScore,
    shuffle,
}: DealerShuffledCardProps) => {
    // console.log('Dealer 카드에 뭐가 오나 봅시다', cards);
    // console.log('Dealer pickedCard 카드에 뭐가 오나 봅시다', pickedCard);
    // console.log('Dealer setPickedCard 카드에 뭐가 오나 봅시다', setPickedCard);
    const [ruleModal, setRuleModal] = useState<boolean>(false);

    // 선택한 카드의 배열을 저장하자. 해당 배열 coverCard의 CSS변경을 줄거니깐
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    // console.log('activeIndex 넌 뭔데', activeIndex);

    const [onClick, setonClick] = useState<boolean | null>(false);
    // console.log('빠르게 클릭하면?', onClick);

    // questionMarkTimeout 설정으로 queue에 들어간 값을 리셋 시킬수 있다
    const questionMarkTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    // setTimeout(() => setActiveIndex(null), 5000) 이놈도 클릭하고 5초 이전에 클릭 하니깐 에러가 있어 보인다.
    const activeIndexTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    

    // id값이 1인 룰북 이미지 찾기
    const ruleImg = ruleBookImg.find((img) => img.id === 1);

    const pickBNT = (card: CardProps, index: number) => {
        // console.log('pickBNT card 뭐냐', card);
        // console.log('선택된 카드의 배열 index는', index);
        // const pickedCoverCard = cards[index];
        // console.log('coverCard의 배열 index를 찾고 싶습니다.',pickedCoverCard);

        // 선택한 카드가 현재 pickedCard와 동일한 경우에도 상태를 변경
        // 임시로 null로 설정하여 상태를 강제로 리셋
        setPickedCard(null);
        // setPickedCard(card);

        setActiveIndex(index);

        setonClick(false);

        // 짧은 지연 후 선택한 카드로 업데이트
        // setTimeout(() => {
        //     setPickedCard(card);
        //     setActiveIndex(null);
        // }, 3000);
        setTimeout(() => {
            setPickedCard(card);
        }, 5);
        // 5초뒤 coverCard index값 null로 해서 flip 닫기. 5초 전에 클릭 되면 queue에 다시 5초 뒤로 던져
        if (activeIndexTimeoutRef.current) {
            clearTimeout(activeIndexTimeoutRef.current);
        }
        activeIndexTimeoutRef.current = setTimeout(() => setActiveIndex(null), 5000);

        
        // questionMark 10초 뒤에 작동 (타이머 새로 설정)
        // 이전 타이머가 있으면 clearTimeout으로 취소
        if (questionMarkTimeoutRef.current) {
            clearTimeout(questionMarkTimeoutRef.current);
        }
        questionMarkTimeoutRef.current = setTimeout(() => setonClick(true), 10000);
    };

    // 모달 열기 함수
    const showModal = () => {
        setRuleModal(true);
    };

    return (
        <>
            <PlayPageStyled>
                <div className="centerWrap">
                    <div className="centerTopBox">
                        <div className="logo">
                            {logo && <img className="logoImg" src={logo.src.src} alt={logo.name} />}
                            {questionMark && (
                                <img
                                    className="questionMarkImg"
                                    src={questionMark.src.src}
                                    alt={questionMark.name}
                                    style={{ visibility: onClick ? 'visible' : 'hidden' }}
                                />
                            )}
                        </div>
                        <div className="ruleBook">
                            {ruleImg && (
                                <img
                                    className="ruleBookImg"
                                    src={ruleImg.src.src}
                                    alt={ruleImg.name}
                                    onClick={showModal}
                                />
                            )}
                        </div>
                        <div className="resetBox">
                            <Reset
                                setRoster={setRoster}
                                setFirstPlayerScore={setFirstPlayerScore}
                                setSecondPlayerScore={setSecondPlayerScore}
                                shuffle={shuffle}
                            />
                        </div>
                    </div>

                    <div className="dealerCardBox">
                        <div className="coverBox">
                            {coverLetters.map((letter, i) => (
                                <div key={i} className={`coverCard ${activeIndex === i ? 'flip' : ''}`}>
                                    {letter}
                                </div>
                            ))}
                            {/* <FontAwesomeIcon icon={faA} /> */}
                        </div>

                        <div className="dealerBox">
                            {cards.map((card: CardProps, index: number) => (
                                <img
                                    className="dealerCardImg"
                                    key={card.id}
                                    src={card.src.src}
                                    alt={card.name}
                                    onClick={() => pickBNT(card, index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <RuleModal ruleModal={ruleModal} setRuleModal={setRuleModal} />
            </PlayPageStyled>
        </>
    );
};

export default DealerShuffledCard;
