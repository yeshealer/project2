export const baseInputFieldStyle = {
    rounded: 'full',
    textAlign: 'right',
    _invalid: {
        color: `pink.500`,
    },
}

export const customVariantInputFieldStyle = {
    borderRadius: 'md',
    lineHeight: '25px',
    bg: 'linear-gradient(#15204c 0 0) padding-box, linear-gradient(to bottom, #CD74CC, #FFBD59 , #70DD88) border-box;',
    border: '1px solid transparent',
}

export const outlineNumberRounedInputField = {
    borderRadius: 'md',
    border: '1px solid transparent',
}

export const xlStyle = {
    fontSize: 'lg',
    px: '8',
    h: '16',
}

export const defaultPropsStyle: inputDefaultProps = {
    colorScheme: 'yellow',
    variant: 'primary',
    //@ts-expect-error
    focusBorderColor: 'yellow.500',
    errorBorderColor: 'pink.500',
}