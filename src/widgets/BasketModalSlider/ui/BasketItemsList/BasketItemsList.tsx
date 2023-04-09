import { Product, ProductCardBasket } from "entities/Product"
import { ChangeProductAmountInBasket, RemoveProductFromBasket } from "features/basketFeatures"
import styles from "./BasketItemsList.module.scss"

interface BasketItemsListProps {
    list: Product[]
}

export function BasketItemsList({ list }: BasketItemsListProps) {
    return (
        <div className={styles.container}>
            {!!list &&
                list.map(item => {
                    const { id, name, price, images } = item
                    return (
                        <ProductCardBasket
                            key={id}
                            id={id}
                            images={images}
                            name={name}
                            price={price}
                            currency="$"
                            Delete={<RemoveProductFromBasket id={id} />}
                            Counter={<ChangeProductAmountInBasket id={id} />}
                        />
                    )
                })}
        </div>
    )
}
