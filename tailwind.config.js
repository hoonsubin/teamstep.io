const plugin = require('tailwindcss/plugin');
const _ = require('lodash');

const gradient = plugin(function({ addUtilities, e, theme, variants }) {
    const gradients = theme('gradients', {});
    const gradientVariants = variants('gradients', []);

    const utilities = _.map(gradients, ([start, end], name) => ({
        [`.bg-gradient-${e(name)}`]: {
            backgroundImage: `linear-gradient(to right, ${start}, ${end})`,
        },
    }));

    addUtilities(utilities, gradientVariants);
});

module.exports = {
    purge: [
        './src/**/*.js',
        './src/**/*.jsx',
        './src/**/*.ts',
        './src/**/*.tsx',
    ],
    theme: {
        gradients: theme => ({
            primary: [theme('colors.primary'), theme('colors.secondary')],
        }),
        themes: {
            dark: {
                bg: '#111',
                bgalt: '#000',
                'color-default': '#eee',
                'color-1': '#DB2440',
                'color-2': '#E25066',
                border: '#718096',
                primary: '#C3073F',
                medium: '#222',
            },
        },
        colors: {
            bg: '#fff',
            bgalt: '#f5f5f5',
            'color-default': '#333',
            'color-1': '#1469EB',
            'color-2': '#4387EF',
            'color-3': '#aeb4c5',
            primary: '#6888df',
            secondary: '#F4094F',
            link: '#0a71c5',
            medium: '#cfd8dc',
            white: '#fff',
            black: '#000',
            transparent: 'rgba(0,0,0,0)',
            error: '#ef5350',
            success: '#8bc34a',
        },
        extend: {
            fontSize: {
                '7xl': '5rem',
            },
            spacing: {
                '1px': '1px',
                '2px': '2px',
            },
            fontWeight: ['hover', 'focus'],
        },
    },
    variants: {},
    plugins: [require(`tailwind-theme-switcher`), gradient],
};
