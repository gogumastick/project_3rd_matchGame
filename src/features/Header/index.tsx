import { useRouter } from 'next/router';
import { HeaderStyled } from './styled';
// import { useState } from 'react';

const Header = () => {
    const router = useRouter();
    const path = router.asPath;
    // console.log('asPath 정체',path);
    // const [clothType, setClothType] = useState('');

    const choiceNav = (type: string) => {
        // console.log('type안오나?', type);

        // setClothType(type);
        router.push(`/clothshop/${type}`);
    };

    return (
        <HeaderStyled>
            <div className={`nav ${path === '/login' ? 'noneHead' : ''}`}>
                <div className="navBox">
                    <div
                        onClick={() => {
                            router.push('/');
                        }}
                    >
                        Home
                    </div>

                    <div
                        onClick={() => {
                            choiceNav('type1');
                            // router.push(`/ClothShopPage/${clothType}`);
                        }}
                    >
                        상의
                    </div>
                    <div
                        onClick={() => {
                            choiceNav('type2');
                            // router.push(`/ClothShopPage`);
                        }}
                    >
                        조끼
                    </div>
                    <div
                        onClick={() => {
                            choiceNav('type3');
                            // router.push(`/company/${1}`);
                        }}
                    >
                        하의
                    </div>
                </div>
            </div>
        </HeaderStyled>
    );
};
export default Header;
