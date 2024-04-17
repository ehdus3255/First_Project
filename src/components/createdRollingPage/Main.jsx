import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import AddCard from './AddCard';
import Card from './Card';
import device from '../../config';

function Main() {
  const navigate = useNavigate();

  const handleToMoveEditPage = () => {
    navigate('edit');
  };

  return (
    <>
      <Container>
        <CardContainer>
          <EditBtnWithWeb onClick={handleToMoveEditPage}>
            수정하기
          </EditBtnWithWeb>
          <AddCard />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardContainer>
      </Container>
      <EditBtn onClick={handleToMoveEditPage}>수정하기</EditBtn>
      {/* Url을 카피했을 경우 UrlCopyPhrases가 위치할 자리 */}

      {/* 모달이 존재할때 카드 모달이 위치할 자리 */}
    </>
  );
}

const StyledBtn = styled.button`
  border-radius: 6px;
  background: var(--Purple-600);
  padding: 7px 17px;
  border: none;

  color: var(--White);
  font-size: 16px;
  font-weight: 400;
`;

const Container = styled.main`
  background-image: ${({ bgImg }) => (bgImg ? `url(${bgImg})` : 'none')};
  background-color: var(--Orange-200);
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  padding: 80px 0;
  min-height: 100%;
  height: auto;

  // 모달이 존재할때는 50%로 어둡게 처리
  filter: brightness(100%);

  @media ${device.mobile} {
    padding: 80px 24px;
  }
`;

const EditBtnWithWeb = styled(StyledBtn)`
  position: absolute;
  top: -45px;
  right: 25px;
  cursor: pointer;

  margin-bottom: 11px;

  @media ${device.tablet} {
    display: none;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

const EditBtn = styled(StyledBtn)`
  width: 720px;
  padding: 14px 0;
  cursor: pointer;

  position: fixed;
  bottom: 19px;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 1025px) {
    display: none;
  }
  
  @media ${device.mobile} {
    padding:14px; 24px;
    width: 320px;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 0 24px;

  position: relative;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default Main;