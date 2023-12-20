interface defaultProps {
    size?: "xl" | string | number | undefined;
    variant?: "outline" | "primary" | "secondary" | "outlineSelected" | "filled" | undefined;
    colorScheme?: string | undefined;
}

interface inputDefaultProps {
    size?: "xl" | undefined;
    variant?: "primary" | undefined;
    colorScheme?: string | undefined;
}

interface tabDefaultProps {
    size?: string | number | undefined;
    variant?: "enclosed" | "line" | undefined;
    colorScheme?: string | undefined;
}

interface dividerDefaultProps {
    size?: string | number | undefined;
    variant?: "thick" | undefined;
    colorScheme?: string | undefined;
}

interface TooltipDefaultProps {
    size?: string | number | undefined;
    variant?: "primary" | undefined;
    colorScheme?: string | undefined;
}