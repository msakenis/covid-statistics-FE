import React from 'react';
import * as S from './PageWrapper.style';

interface PageWrapperProps {
    children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
    return <S.Wrapper>{children}</S.Wrapper>;
};

export default PageWrapper;
