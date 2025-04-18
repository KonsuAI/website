/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        typography: {
            DEFAULT: {
                css: {
                    color: "white",
                    a: {
                        color: 'var(--color-konsu-cyan)',
                        transition: 'color 200ms linear',
                        '&:hover': {
                            color: 'var(--color-konsu-cyan-n01)',
                        },
                    },
                },
            },
        },
    }
}