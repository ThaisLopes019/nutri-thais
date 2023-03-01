import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: end;

  > nav {
    display: flex;
    gap: 4rem;
    margin: 40px 40px 0 0;
    > button {
      background-color: transparent;
    }
    a {
      font-weight: 700;
      font-size: 1.9rem;
      line-height: 120%;
      color: ${({ theme }) => theme.SECONDARY_200};
      :hover {
        color: ${({ theme }) => theme.PRIMERY_200};
      }
    }
  }
  @media (min-width: 900px) {
    .logoMobile {
      display: none;
    }
  }
  @media (max-width: 900px) {
    justify-content: center;
    .navDesk {
      display: none;
    }
  }
  .logoMobile {
    width: 270px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  > nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 20px;
    gap: 4rem;
    padding-bottom: 165px;
    a {
      > button {
        background-color: transparent;
        font-weight: 700;
        font-size: 1.9rem;
        line-height: 120%;
        color: ${({ theme }) => theme.SECONDARY_200};
        :hover {
          color: ${({ theme }) => theme.PRIMERY_200};
        }
      }
      font-weight: 700;
      font-size: 1.9rem;
      line-height: 120%;
      color: ${({ theme }) => theme.SECONDARY_200};
      :hover {
        color: ${({ theme }) => theme.PRIMERY_200};
      }
    }
  }

  @media (min-width: 900px) {
    align-items: center;
    .thaisMobile {
      display: none;
    }
    .logoMobile {
      display: none;
    }
    .navMobile {
      display: none;
    }
    .deskAside {
      margin-right: 30px;
    }
  }
  @media (max-width: 900px) {
    .thaisDesk {
      display: none;
    }
    .logoDesk {
      display: none;
    }
  }
`
