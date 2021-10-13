import { ButtonProps } from 'components/atoms/button/types';

export interface BillboardItem {
    banner: string
    cover: string
    delay?: number
    title: string
    description: string
    infoColor: string
}

export interface BillboardItemActions extends ButtonProps {
    action?: (e: Event) => void,
    bgColor: string,
    borderColor: string,
    icon?: string,
    label: string,
    route?: string,
    textColor: string
}

export interface Props {
    items: Array<BillboardItem>,
    actions: Array<BillboardItemActions>
}

