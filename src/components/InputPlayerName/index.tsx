import { Button, Input } from 'antd';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import { InputRef } from 'antd';
import { PlayPageStyled } from '@/features/PlayPageOne/styled';
import { setTimeout } from 'timers';

interface InputPlayerNameProps {
    btnName: string;
    setLoadingImg: (loadingImg: boolean) => void;
}

const InputPlayerName = ({ btnName, setLoadingImg }: InputPlayerNameProps) => {
    const router = useRouter();
    // console.log('modal에서 쏜 btn값',btnName);

    // 선수명단
    const [roster, setRoster] = useState<string[]>([]);
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
            setLoadingImg(true);
            // setTimeout(()=>{setLoadingImg(false)},1700)
            // setTimeout(() => router.push('/playgame'), 10);
            
            setTimeout(() => {
                setLoadingImg(false);
                router.push('/playgame');
            }, 1700);
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
                    <Button htmlType="submit">{btnName}</Button>
                </form>
            </div>
        </PlayPageStyled>
    );
};

export default InputPlayerName;
