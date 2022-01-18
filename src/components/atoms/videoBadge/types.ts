type VideoBadgeType = 'default' | 'live' | 'social' | 'social-end' | 'view-counter';

export interface VideoBadgeProps {
  children: any
  kind?: VideoBadgeType
}

export const defaultProps = {
  kind: 'default',
}
