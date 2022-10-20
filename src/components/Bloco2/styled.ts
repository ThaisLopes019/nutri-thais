import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.PRIMERY_100};

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem 0;

  > h2 {
    font-weight: 700;
    font-size: 40px;
    line-height: 130%;
    color: ${({ theme }) => theme.SECONDARY_300};
    margin-bottom: 1.5rem;
  }
  > span {
    font-weight: 400;
    font-size: 25.2px;
    line-height: 110%;
    color: ${({ theme }) => theme.DARK};
  }

  > div {
    width: 100%;
    max-width: 97.8rem;
    display: flex;
    justify-content: space-between;
    margin-top: 6rem;

    > div {
      max-width: 45rem;
      > p {
        font-weight: 400;
        font-size: 25.2px;
        line-height: 180%;
        text-align: center;
        color: ${({ theme }) => theme.DARK};
      }
    }
  }

  @media (max-width: 900px) {
    padding: 4rem;

    > h2 {
      font-size: 24px;
    }
    span {
      font-size: 18px;
      text-align: center;
    }
    .content {
      flex-direction: column-reverse;
      margin-top: 3.5rem;

      .txt {
        > p {
          margin-top: 3.5rem;
          font-size: 18px;
        }
      }
    }
  }
`
