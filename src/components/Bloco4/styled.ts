import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.SECONDARY_100};

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10rem;

  .div-text {
    display: flex;
    flex-direction: column;
    margin-top: 10rem;
    gap: 1.5rem;

    p {
      font-weight: 700;
      font-size: 4rem;
      line-height: 130%;
      color: ${({ theme }) => theme.SECONDARY_300};
    }
    span {
      font-size: 2.52rem;
      line-height: 110%;
      color: ${({ theme }) => theme.DARK};
    }
  }

  .div-icon {
    display: flex;
    gap: 11.7rem;
  }

  @media (max-width: 900px) {
    .div-text {
      > p {
        font-size: 2.4rem;
        line-height: 130%;
      }
      > span {
        font-size: 1.8rem;
        line-height: 140%;
      }
    }
    .div-icon {
      gap: 6rem;
      > a {
        img {
          width: 3.5rem;
          height: 3.5rem;
        }
      }
    }
  }
`
export const Footer = styled.footer`
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme.SECONDARY_200};
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 1.68rem;
    line-height: 110%;
    color: ${({ theme }) => theme.LIGHT};
  }
`
