import Tag from '../../Tag'
import close from '../../../assets/images/close.png'
import pizza from '../../../assets/images/pizza.png'
import {
  CloseImg,
  ModalImage,
  Poupap,
  PoupapContainer,
  SectionImgModal
} from './styles'

const ModalPoupap = () => (
  <div className="conatiner">
    <PoupapContainer>
      <Poupap>
        <CloseImg>
          <img src={close} />
        </CloseImg>
        <SectionImgModal>
          <ModalImage src={pizza} />
        </SectionImgModal>
        <div>
          <h3>Pizza Marguerita</h3>
          <p>
            A pizza Margherita é uma pizza clássica da culinária italiana,
            reconhecida por sua simplicidade e sabor inigualável. Ela é feita
            com uma base de massa fina e crocante, coberta com molho de tomate
            fresco, queijo mussarela de alta qualidade, manjericão fresco e
            azeite de oliva extra-virgem. A combinação de sabores é perfeita,
            com o molho de tomate suculento e ligeiramente ácido, o queijo
            derretido e cremoso e as folhas de manjericão frescas, que adicionam
            um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que
            agrada a todos os paladares e é uma ótima opção para qualquer
            ocasião. <br />
            Serve 2 a 3 pessoas
          </p>
          <Tag size="big">Adicionar ao carrinho - R$ 60,90</Tag>
        </div>
      </Poupap>
    </PoupapContainer>
  </div>
)

export default ModalPoupap
