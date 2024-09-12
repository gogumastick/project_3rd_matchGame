import { Modal } from 'antd';
import { point } from '@/utill/data';
// import { MainPageStyled } from '../../features/MainPage/styled';
import { RuleModalStyled } from './styled';

interface RuleModalProps {
    // resultModal: boolean;
    // modalMessage: string;
    // setResultModal: (result: boolean) => void;
    // setTurn:(result:boolean) => void
    // setFirstPlayerScore: (score: number) => void;
    // setSecondPlayerScore: (score: number) => void;
    // setRoster: (names: string[]) => void;
    // shuffle: any;
    ruleModal: boolean;
    setRuleModal: (open: boolean) => void;
}

const RuleModal = ({ ruleModal, setRuleModal }: RuleModalProps) => {
    // 모달 닫기 함수
    const handleOk = () => {
        setRuleModal(false);
    };

    // const handleCancel = () => {
    //     setRuleModal(false);
    // };

    return (
        
            <Modal
                title="🚩 게임 룰 설명 🕹️"
                
                open={ruleModal}
                onOk={handleOk}
                okText="게임으로 돌아가기"
                // onCancel={handleCancel}
                cancelButtonProps={{ style: { display: 'none' } }}
            ><RuleModalStyled>
                <div>🧊 이 게임은 2명이서 플레이가 가능합니다</div>
                        
                <div>📌 각자의 플레이어 그림카드와 알파벳 그림판에 숨겨진 같은 그림을 찾아 결승점에 먼저 도달하는 플레이어가 이기는 게임입니다 </div>
                                                
                <div>🧊 선(先)플레이어는 게임이 시작되면 랜덤하게 지정됩니다</div>

                <div className="pointBox">🧊 두 플레이어의 게임 시작점은 <div className="point"><img src={point.src.src}/></div> 이 위치하고 있습니다</div>

                <div className="pointJupmBox">🧊 자신의 순서는 상단 플레이어명 초록색 테두리나 점프하는 <div className="pointJupm"><img src={point.src.src}/></div> 으로 알 수 있습니다</div>

                <div>📌 알파벳으로 표기된 16개의 판 뒷면에는 각기 다른 그림이 숨겨져 있습니다</div>
                
               <div>🧊 알파벳 그림판 클릭으로 그림판 뒷면이 확인 가능합니다  </div>
                <div className="pointJupmBox">🧊 클릭한 알파벳 그림판 뒷면과 점프하는 <div className="pointJupm"><img src={point.src.src}/></div>이 위치한 그림이 일치하면 한 칸 위로 이동할 수 있습니다 </div>
                <div>🧊 하지만 클릭한 알파벳 그림판 뒷면과 불일치한 경우 한 칸 아래로 내려가게 됩니다  </div>
                <div>🧊 그리고 기회는 상대 플레이어에게 넘어 갑니다</div>
                <div className="pointBox">🧊 한 플레이어의 <div className="point"><img src={point.src.src}/></div> 이 맨 위 결승점에 도달하거나 맨 아래에 도달하면 게임은 종료됩니다</div>
                </RuleModalStyled>
            </Modal>
        
    );
};
export default RuleModal;
