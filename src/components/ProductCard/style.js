import styled from 'styled-components';
import { device } from '../../styles/device';

export const Wrapper = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 300px 1fr;

  @media ${device.tabletM} {
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: 600px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Description = styled.div`
  padding: 20px;
  min-width: 0;

  @media ${device.tabletM} {
    padding: 50px;
  }
`;

export const Title = styled.h2``;
export const Price = styled.p`
  margin-top: 24px;
`;

export const Specification = styled.div`
  margin-top: 16px;
`;

export const Sizes = styled.div`
  display: flex;
  grid-gap: 4px;
  margin-top: 24px;
`;

export const Size = styled.button`
  width: 34px;
  height: 34px;
  background-color: transparent;
  color: black;
  border: 1px solid #cccccc;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }

  @media ${device.laptopS} {
    width: 44px;
    height: 44px;
  }
`;

export const Button = styled.button`
  border: none;
  color: black;
  background-color: #eff303;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  padding: 16px 0;
  margin-top: 8px;
`;

export const ControlButton = styled.button`
  border: none;
  background-color: #fefefe;
  border-radius: 50%;
  cursor: pointer;
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &:first-child {
    left: 10px;
  }
  &:last-child {
    right: 10px;
  }
`;

export const FullDetails = styled.a`
  cursor: pointer;
  display: flex;
  margin-top: 24px;
  justify-content: space-between;
  text-decoration: none;
  color: black;
`;
