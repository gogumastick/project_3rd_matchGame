import { Button, Input } from 'antd';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import { InputRef } from 'antd';
import { PlayPageStyled } from '@/features/PlayPageOne/styled';

interface RetryPlayerNameProps {
    btnName: string;
    setResultModal: (result: boolean) => void;
    setTurn: (result: boolean) => void;
    setFirstPlayerScore: (score: number) => void;
    setSecondPlayerScore: (score: number) => void;
    setRoster: (names: string[]) => void;
    shuffle: any;
}

const RetryPlayerName = ({
    btnName,
    setResultModal,
    setTurn,
    setFirstPlayerScore,
    setSecondPlayerScore,
    setRoster,
    shuffle,
}: RetryPlayerNameProps) => {
    const router = useRouter();

    // 선수명단
    // const [roster, setRoster] = useState<string[]>([]);
    // console.log('선수 이름 적는데 뭐오냐', roster);

    // const [btnName, setBtnName] =useState<string>('시작버튼')

    const firstPlayerNameRef = useRef<InputRef | null>(null);
    const secondPlayerNameRef = useRef<InputRef | null>(null);

    const rosterFormik = useFormik({
        initialValues: {
            firstPlayerName: '',
            secondPlayerName: '',
        },
        onSubmit: (values) => {
            if (values.firstPlayerName === '') {
                if (firstPlayerNameRef.current) {
                    firstPlayerNameRef.current.focus(); // 첫 번째 플레이어 이름에 포커스
                }
                return;
            } else if (values.secondPlayerName === '') {
                if (secondPlayerNameRef.current) {
                    secondPlayerNameRef.current.focus(); // 두 번째 플레이어 이름에 포커스
                }
                return;
            }

            const newRoster = [values.firstPlayerName, values.secondPlayerName];
            setRoster(newRoster);

            // 로컬 스토리지에 roster 저장
            localStorage.setItem('roster', JSON.stringify(newRoster));
            router.push('/playgame');
        },
    });

    // useEffect를 사용해 localStorage에서 값을 불러와 formik 초기값으로 설정
    useEffect(() => {
        const storedRoster = localStorage.getItem('roster');
        if (storedRoster) {
            const parsedRoster = JSON.parse(storedRoster);
            rosterFormik.setValues({
                firstPlayerName: parsedRoster[0] || '',
                secondPlayerName: parsedRoster[1] || '',
            });
        }
    }, []); // 컴포넌트가 마운트될 때 한 번만 실행

    const retry = () => {
        setResultModal(false);

        // localStorage.removeItem('roster');

        setTimeout(() => {
            const storedRoster = localStorage.getItem('roster');
            // console.log('storedRoster가 오나요?', storedRoster);
            if (storedRoster) {
                const parsedRoster = JSON.parse(storedRoster); // JSON 문자열을 배열로 변환
                // console.log('parsedRoster배열로 오나?', parsedRoster);

                // 플레이어들 선(先) 정하기
                const nameShuffle = shuffle([...parsedRoster]);
                // console.log('이름 섞기 작동하는가??', nameShuffle);

                setRoster(nameShuffle);
                setResultModal(false);
                setTurn(true);
                setFirstPlayerScore(4);
                setSecondPlayerScore(4);
            }
        }, 1);
    };

    return (
        <PlayPageStyled>
            <div className="inputPlayerNameFormBox">
                <form className="inputPlayerNameForm" onSubmit={rosterFormik.handleSubmit}>
                    <Input
                        name="firstPlayerName"
                        onChange={rosterFormik.handleChange}
                        value={rosterFormik.values.firstPlayerName}
                        placeholder="참가자 이름을 적어주세요"
                        ref={firstPlayerNameRef}
                    />
                    <Input
                        name="secondPlayerName"
                        onChange={rosterFormik.handleChange}
                        value={rosterFormik.values.secondPlayerName}
                        // value={roster.length > 0 ? roster[1] : rosterFormik.values.secondPlayerName}
                        placeholder="다른 참가자 이름도 적어주세요"
                        ref={secondPlayerNameRef}
                    />

                    <Button htmlType="submit" onClick={retry}>
                        {btnName}
                    </Button>
                </form>
            </div>
        </PlayPageStyled>
    );
};

export default RetryPlayerName;
