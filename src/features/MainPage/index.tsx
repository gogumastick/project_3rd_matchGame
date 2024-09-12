import { MainPageStyled } from './styled';
import { useState } from 'react';
import { useEffect } from 'react';
import InputPlayerName from '@/components/InputPlayerName';
import { playCard, point, logo } from '@/utill/data';

const MainPage = () => {
    // useEffect(() => {
    //     // 우클릭 비활성화
    //     const handleContextMenu = (e:any) => {
    //       e.preventDefault();
    //     };

    //     // F12 및 특정 키 조합 비활성화
    //     const handleKeyDown = (e:any) => {
    //       if (
    //         e.key === 'F12' ||
    //         (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C' || e.key === 'J')) ||
    //         (e.ctrlKey && e.key === 'U')
    //       ) {
    //         e.preventDefault();
    //       }
    //     };

    //     document.addEventListener('contextmenu', handleContextMenu);
    //     document.addEventListener('keydown', handleKeyDown);

    //     return () => {
    //       document.removeEventListener('contextmenu', handleContextMenu);
    //       document.removeEventListener('keydown', handleKeyDown);
    //     };
    //   }, []);

    const [loadingImg, setLoadingImg ] =useState<boolean>(false);
    return (
        <>
            <MainPageStyled>
            <div className={` ${loadingImg === true ? 'loadingImgBox' : 'noLoadingImgBox'}`} >
                <img src={logo.src.src} className='loadingImg'/>
                <span className="loadingText">Loading...</span>
                </div>
                <div className="mainBox">
                    <div className="logoBox"><img src={logo.src.src}/></div>
                    <div className="titleBox">게임 :: 같은 그림찾기 :: ⚒️</div>
                    <div className="ruleNameBox">🚩 룰 설명 🕹️</div>
                    <div className="explainBox">
                        <div>🧊 이 게임은 2명이서 플레이가 가능합니다</div><br/>
                        
                        <div>📌 각자의 플레이어 그림카드와 알파벳 그림판에 숨겨진 같은 그림을 찾아 결승점에 먼저 도달하는 플레이어가 이기는 게임입니다 </div><br/>
                        
                        <div>🧊 아래의 칸에 2명의 플레이어명을 적고 ⏯️시작버튼을 누르면 게임이 시작됩니다</div><br/>
                        
                        <div>🧊 선(先)플레이어는 작성한 플레이어명 순서와 관계 없이 게임이 시작되면서 랜덤으로 지정됩니다</div><br/>

                        <div className="pointBox">🧊 두 플레이어의 게임 시작점은 <div className="point"><img src={point.src.src}/></div> 이 위치하고 있습니다</div><br/>

                        <div className="pointJupmBox">🧊 자신의 순서는 상단 플레이어명 초록색 테두리나 점프하는 <div className="pointJupm"><img src={point.src.src}/></div> 으로 알 수 있습니다</div><br/>

                        <div>📌 알파벳으로 표기된 16개의 판 뒷면에는 각기 다른 그림이 숨겨져 있습니다</div><br/>
                        
                        {/* <div className="pointBox">🧊 <div className="point">공룡</div>을 한 칸 위로 이동 시키기 위해서는 <div className="point">공룡</div> 옆에 있는 그림카드와 같은 그림을 알파벳 그림판에 찾아내야 합니다</div> */}
                        <div>🧊 알파벳 그림판 클릭으로 그림판 뒷면이 확인 가능합니다  </div><br/>
                        <div className="pointJupmBox">🧊 클릭한 알파벳 그림판 뒷면과 점프하는 <div className="pointJupm"><img src={point.src.src}/></div>이 위치한 그림이 일치하면 한 칸 위로 이동할 수 있습니다 </div><br/>
                        <div>🧊 하지만 클릭한 알파벳 그림판 뒷면과 불일치한 경우 한 칸 아래로 내려가게 됩니다  </div><br/>
                        <div>🧊 그리고 기회는 상대 플레이어에게 넘어 갑니다</div><br/>
                        <div className="pointBox">🧊 한 플레이어의 <div className="point"><img src={point.src.src}/></div> 이 맨 위 결승점에 도달하거나 맨 아래에 도달하면 게임은 종료됩니다</div><br/>
                        
                        
                    </div>
                    <div className="inputPlayerNameBox">
                        <InputPlayerName btnName="시작버튼" setLoadingImg={setLoadingImg}/>
                    </div>
                </div>
                <div className="backgoundBox">
                    <div className=" firstGridBox">
                        {playCard.slice(0,15).map((card, index) => (
                            <img className="cardImg" key={card.id} src={card.src.src} alt={card.name} />
                        ))}
                    </div>
                    <div className=" secondGridBox">
                        {playCard.slice(0,15).map((card, index) => (
                            <img className="cardImg" key={card.id} src={card.src.src} alt={card.name} />
                        ))}
                    </div>
                </div>

                {/* <form onSubmit={rosterFormik.handleSubmit}>
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
                        placeholder="다른 참가자 이름도 적어주세요"
                        ref={secondPlayerNameRef}
                    />
                    <Button htmlType="submit">시작버튼</Button>
                </form> */}
            </MainPageStyled>
        </>
    );
};
export default MainPage;
