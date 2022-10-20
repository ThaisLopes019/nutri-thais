import styled from 'styled-components'

export const Container = styled.div`

    width:100%;
    background-color: ${({ theme }) => theme.LIGHT};
    padding: 8rem 0;
    text-align: center;

    h2{
        font-weight: 700;
        font-size: 40px;
        line-height: 130%;
        margin-bottom: 1.5rem;
        color: ${({ theme }) => theme.SECONDARY_300};
    }
    >span{
        font-weight: 400;
        font-size: 25.2px;
        line-height: 110%;
        color: ${({ theme }) => theme.DARK};
        
    }

    >div{
        display:flex;
        align-items: center;
        margin: 6rem auto 0 auto;
        max-width: 90rem;
        .txt{
            margin-left: 8rem;
            max-width: 42.8rem;
            >ul{
                
                >li{
                    font-weight: 600;
                    font-size: 2.8rem;
                    margin-bottom: 4rem;
                    color: ${({ theme }) => theme.PRIMERY_200};
                    text-align: justify;
                    a{
                        font-weight: 600;
                        font-size: 2.8rem;
                        line-height: 110%;
                        color: ${({ theme }) => theme.PRIMERY_200};

                    }
                }
                
            }
        }
    }

@media(max-width: 900px) {
    padding: 4rem;

> h2 {
  font-size: 24px;
}
span {
  font-size: 18px;
  text-align: center;
}

>div{
    display:flex;
    flex-direction:column;
    margin: 3.5rem auto 0 auto;

    .txt{
        margin: 0;
        >ul{
            margin-top: 3.4rem;
            >li{
                font-size: 19.8px;
                margin-bottom: 1.4rem;
                >a{
                    font-size: 19.8px;
                }
            }

        }
    }
    
    

}
`
