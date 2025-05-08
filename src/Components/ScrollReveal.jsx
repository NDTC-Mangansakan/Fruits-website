// src/utils/scrollConfigs.js

export const baseReveal = {
    distance: '60px',
    duration: 1000,
    easing: 'ease-in-out',
    delay:400,
    reset: false,
};

export const revealLeft = {
    ...baseReveal,
    origin: 'left',
};

export const revealRight = {
    ...baseReveal,
    origin: 'right',
};

export const revealTop = {
    ...baseReveal,
    origin: 'top',
};

export const revealBottom = {
    ...baseReveal,
    origin: 'bottom',
};

export const revealInterval = {
    ...revealBottom,
    interval:300
};