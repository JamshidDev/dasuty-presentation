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
        placeholderColor:getValueOfCssVariable('--text-icon-secondary1-mutable'),// Kiritish maydonlaridagi joylashtiruvchi matn rangi
        borderRadius: '12px',
        borderColor: getValueOfCssVariable('--line1-primary-mutable'), // Komponentlar uchun standart chegara rangi
    },
})
