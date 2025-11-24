declare global {
    type Color = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
    type Size = 'tiny' | 'small' | 'medium' | 'large'
    type Radius = 'none' | 'tiny' | 'small' | 'medium' | 'large' | 'full'
    type Variant = 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'dot'
    type Placement =
        | 'auto'
        | 'top'
        | 'top-start'
        | 'top-end'
        | 'bottom'
        | 'bottom-start'
        | 'bottom-end'
        | 'left'
        | 'left-start'
        | 'left-end'
        | 'right'
        | 'right-start'
        | 'right-end'
    type Trigger = 'hover' | 'click' | 'focus' | 'manual'
}

export {}
