import { Modal, Button } from 'antd';
import InputPlayerName from '@/components/InputPlayerName';
import RetryPlayerName from '@/components/RetryPlayerName';

interface ResultModalProps {
    resultModal: boolean;
    modalMessage: string;
    setResultModal: (result: boolean) => void;
    setTurn:(result:boolean) => void
    setFirstPlayerScore: (score: number) => void;
    setSecondPlayerScore: (score: number) => void;
    setRoster: (names: string[]) => void;
    shuffle: any;
}

const ResultModal = ({ resultModal, modalMessage, setResultModal,setTurn,setFirstPlayerScore,setSecondPlayerScore,setRoster, shuffle }: ResultModalProps) => {
    // 테스트 메세지 발사
    const testMSG = () => {
        alert('개발중입니다');
        return;
    };

    // const handleOk = () => {
    //     setResultModal(false);
    // };

    return (
        <Modal
            title="게임 결과"
            open={resultModal}
            // onOk={handleOk}
            // okText="replyModal"
            cancelButtonProps={{ style: { display: 'none' } }} // 취소 버튼을 숨기고 확인 버튼만 보여줍니다.
            footer={[
                // <Button key="reply" onClick={handleOk}>
                //     reply
                // </Button>,
                <Button key="test" onClick={testMSG}>
                    난 테스트
                </Button>,
            ]}
        >
            <p>{modalMessage}</p>
            <br />
            <p>한판 더?</p>
            
            <RetryPlayerName btnName="reply" setResultModal={setResultModal} setTurn={setTurn} setFirstPlayerScore={setFirstPlayerScore}setSecondPlayerScore={setSecondPlayerScore} setRoster={setRoster} shuffle={shuffle}/>
        </Modal>
    );
};
export default ResultModal;
