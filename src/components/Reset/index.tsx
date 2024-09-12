import { PlayPageStyled } from '@/features/PlayPageOne/styled';
import { faReplyAll } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ResetProps {
    setRoster: (names: string[]) => void;
    setFirstPlayerScore: (score: number) => void;
    setSecondPlayerScore: (score: number) => void;
    shuffle:any;
}

const Reset = ({ setRoster, setFirstPlayerScore, setSecondPlayerScore,shuffle }: ResetProps) => {
    // 다시 플레이어 순서 및 카드 섞기 버튼 기능
    // const shuffle = (array: any) => {
    //     return array.sort(() => Math.random() - 0.5);
    // };
    const onShuffle = () => {
        const storedRoster = localStorage.getItem('roster');
        if (storedRoster) {
            const parsedRoster = JSON.parse(storedRoster); // JSON 문자열을 배열로 변환
            const nameShuffle = shuffle([...parsedRoster]);
            setRoster(nameShuffle);
            setFirstPlayerScore(4);
            setSecondPlayerScore(4);
        }
    };

    return (
        <PlayPageStyled>
            <div className="resetBNT" >
                <FontAwesomeIcon className="icon-hover" icon={faReplyAll} onClick={() => onShuffle()} />
                <div className="reset">reply-All</div>
            </div>
        </PlayPageStyled>
    );
};

export default Reset;
