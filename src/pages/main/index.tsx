// 페이지 연결만 하는 기능

import MainPage from '@/features/MainPage';
import React, { useEffect } from 'react';

// interface MainProps{
//     btnName: string;
//     setResultModal: (result: boolean) => void;
//     setTurn: (result: boolean) => void;
//     setFirstPlayerScore: (score: number) => void;
//     setSecondPlayerScore: (score: number) => void;
//     setRoster: (names: string[]) => void;
//     shuffle:any;
// }

const Main = () => {
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

    // 브라우저가 닫힐 때 localStorage 삭제
    // useEffect(() => {
    //     const handleBeforeUnload = () => {
    //         localStorage.removeItem('roster');
    //     };

    //     window.addEventListener('beforeunload', handleBeforeUnload);

    //     return () => {
    //         window.removeEventListener('beforeunload', handleBeforeUnload);
    //     };
    // }, []);

    return <MainPage />;
};
export default Main;
