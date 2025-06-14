/**
 * @typedef {import('naive-ui').GlobalThemeOverrides} GlobalThemeOverrides
 */

/**
 * Customizing naive ui screen breakpoints to match with tailwind css breakpoints
 */
export const naiveBreakpoints = { 
    xs: 0, 
    s: 640, 
    m: 768, 
    l: 1024, 
    xl: 1280, 
    "2xl": 1568
 }


const getValueOfCssVariable = (variableName) => {
    const rootStyles = getComputedStyle(document.documentElement);
    return rootStyles.getPropertyValue(variableName).trim();
}

/** @returns {GlobalThemeOverrides} */
export const customTheme = ()=>({
    common: {
        primaryColor:getValueOfCssVariable('--brand-background-text-immutable'),
        primaryColorHover:getValueOfCssVariable('--brand-background-text-immutable'),
        primaryColorPressed:getValueOfCssVariable('--brand-background-text-immutable'),

        inputColor:getValueOfCssVariable('--background-default-mutable'),

        placeholderColor:getValueOfCssVariable('--text-icon-secondary1-mutable'),// Kiritish maydonlaridagi joylashtiruvchi matn rangi
        borderRadius: '12px',
        borderColor: getValueOfCssVariable('--line1-primary-mutable'), // Komponentlar uchun standart chegara rangi
    },
    Progress: {
        fillColor: getValueOfCssVariable('--brand-background-text-immutable'),
    },
    Tabs: {
        tabColorSegment: getValueOfCssVariable('--brand-background-text-immutable'),
        tabTextColorSegment: getValueOfCssVariable('--text-icon-primary1-mutable'),
        tabTextColorActiveSegment: getValueOfCssVariable('--bright-immutable'),
        tabBorderRadius: "24px",    
    }
})
