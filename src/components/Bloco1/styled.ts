import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  .logoThaisDesk {
    max-width: 59rem;
  }

  @media (max-width: 900px) {
    .logoThaisDesk {
      display: none;
    }
    .div-desk {
      nav {
        flex-direction: column;
        margin: 0 auto;
      }
    }
  }

  @media (min-width: 900px) {
    .thaismobile {
      display: none;
    }
    .logoThaisMobile {
      display: none;
    }
  }

  > section {
    display: block;
    margin: 0 auto;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 8.5rem;
    margin: 10rem 3rem 0 0;
    nav {
      display: flex;
      gap: 4rem;
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
    img {
      max-width: 51.6rem;
    }
  }
`
