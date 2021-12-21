import { Props as ButtonProps} from 'components/atoms/button/types';

export interface BillboardItem {
    id: string,
    banner: string
    cover: string
    delay?: number
    title: string
    description: string
    infoColor: string
    actions?: Array<BillboardItemActions>
}

export interface BillboardItemActions extends ButtonProps {
    id: string,
    action?: (e: Event) => void,
    bgColor: string,
    borderColor: string,
    icon?: string,
    label: string,
    route?: string,
    textColor?: string
}

export interface Props {
    items?: Array<BillboardItem>,
    customButtons: boolean
}


