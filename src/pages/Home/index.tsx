import { Bloco1 } from '../../components/Bloco1'
import { Bloco2 } from '../../components/Bloco2'
import { Bloco3 } from '../../components/Bloco3'
import { Bloco4 } from '../../components/Bloco4'

export function Home() {
  return (
    <>
      <Bloco3 />
      <Bloco1 />
      <Bloco2 />
      <Bloco4
        linkWpp={'https://api.whatsapp.com/send?phone=5581991131391'}
        linkInsta={'https://www.instagram.com/nutri.thaislopes/'}
        linkEmail={'mailto:thaislopesg6@gmail.com'}
      />
    </>
  )
}
