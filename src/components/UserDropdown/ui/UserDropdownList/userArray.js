import BasketImage from '@assets/bag.svg'
import FavoritesImage from '@assets/heart.svg'
import EyeImage from '@assets/eye.svg'
import BonusesImage from '@assets/bonuses.svg'
import AvatarImage from '@assets/avatar.svg'
import ListImage from '@assets/list.svg'
import LogOutImage from '@assets/logout.svg'

export const userArray = [
    {
        id: 1,
        name: 'Корзина',
        alt: 'basket-image',
        image: BasketImage,
        link: '/'
    },
    {
        id: 2,
        name: 'Избранное',
        alt: 'favorites-image',
        image: FavoritesImage,
        link: '/'
    },
    {
        id: 3,
        name: 'Просмотренные',
        alt: 'eye-image',
        image: EyeImage,
        link: '/'
    },
    {
        id: 4,
        name: 'Бонусы',
        alt: 'bonuses-image',
        image: BonusesImage,
        link: '/'
    },
    {
        id: 5,
        name: 'Личные данные',
        alt: 'avatar-image',
        image: AvatarImage,
        link: '/'
    },
    {
        id: 5,
        name: 'История покупок',
        alt: 'story-list-image',
        image: ListImage,
        link: '/'
    },
    {
        id: 6,
        name: 'Выйти',
        alt: 'logout-image',
        image: LogOutImage,
        link: '/'
    }
]