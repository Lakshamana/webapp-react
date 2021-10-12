import { ButtonProps } from 'components/atoms/button/types';

export interface BillboardItem {
    banner: string
    cover: string
    delay?: number
    title: string
    description: string
    infoColor: string
    actions: BillboardItemActions[]
}

export interface BillboardItemActions extends ButtonProps {
    action?: (e: Event) => void,
    bgColor: string,
    borderColor: string,
    icon?: string,
    label: string,
    route?: string,
    textColor: string,
}

export interface BillboardItemsArr {
    items: BillboardItem[]
}

