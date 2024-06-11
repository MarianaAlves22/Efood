import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, removeItem, startCheckout } from '../../store/reducers/cart'
import { priceFormat } from '../FoodList'
import Checkout from '../Checkout'
import {
  AddCartButton,
  CartContainer,
  CartStage,
  DeleteItemButton,
  ImageItem,
  InfosCart,
  InfosItem,
  ItemCart,
  Overlay,
  Sidebar
} from './styles'

const Cart = () => {
  const { isOpen, pedido, isAddress, isCart } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()
  const openCart = () => {
    dispatch(close())
  }
  const activeCheckout = () => {
    if (getTotalPrice() > 0) {
      dispatch(startCheckout())
    } else {
      alert('Não há itens no carrinho')
    }
  }

  const getTotalPrice = () => {
    return pedido.reduce((acumulator, actualValue) => {
      return (acumulator += actualValue.preco)
    }, 0)
  }
  const remItem = (id: number) => {
    dispatch(removeItem(id))
  }
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={openCart} />
      <Sidebar>
        <CartStage className={!isCart ? 'is-checkout' : ''}>
          <ul>
            {pedido.map((p) => (
              <ItemCart key={p.id}>
                <ImageItem src={p.foto} alt="" />
                <InfosItem>
                  <h3>{p.nome}</h3>
                  <span>{priceFormat(p.preco)}</span>
                </InfosItem>
                <DeleteItemButton type="button" onClick={() => remItem(p.id)} />
              </ItemCart>
            ))}
          </ul>
          <InfosCart>
            <p>Valor total</p>
            <span>{priceFormat(getTotalPrice())}</span>
          </InfosCart>
          <AddCartButton onClick={activeCheckout}>
            Continuar com a entrega
          </AddCartButton>
        </CartStage>
        <Checkout checkoutStart={isAddress} priceTotal={getTotalPrice()} />
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
