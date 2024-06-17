module.exports = function ({ addUtilities }) {
  const newUtilities = {
    '.bg-normal': {
      "background-color": 'var(--normal-clr)',
    },

    '.bg-fire': {
      "background-color": 'var(--fire-clr)',
    },

    '.bg-water': {
      "background-color": 'var(--water-clr)',
    },

    '.bg-electric': {
      "background-color": 'var(--electric-clr)',
    },

    '.bg-grass': {
      "background-color": 'var(--grass-clr)',
    },

    '.bg-ice': {
      "background-color": 'var(--ice-clr)',
    },

    '.bg-fighting': {
      "background-color": 'var(--fighting-clr)',
    },

    '.bg-poison': {
      "background-color": 'var(--poison-clr)',
    },

    '.bg-ground': {
      "background-color": 'var(--ground-clr)',
    },

    '.bg-flying': {
      "background-color": 'var(--flying-clr)',
    },

    '.bg-psychic': {
      "background-color": 'var(--psychic-clr)',
    },

    '.bg-bug': {
      "background-color": 'var(--bug-clr)',
    },

    '.bg-rock': {
      "background-color": 'var(--rock-clr)',
    },

    '.bg-ghost': {
      "background-color": 'var(--ghost-clr)',
    },

    '.bg-dragon': {
      "background-color": 'var(--dragon-clr)',
    },

    '.bg-dark': {
      "background-color": 'var(--dark-clr)',
    },

    '.bg-steel': {
      "background-color": 'var(--steel-clr)',
    },

    '.bg-fairy': {
      "background-color": 'var(--fairy-clr)',
    },

    '.card-bg-normal': {
      "background-color": 'var(--normal-opacity)',
    },

    '.card-bg-fire': {
      "background-color": 'var(--fire-opacity)',
    },

    '.card-bg-water': {
      "background-color": 'var(--water-opacity)',
    },

    '.card-bg-electric': {
      "background-color": 'var(--electric-opacity)',
    },

    '.card-bg-grass': {
      "background-color": 'var(--grass-opacity)',
    },

    '.card-bg-ice': {
      "background-color": 'var(--ice-opacity)',
    },

    '.card-bg-fighting': {
      "background-color": 'var(--fighting-opacity)',
    },

    '.card-bg-poison': {
      "background-color": 'var(--poison-opacity)',
    },

    '.card-bg-ground': {
      "background-color": 'var(--ground-opacity)',
    },

    '.card-bg-flying': {
      "background-color": 'var(--flying-opacity)',
    },

    '.card-bg-psychic': {
      "background-color": 'var(--psychic-opacity)',
    },

    '.card-bg-bug': {
      "background-color": 'var(--bug-opacity)',
    },

    '.card-bg-rock': {
      "background-color": 'var(--rock-opacity)',
    },

    '.card-bg-ghost': {
      "background-color": 'var(--ghost-opacity)',
    },

    '.card-bg-dragon': {
      "background-color": 'var(--dragon-opacity)',
    },

    '.card-bg-dark': {
      "background-color": 'var(--dark-opacity)',
    },

    '.card-bg-steel': {
      "background-color": 'var(--steel-opacity)',
    },

    '.card-bg-fairy': {
      "background-color": 'var(--fairy-opacity)',
    },


    '.card-bg-normal-fire': {
      background: 'linear-gradient(137deg, var(--normal-opacity) 43%, var(--fire-opacity) 57%)',
    },

    '.card-bg-normal-water': {
      background: 'linear-gradient(137deg, var(--normal-opacity) 43%, var(--water-opacity) 57%)',
    },

    '.card-bg-normal-electric': {
      background: 'linear-gradient(137deg, var(--normal-opacity) 43%, var(--electric-opacity) 57%)',
    },

    '.card-bg-normal-grass': {
      background: 'linear-gradient(137deg, var(--normal-opacity) 43%, var(--grass-opacity) 57%)',
    },

    '.card-bg-normal-ice': {
      background: 'linear-gradient(137deg, var(--normal-opacity) 43%, var(--ice-opacity) 57%)',
    },

    '.card-bg-normal-fighting': {
      background: 'linear-gradient(137deg, var(--normal-opacity) 43%, var(--fighting-opacity) 57%)',
    },

    '.card-bg-normal-poison': {
      background: 'linear-gradient(137deg, var(--normal-opacity) 43%, var(--poison-opacity) 57%)',
    },

    '.card-bg-normal-ground': {
      background: 'linear-gradient(137deg, var(--normal-opacity) 43%, var(--ground-opacity) 57%)',
    },

    '.card-bg-normal-flying': {
      background: 'linear-gradient(137deg, var(--normal-opacity) 43%, var(--flying-opacity) 57%)',
    },

    '.card-bg-normal-psychic': {
      background: 'linear-gradient(137deg, var(--normal-opacity) 43%, var(--psychic-opacity) 57%)',
    },

    '.card-bg-normal-bug': {
      background: 'linear-gradient(137deg, var(--normal-opacity) 43%, var(--bug-opacity) 57%)',
    },

    '.card-bg-normal-rock': {
      background: 'linear-gradient(137deg, var(--normal-opacity) 43%, var(--rock-opacity) 57%)',
    },

    '.card-bg-normal-ghost': {
      background: 'linear-gradient(137deg, var(--normal-opacity) 43%, var(--ghost-opacity) 57%)',
    },

    '.card-bg-normal-dragon': {
      background: 'linear-gradient(137deg, var(--normal-opacity) 43%, var(--dragon-opacity) 57%)',
    },

    '.card-bg-normal-dark': {
      background: 'linear-gradient(137deg, var(--normal-opacity) 43%, var(--dark-opacity) 57%)',
    },

    '.card-bg-normal-steel': {
      background: 'linear-gradient(137deg, var(--normal-opacity) 43%, var(--steel-opacity) 57%)',
    },

    '.card-bg-normal-fairy': {
      background: 'linear-gradient(137deg, var(--normal-opacity) 43%, var(--fairy-opacity) 57%)',
    },

    '.card-bg-fire-normal': {
      background: 'linear-gradient(137deg, var(--fire-opacity) 43%, var(--normal-opacity) 57%)',
    },

    '.card-bg-fire-water': {
      background: 'linear-gradient(137deg, var(--fire-opacity) 43%, var(--water-opacity) 57%)',
    },

    '.card-bg-fire-electric': {
      background: 'linear-gradient(137deg, var(--fire-opacity) 43%, var(--electric-opacity) 57%)',
    },

    '.card-bg-fire-grass': {
      background: 'linear-gradient(137deg, var(--fire-opacity) 43%, var(--grass-opacity) 57%)',
    },

    '.card-bg-fire-ice': {
      background: 'linear-gradient(137deg, var(--fire-opacity) 43%, var(--ice-opacity) 57%)',
    },

    '.card-bg-fire-fighting': {
      background: 'linear-gradient(137deg, var(--fire-opacity) 43%, var(--fighting-opacity) 57%)',
    },

    '.card-bg-fire-poison': {
      background: 'linear-gradient(137deg, var(--fire-opacity) 43%, var(--poison-opacity) 57%)',
    },

    '.card-bg-fire-ground': {
      background: 'linear-gradient(137deg, var(--fire-opacity) 43%, var(--ground-opacity) 57%)',
    },

    '.card-bg-fire-flying': {
      background: 'linear-gradient(137deg, var(--fire-opacity) 43%, var(--flying-opacity) 57%)',
    },

    '.card-bg-fire-psychic': {
      background: 'linear-gradient(137deg, var(--fire-opacity) 43%, var(--psychic-opacity) 57%)',
    },

    '.card-bg-fire-bug': {
      background: 'linear-gradient(137deg, var(--fire-opacity) 43%, var(--bug-opacity) 57%)',
    },

    '.card-bg-fire-rock': {
      background: 'linear-gradient(137deg, var(--fire-opacity) 43%, var(--rock-opacity) 57%)',
    },

    '.card-bg-fire-ghost': {
      background: 'linear-gradient(137deg, var(--fire-opacity) 43%, var(--ghost-opacity) 57%)',
    },

    '.card-bg-fire-dragon': {
      background: 'linear-gradient(137deg, var(--fire-opacity) 43%, var(--dragon-opacity) 57%)',
    },

    '.card-bg-fire-dark': {
      background: 'linear-gradient(137deg, var(--fire-opacity) 43%, var(--dark-opacity) 57%)',
    },

    '.card-bg-fire-steel': {
      background: 'linear-gradient(137deg, var(--fire-opacity) 43%, var(--steel-opacity) 57%)',
    },

    '.card-bg-fire-fairy': {
      background: 'linear-gradient(137deg, var(--fire-opacity) 43%, var(--fairy-opacity) 57%)',
    },

    '.card-bg-water-normal': {
      background: 'linear-gradient(137deg, var(--water-opacity) 43%, var(--normal-opacity) 57%)',
    },

    '.card-bg-water-fire': {
      background: 'linear-gradient(137deg, var(--water-opacity) 43%, var(--fire-opacity) 57%)',
    },

    '.card-bg-water-electric': {
      background: 'linear-gradient(137deg, var(--water-opacity) 43%, var(--electric-opacity) 57%)',
    },

    '.card-bg-water-grass': {
      background: 'linear-gradient(137deg, var(--water-opacity) 43%, var(--grass-opacity) 57%)',
    },

    '.card-bg-water-ice': {
      background: 'linear-gradient(137deg, var(--water-opacity) 43%, var(--ice-opacity) 57%)',
    },

    '.card-bg-water-fighting': {
      background: 'linear-gradient(137deg, var(--water-opacity) 43%, var(--fighting-opacity) 57%)',
    },

    '.card-bg-water-poison': {
      background: 'linear-gradient(137deg, var(--water-opacity) 43%, var(--poison-opacity) 57%)',
    },

    '.card-bg-water-ground': {
      background: 'linear-gradient(137deg, var(--water-opacity) 43%, var(--ground-opacity) 57%)',
    },

    '.card-bg-water-flying': {
      background: 'linear-gradient(137deg, var(--water-opacity) 43%, var(--flying-opacity) 57%)',
    },

    '.card-bg-water-psychic': {
      background: 'linear-gradient(137deg, var(--water-opacity) 43%, var(--psychic-opacity) 57%)',
    },

    '.card-bg-water-bug': {
      background: 'linear-gradient(137deg, var(--water-opacity) 43%, var(--bug-opacity) 57%)',
    },

    '.card-bg-water-rock': {
      background: 'linear-gradient(137deg, var(--water-opacity) 43%, var(--rock-opacity) 57%)',
    },

    '.card-bg-water-ghost': {
      background: 'linear-gradient(137deg, var(--water-opacity) 43%, var(--ghost-opacity) 57%)',
    },

    '.card-bg-water-dragon': {
      background: 'linear-gradient(137deg, var(--water-opacity) 43%, var(--dragon-opacity) 57%)',
    },

    '.card-bg-water-dark': {
      background: 'linear-gradient(137deg, var(--water-opacity) 43%, var(--dark-opacity) 57%)',
    },

    '.card-bg-water-steel': {
      background: 'linear-gradient(137deg, var(--water-opacity) 43%, var(--steel-opacity) 57%)',
    },

    '.card-bg-water-fairy': {
      background: 'linear-gradient(137deg, var(--water-opacity) 43%, var(--fairy-opacity) 57%)',
    },

    '.card-bg-electric-normal': {
      background: 'linear-gradient(137deg, var(--electric-opacity) 43%, var(--normal-opacity) 57%)',
    },

    '.card-bg-electric-fire': {
      background: 'linear-gradient(137deg, var(--electric-opacity) 43%, var(--fire-opacity) 57%)',
    },

    '.card-bg-electric-water': {
      background: 'linear-gradient(137deg, var(--electric-opacity) 43%, var(--water-opacity) 57%)',
    },

    '.card-bg-electric-grass': {
      background: 'linear-gradient(137deg, var(--electric-opacity) 43%, var(--grass-opacity) 57%)',
    },

    '.card-bg-electric-ice': {
      background: 'linear-gradient(137deg, var(--electric-opacity) 43%, var(--ice-opacity) 57%)',
    },

    '.card-bg-electric-fighting': {
      background: 'linear-gradient(137deg, var(--electric-opacity) 43%, var(--fighting-opacity) 57%)',
    },

    '.card-bg-electric-poison': {
      background: 'linear-gradient(137deg, var(--electric-opacity) 43%, var(--poison-opacity) 57%)',
    },

    '.card-bg-electric-ground': {
      background: 'linear-gradient(137deg, var(--electric-opacity) 43%, var(--ground-opacity) 57%)',
    },

    '.card-bg-electric-flying': {
      background: 'linear-gradient(137deg, var(--electric-opacity) 43%, var(--flying-opacity) 57%)',
    },

    '.card-bg-electric-psychic': {
      background: 'linear-gradient(137deg, var(--electric-opacity) 43%, var(--psychic-opacity) 57%)',
    },

    '.card-bg-electric-bug': {
      background: 'linear-gradient(137deg, var(--electric-opacity) 43%, var(--bug-opacity) 57%)',
    },

    '.card-bg-electric-rock': {
      background: 'linear-gradient(137deg, var(--electric-opacity) 43%, var(--rock-opacity) 57%)',
    },

    '.card-bg-electric-ghost': {
      background: 'linear-gradient(137deg, var(--electric-opacity) 43%, var(--ghost-opacity) 57%)',
    },

    '.card-bg-electric-dragon': {
      background: 'linear-gradient(137deg, var(--electric-opacity) 43%, var(--dragon-opacity) 57%)',
    },

    '.card-bg-electric-dark': {
      background: 'linear-gradient(137deg, var(--electric-opacity) 43%, var(--dark-opacity) 57%)',
    },

    '.card-bg-electric-steel': {
      background: 'linear-gradient(137deg, var(--electric-opacity) 43%, var(--steel-opacity) 57%)',
    },

    '.card-bg-electric-fairy': {
      background: 'linear-gradient(137deg, var(--electric-opacity) 43%, var(--fairy-opacity) 57%)',
    },

    '.card-bg-grass-normal': {
      background: 'linear-gradient(137deg, var(--grass-opacity) 43%, var(--normal-opacity) 57%)',
    },

    '.card-bg-grass-fire': {
      background: 'linear-gradient(137deg, var(--grass-opacity) 43%, var(--fire-opacity) 57%)',
    },

    '.card-bg-grass-water': {
      background: 'linear-gradient(137deg, var(--grass-opacity) 43%, var(--water-opacity) 57%)',
    },

    '.card-bg-grass-electric': {
      background: 'linear-gradient(137deg, var(--grass-opacity) 43%, var(--electric-opacity) 57%)',
    },

    '.card-bg-grass-ice': {
      background: 'linear-gradient(137deg, var(--grass-opacity) 43%, var(--ice-opacity) 57%)',
    },

    '.card-bg-grass-fighting': {
      background: 'linear-gradient(137deg, var(--grass-opacity) 43%, var(--fighting-opacity) 57%)',
    },

    '.card-bg-grass-poison': {
      background: 'linear-gradient(137deg, var(--grass-opacity) 43%, var(--poison-opacity) 57%)',
    },

    '.card-bg-grass-ground': {
      background: 'linear-gradient(137deg, var(--grass-opacity) 43%, var(--ground-opacity) 57%)',
    },

    '.card-bg-grass-flying': {
      background: 'linear-gradient(137deg, var(--grass-opacity) 43%, var(--flying-opacity) 57%)',
    },

    '.card-bg-grass-psychic': {
      background: 'linear-gradient(137deg, var(--grass-opacity) 43%, var(--psychic-opacity) 57%)',
    },

    '.card-bg-grass-bug': {
      background: 'linear-gradient(137deg, var(--grass-opacity) 43%, var(--bug-opacity) 57%)',
    },

    '.card-bg-grass-rock': {
      background: 'linear-gradient(137deg, var(--grass-opacity) 43%, var(--rock-opacity) 57%)',
    },

    '.card-bg-grass-ghost': {
      background: 'linear-gradient(137deg, var(--grass-opacity) 43%, var(--ghost-opacity) 57%)',
    },

    '.card-bg-grass-dragon': {
      background: 'linear-gradient(137deg, var(--grass-opacity) 43%, var(--dragon-opacity) 57%)',
    },

    '.card-bg-grass-dark': {
      background: 'linear-gradient(137deg, var(--grass-opacity) 43%, var(--dark-opacity) 57%)',
    },

    '.card-bg-grass-steel': {
      background: 'linear-gradient(137deg, var(--grass-opacity) 43%, var(--steel-opacity) 57%)',
    },

    '.card-bg-grass-fairy': {
      background: 'linear-gradient(137deg, var(--grass-opacity) 43%, var(--fairy-opacity) 57%)',
    },

    '.card-bg-ice-normal': {
      background: 'linear-gradient(137deg, var(--ice-opacity) 43%, var(--normal-opacity) 57%)',
    },

    '.card-bg-ice-fire': {
      background: 'linear-gradient(137deg, var(--ice-opacity) 43%, var(--fire-opacity) 57%)',
    },

    '.card-bg-ice-water': {
      background: 'linear-gradient(137deg, var(--ice-opacity) 43%, var(--water-opacity) 57%)',
    },

    '.card-bg-ice-electric': {
      background: 'linear-gradient(137deg, var(--ice-opacity) 43%, var(--electric-opacity) 57%)',
    },

    '.card-bg-ice-grass': {
      background: 'linear-gradient(137deg, var(--ice-opacity) 43%, var(--grass-opacity) 57%)',
    },

    '.card-bg-ice-fighting': {
      background: 'linear-gradient(137deg, var(--ice-opacity) 43%, var(--fighting-opacity) 57%)',
    },

    '.card-bg-ice-poison': {
      background: 'linear-gradient(137deg, var(--ice-opacity) 43%, var(--poison-opacity) 57%)',
    },

    '.card-bg-ice-ground': {
      background: 'linear-gradient(137deg, var(--ice-opacity) 43%, var(--ground-opacity) 57%)',
    },

    '.card-bg-ice-flying': {
      background: 'linear-gradient(137deg, var(--ice-opacity) 43%, var(--flying-opacity) 57%)',
    },

    '.card-bg-ice-psychic': {
      background: 'linear-gradient(137deg, var(--ice-opacity) 43%, var(--psychic-opacity) 57%)',
    },

    '.card-bg-ice-bug': {
      background: 'linear-gradient(137deg, var(--ice-opacity) 43%, var(--bug-opacity) 57%)',
    },

    '.card-bg-ice-rock': {
      background: 'linear-gradient(137deg, var(--ice-opacity) 43%, var(--rock-opacity) 57%)',
    },

    '.card-bg-ice-ghost': {
      background: 'linear-gradient(137deg, var(--ice-opacity) 43%, var(--ghost-opacity) 57%)',
    },

    '.card-bg-ice-dragon': {
      background: 'linear-gradient(137deg, var(--ice-opacity) 43%, var(--dragon-opacity) 57%)',
    },

    '.card-bg-ice-dark': {
      background: 'linear-gradient(137deg, var(--ice-opacity) 43%, var(--dark-opacity) 57%)',
    },

    '.card-bg-ice-steel': {
      background: 'linear-gradient(137deg, var(--ice-opacity) 43%, var(--steel-opacity) 57%)',
    },

    '.card-bg-ice-fairy': {
      background: 'linear-gradient(137deg, var(--ice-opacity) 43%, var(--fairy-opacity) 57%)',
    },

    '.card-bg-fighting-normal': {
      background: 'linear-gradient(137deg, var(--fighting-opacity) 43%, var(--normal-opacity) 57%)',
    },

    '.card-bg-fighting-fire': {
      background: 'linear-gradient(137deg, var(--fighting-opacity) 43%, var(--fire-opacity) 57%)',
    },

    '.card-bg-fighting-water': {
      background: 'linear-gradient(137deg, var(--fighting-opacity) 43%, var(--water-opacity) 57%)',
    },

    '.card-bg-fighting-electric': {
      background: 'linear-gradient(137deg, var(--fighting-opacity) 43%, var(--electric-opacity) 57%)',
    },

    '.card-bg-fighting-grass': {
      background: 'linear-gradient(137deg, var(--fighting-opacity) 43%, var(--grass-opacity) 57%)',
    },

    '.card-bg-fighting-ice': {
      background: 'linear-gradient(137deg, var(--fighting-opacity) 43%, var(--ice-opacity) 57%)',
    },

    '.card-bg-fighting-poison': {
      background: 'linear-gradient(137deg, var(--fighting-opacity) 43%, var(--poison-opacity) 57%)',
    },

    '.card-bg-fighting-ground': {
      background: 'linear-gradient(137deg, var(--fighting-opacity) 43%, var(--ground-opacity) 57%)',
    },

    '.card-bg-fighting-flying': {
      background: 'linear-gradient(137deg, var(--fighting-opacity) 43%, var(--flying-opacity) 57%)',
    },

    '.card-bg-fighting-psychic': {
      background: 'linear-gradient(137deg, var(--fighting-opacity) 43%, var(--psychic-opacity) 57%)',
    },

    '.card-bg-fighting-bug': {
      background: 'linear-gradient(137deg, var(--fighting-opacity) 43%, var(--bug-opacity) 57%)',
    },

    '.card-bg-fighting-rock': {
      background: 'linear-gradient(137deg, var(--fighting-opacity) 43%, var(--rock-opacity) 57%)',
    },

    '.card-bg-fighting-ghost': {
      background: 'linear-gradient(137deg, var(--fighting-opacity) 43%, var(--ghost-opacity) 57%)',
    },

    '.card-bg-fighting-dragon': {
      background: 'linear-gradient(137deg, var(--fighting-opacity) 43%, var(--dragon-opacity) 57%)',
    },

    '.card-bg-fighting-dark': {
      background: 'linear-gradient(137deg, var(--fighting-opacity) 43%, var(--dark-opacity) 57%)',
    },

    '.card-bg-fighting-steel': {
      background: 'linear-gradient(137deg, var(--fighting-opacity) 43%, var(--steel-opacity) 57%)',
    },

    '.card-bg-fighting-fairy': {
      background: 'linear-gradient(137deg, var(--fighting-opacity) 43%, var(--fairy-opacity) 57%)',
    },

    '.card-bg-poison-normal': {
      background: 'linear-gradient(137deg, var(--poison-opacity) 43%, var(--normal-opacity) 57%)',
    },

    '.card-bg-poison-fire': {
      background: 'linear-gradient(137deg, var(--poison-opacity) 43%, var(--fire-opacity) 57%)',
    },

    '.card-bg-poison-water': {
      background: 'linear-gradient(137deg, var(--poison-opacity) 43%, var(--water-opacity) 57%)',
    },

    '.card-bg-poison-electric': {
      background: 'linear-gradient(137deg, var(--poison-opacity) 43%, var(--electric-opacity) 57%)',
    },

    '.card-bg-poison-grass': {
      background: 'linear-gradient(137deg, var(--poison-opacity) 43%, var(--grass-opacity) 57%)',
    },

    '.card-bg-poison-ice': {
      background: 'linear-gradient(137deg, var(--poison-opacity) 43%, var(--ice-opacity) 57%)',
    },

    '.card-bg-poison-fighting': {
      background: 'linear-gradient(137deg, var(--poison-opacity) 43%, var(--fighting-opacity) 57%)',
    },

    '.card-bg-poison-ground': {
      background: 'linear-gradient(137deg, var(--poison-opacity) 43%, var(--ground-opacity) 57%)',
    },

    '.card-bg-poison-flying': {
      background: 'linear-gradient(137deg, var(--poison-opacity) 43%, var(--flying-opacity) 57%)',
    },

    '.card-bg-poison-psychic': {
      background: 'linear-gradient(137deg, var(--poison-opacity) 43%, var(--psychic-opacity) 57%)',
    },

    '.card-bg-poison-bug': {
      background: 'linear-gradient(137deg, var(--poison-opacity) 43%, var(--bug-opacity) 57%)',
    },

    '.card-bg-poison-rock': {
      background: 'linear-gradient(137deg, var(--poison-opacity) 43%, var(--rock-opacity) 57%)',
    },

    '.card-bg-poison-ghost': {
      background: 'linear-gradient(137deg, var(--poison-opacity) 43%, var(--ghost-opacity) 57%)',
    },

    '.card-bg-poison-dragon': {
      background: 'linear-gradient(137deg, var(--poison-opacity) 43%, var(--dragon-opacity) 57%)',
    },

    '.card-bg-poison-dark': {
      background: 'linear-gradient(137deg, var(--poison-opacity) 43%, var(--dark-opacity) 57%)',
    },

    '.card-bg-poison-steel': {
      background: 'linear-gradient(137deg, var(--poison-opacity) 43%, var(--steel-opacity) 57%)',
    },

    '.card-bg-poison-fairy': {
      background: 'linear-gradient(137deg, var(--poison-opacity) 43%, var(--fairy-opacity) 57%)',
    },

    '.card-bg-ground-normal': {
      background: 'linear-gradient(137deg, var(--ground-opacity) 43%, var(--normal-opacity) 57%)',
    },

    '.card-bg-ground-fire': {
      background: 'linear-gradient(137deg, var(--ground-opacity) 43%, var(--fire-opacity) 57%)',
    },

    '.card-bg-ground-water': {
      background: 'linear-gradient(137deg, var(--ground-opacity) 43%, var(--water-opacity) 57%)',
    },

    '.card-bg-ground-electric': {
      background: 'linear-gradient(137deg, var(--ground-opacity) 43%, var(--electric-opacity) 57%)',
    },

    '.card-bg-ground-grass': {
      background: 'linear-gradient(137deg, var(--ground-opacity) 43%, var(--grass-opacity) 57%)',
    },

    '.card-bg-ground-ice': {
      background: 'linear-gradient(137deg, var(--ground-opacity) 43%, var(--ice-opacity) 57%)',
    },

    '.card-bg-ground-fighting': {
      background: 'linear-gradient(137deg, var(--ground-opacity) 43%, var(--fighting-opacity) 57%)',
    },

    '.card-bg-ground-poison': {
      background: 'linear-gradient(137deg, var(--ground-opacity) 43%, var(--poison-opacity) 57%)',
    },

    '.card-bg-ground-flying': {
      background: 'linear-gradient(137deg, var(--ground-opacity) 43%, var(--flying-opacity) 57%)',
    },

    '.card-bg-ground-psychic': {
      background: 'linear-gradient(137deg, var(--ground-opacity) 43%, var(--psychic-opacity) 57%)',
    },

    '.card-bg-ground-bug': {
      background: 'linear-gradient(137deg, var(--ground-opacity) 43%, var(--bug-opacity) 57%)',
    },

    '.card-bg-ground-rock': {
      background: 'linear-gradient(137deg, var(--ground-opacity) 43%, var(--rock-opacity) 57%)',
    },

    '.card-bg-ground-ghost': {
      background: 'linear-gradient(137deg, var(--ground-opacity) 43%, var(--ghost-opacity) 57%)',
    },

    '.card-bg-ground-dragon': {
      background: 'linear-gradient(137deg, var(--ground-opacity) 43%, var(--dragon-opacity) 57%)',
    },

    '.card-bg-ground-dark': {
      background: 'linear-gradient(137deg, var(--ground-opacity) 43%, var(--dark-opacity) 57%)',
    },

    '.card-bg-ground-steel': {
      background: 'linear-gradient(137deg, var(--ground-opacity) 43%, var(--steel-opacity) 57%)',
    },

    '.card-bg-ground-fairy': {
      background: 'linear-gradient(137deg, var(--ground-opacity) 43%, var(--fairy-opacity) 57%)',
    },

    '.card-bg-flying-normal': {
      background: 'linear-gradient(137deg, var(--flying-opacity) 43%, var(--normal-opacity) 57%)',
    },

    '.card-bg-flying-fire': {
      background: 'linear-gradient(137deg, var(--flying-opacity) 43%, var(--fire-opacity) 57%)',
    },

    '.card-bg-flying-water': {
      background: 'linear-gradient(137deg, var(--flying-opacity) 43%, var(--water-opacity) 57%)',
    },

    '.card-bg-flying-electric': {
      background: 'linear-gradient(137deg, var(--flying-opacity) 43%, var(--electric-opacity) 57%)',
    },

    '.card-bg-flying-grass': {
      background: 'linear-gradient(137deg, var(--flying-opacity) 43%, var(--grass-opacity) 57%)',
    },

    '.card-bg-flying-ice': {
      background: 'linear-gradient(137deg, var(--flying-opacity) 43%, var(--ice-opacity) 57%)',
    },

    '.card-bg-flying-fighting': {
      background: 'linear-gradient(137deg, var(--flying-opacity) 43%, var(--fighting-opacity) 57%)',
    },

    '.card-bg-flying-poison': {
      background: 'linear-gradient(137deg, var(--flying-opacity) 43%, var(--poison-opacity) 57%)',
    },

    '.card-bg-flying-ground': {
      background: 'linear-gradient(137deg, var(--flying-opacity) 43%, var(--ground-opacity) 57%)',
    },

    '.card-bg-flying-psychic': {
      background: 'linear-gradient(137deg, var(--flying-opacity) 43%, var(--psychic-opacity) 57%)',
    },

    '.card-bg-flying-bug': {
      background: 'linear-gradient(137deg, var(--flying-opacity) 43%, var(--bug-opacity) 57%)',
    },

    '.card-bg-flying-rock': {
      background: 'linear-gradient(137deg, var(--flying-opacity) 43%, var(--rock-opacity) 57%)',
    },

    '.card-bg-flying-ghost': {
      background: 'linear-gradient(137deg, var(--flying-opacity) 43%, var(--ghost-opacity) 57%)',
    },

    '.card-bg-flying-dragon': {
      background: 'linear-gradient(137deg, var(--flying-opacity) 43%, var(--dragon-opacity) 57%)',
    },

    '.card-bg-flying-dark': {
      background: 'linear-gradient(137deg, var(--flying-opacity) 43%, var(--dark-opacity) 57%)',
    },

    '.card-bg-flying-steel': {
      background: 'linear-gradient(137deg, var(--flying-opacity) 43%, var(--steel-opacity) 57%)',
    },

    '.card-bg-flying-fairy': {
      background: 'linear-gradient(137deg, var(--flying-opacity) 43%, var(--fairy-opacity) 57%)',
    },

    '.card-bg-psychic-normal': {
      background: 'linear-gradient(137deg, var(--psychic-opacity) 43%, var(--normal-opacity) 57%)',
    },

    '.card-bg-psychic-fire': {
      background: 'linear-gradient(137deg, var(--psychic-opacity) 43%, var(--fire-opacity) 57%)',
    },

    '.card-bg-psychic-water': {
      background: 'linear-gradient(137deg, var(--psychic-opacity) 43%, var(--water-opacity) 57%)',
    },

    '.card-bg-psychic-electric': {
      background: 'linear-gradient(137deg, var(--psychic-opacity) 43%, var(--electric-opacity) 57%)',
    },

    '.card-bg-psychic-grass': {
      background: 'linear-gradient(137deg, var(--psychic-opacity) 43%, var(--grass-opacity) 57%)',
    },

    '.card-bg-psychic-ice': {
      background: 'linear-gradient(137deg, var(--psychic-opacity) 43%, var(--ice-opacity) 57%)',
    },

    '.card-bg-psychic-fighting': {
      background: 'linear-gradient(137deg, var(--psychic-opacity) 43%, var(--fighting-opacity) 57%)',
    },

    '.card-bg-psychic-poison': {
      background: 'linear-gradient(137deg, var(--psychic-opacity) 43%, var(--poison-opacity) 57%)',
    },

    '.card-bg-psychic-ground': {
      background: 'linear-gradient(137deg, var(--psychic-opacity) 43%, var(--ground-opacity) 57%)',
    },

    '.card-bg-psychic-flying': {
      background: 'linear-gradient(137deg, var(--psychic-opacity) 43%, var(--flying-opacity) 57%)',
    },

    '.card-bg-psychic-bug': {
      background: 'linear-gradient(137deg, var(--psychic-opacity) 43%, var(--bug-opacity) 57%)',
    },

    '.card-bg-psychic-rock': {
      background: 'linear-gradient(137deg, var(--psychic-opacity) 43%, var(--rock-opacity) 57%)',
    },

    '.card-bg-psychic-ghost': {
      background: 'linear-gradient(137deg, var(--psychic-opacity) 43%, var(--ghost-opacity) 57%)',
    },

    '.card-bg-psychic-dragon': {
      background: 'linear-gradient(137deg, var(--psychic-opacity) 43%, var(--dragon-opacity) 57%)',
    },

    '.card-bg-psychic-dark': {
      background: 'linear-gradient(137deg, var(--psychic-opacity) 43%, var(--dark-opacity) 57%)',
    },

    '.card-bg-psychic-steel': {
      background: 'linear-gradient(137deg, var(--psychic-opacity) 43%, var(--steel-opacity) 57%)',
    },

    '.card-bg-psychic-fairy': {
      background: 'linear-gradient(137deg, var(--psychic-opacity) 43%, var(--fairy-opacity) 57%)',
    },

    '.card-bg-bug-normal': {
      background: 'linear-gradient(137deg, var(--bug-opacity) 43%, var(--normal-opacity) 57%)',
    },

    '.card-bg-bug-fire': {
      background: 'linear-gradient(137deg, var(--bug-opacity) 43%, var(--fire-opacity) 57%)',
    },

    '.card-bg-bug-water': {
      background: 'linear-gradient(137deg, var(--bug-opacity) 43%, var(--water-opacity) 57%)',
    },

    '.card-bg-bug-electric': {
      background: 'linear-gradient(137deg, var(--bug-opacity) 43%, var(--electric-opacity) 57%)',
    },

    '.card-bg-bug-grass': {
      background: 'linear-gradient(137deg, var(--bug-opacity) 43%, var(--grass-opacity) 57%)',
    },

    '.card-bg-bug-ice': {
      background: 'linear-gradient(137deg, var(--bug-opacity) 43%, var(--ice-opacity) 57%)',
    },

    '.card-bg-bug-fighting': {
      background: 'linear-gradient(137deg, var(--bug-opacity) 43%, var(--fighting-opacity) 57%)',
    },

    '.card-bg-bug-poison': {
      background: 'linear-gradient(137deg, var(--bug-opacity) 43%, var(--poison-opacity) 57%)',
    },

    '.card-bg-bug-ground': {
      background: 'linear-gradient(137deg, var(--bug-opacity) 43%, var(--ground-opacity) 57%)',
    },

    '.card-bg-bug-flying': {
      background: 'linear-gradient(137deg, var(--bug-opacity) 43%, var(--flying-opacity) 57%)',
    },

    '.card-bg-bug-psychic': {
      background: 'linear-gradient(137deg, var(--bug-opacity) 43%, var(--psychic-opacity) 57%)',
    },

    '.card-bg-bug-rock': {
      background: 'linear-gradient(137deg, var(--bug-opacity) 43%, var(--rock-opacity) 57%)',
    },

    '.card-bg-bug-ghost': {
      background: 'linear-gradient(137deg, var(--bug-opacity) 43%, var(--ghost-opacity) 57%)',
    },

    '.card-bg-bug-dragon': {
      background: 'linear-gradient(137deg, var(--bug-opacity) 43%, var(--dragon-opacity) 57%)',
    },

    '.card-bg-bug-dark': {
      background: 'linear-gradient(137deg, var(--bug-opacity) 43%, var(--dark-opacity) 57%)',
    },

    '.card-bg-bug-steel': {
      background: 'linear-gradient(137deg, var(--bug-opacity) 43%, var(--steel-opacity) 57%)',
    },

    '.card-bg-bug-fairy': {
      background: 'linear-gradient(137deg, var(--bug-opacity) 43%, var(--fairy-opacity) 57%)',
    },

    '.card-bg-rock-normal': {
      background: 'linear-gradient(137deg, var(--rock-opacity) 43%, var(--normal-opacity) 57%)',
    },

    '.card-bg-rock-fire': {
      background: 'linear-gradient(137deg, var(--rock-opacity) 43%, var(--fire-opacity) 57%)',
    },

    '.card-bg-rock-water': {
      background: 'linear-gradient(137deg, var(--rock-opacity) 43%, var(--water-opacity) 57%)',
    },

    '.card-bg-rock-electric': {
      background: 'linear-gradient(137deg, var(--rock-opacity) 43%, var(--electric-opacity) 57%)',
    },

    '.card-bg-rock-grass': {
      background: 'linear-gradient(137deg, var(--rock-opacity) 43%, var(--grass-opacity) 57%)',
    },

    '.card-bg-rock-ice': {
      background: 'linear-gradient(137deg, var(--rock-opacity) 43%, var(--ice-opacity) 57%)',
    },

    '.card-bg-rock-fighting': {
      background: 'linear-gradient(137deg, var(--rock-opacity) 43%, var(--fighting-opacity) 57%)',
    },

    '.card-bg-rock-poison': {
      background: 'linear-gradient(137deg, var(--rock-opacity) 43%, var(--poison-opacity) 57%)',
    },

    '.card-bg-rock-ground': {
      background: 'linear-gradient(137deg, var(--rock-opacity) 43%, var(--ground-opacity) 57%)',
    },

    '.card-bg-rock-flying': {
      background: 'linear-gradient(137deg, var(--rock-opacity) 43%, var(--flying-opacity) 57%)',
    },

    '.card-bg-rock-psychic': {
      background: 'linear-gradient(137deg, var(--rock-opacity) 43%, var(--psychic-opacity) 57%)',
    },

    '.card-bg-rock-bug': {
      background: 'linear-gradient(137deg, var(--rock-opacity) 43%, var(--bug-opacity) 57%)',
    },

    '.card-bg-rock-ghost': {
      background: 'linear-gradient(137deg, var(--rock-opacity) 43%, var(--ghost-opacity) 57%)',
    },

    '.card-bg-rock-dragon': {
      background: 'linear-gradient(137deg, var(--rock-opacity) 43%, var(--dragon-opacity) 57%)',
    },

    '.card-bg-rock-dark': {
      background: 'linear-gradient(137deg, var(--rock-opacity) 43%, var(--dark-opacity) 57%)',
    },

    '.card-bg-rock-steel': {
      background: 'linear-gradient(137deg, var(--rock-opacity) 43%, var(--steel-opacity) 57%)',
    },

    '.card-bg-rock-fairy': {
      background: 'linear-gradient(137deg, var(--rock-opacity) 43%, var(--fairy-opacity) 57%)',
    },

    '.card-bg-ghost-normal': {
      background: 'linear-gradient(137deg, var(--ghost-opacity) 43%, var(--normal-opacity) 57%)',
    },

    '.card-bg-ghost-fire': {
      background: 'linear-gradient(137deg, var(--ghost-opacity) 43%, var(--fire-opacity) 57%)',
    },

    '.card-bg-ghost-water': {
      background: 'linear-gradient(137deg, var(--ghost-opacity) 43%, var(--water-opacity) 57%)',
    },

    '.card-bg-ghost-electric': {
      background: 'linear-gradient(137deg, var(--ghost-opacity) 43%, var(--electric-opacity) 57%)',
    },

    '.card-bg-ghost-grass': {
      background: 'linear-gradient(137deg, var(--ghost-opacity) 43%, var(--grass-opacity) 57%)',
    },

    '.card-bg-ghost-ice': {
      background: 'linear-gradient(137deg, var(--ghost-opacity) 43%, var(--ice-opacity) 57%)',
    },

    '.card-bg-ghost-fighting': {
      background: 'linear-gradient(137deg, var(--ghost-opacity) 43%, var(--fighting-opacity) 57%)',
    },

    '.card-bg-ghost-poison': {
      background: 'linear-gradient(137deg, var(--ghost-opacity) 43%, var(--poison-opacity) 57%)',
    },

    '.card-bg-ghost-ground': {
      background: 'linear-gradient(137deg, var(--ghost-opacity) 43%, var(--ground-opacity) 57%)',
    },

    '.card-bg-ghost-flying': {
      background: 'linear-gradient(137deg, var(--ghost-opacity) 43%, var(--flying-opacity) 57%)',
    },

    '.card-bg-ghost-psychic': {
      background: 'linear-gradient(137deg, var(--ghost-opacity) 43%, var(--psychic-opacity) 57%)',
    },

    '.card-bg-ghost-bug': {
      background: 'linear-gradient(137deg, var(--ghost-opacity) 43%, var(--bug-opacity) 57%)',
    },

    '.card-bg-ghost-rock': {
      background: 'linear-gradient(137deg, var(--ghost-opacity) 43%, var(--rock-opacity) 57%)',
    },

    '.card-bg-ghost-dragon': {
      background: 'linear-gradient(137deg, var(--ghost-opacity) 43%, var(--dragon-opacity) 57%)',
    },

    '.card-bg-ghost-dark': {
      background: 'linear-gradient(137deg, var(--ghost-opacity) 43%, var(--dark-opacity) 57%)',
    },

    '.card-bg-ghost-steel': {
      background: 'linear-gradient(137deg, var(--ghost-opacity) 43%, var(--steel-opacity) 57%)',
    },

    '.card-bg-ghost-fairy': {
      background: 'linear-gradient(137deg, var(--ghost-opacity) 43%, var(--fairy-opacity) 57%)',
    },

    '.card-bg-dragon-normal': {
      background: 'linear-gradient(137deg, var(--dragon-opacity) 43%, var(--normal-opacity) 57%)',
    },

    '.card-bg-dragon-fire': {
      background: 'linear-gradient(137deg, var(--dragon-opacity) 43%, var(--fire-opacity) 57%)',
    },

    '.card-bg-dragon-water': {
      background: 'linear-gradient(137deg, var(--dragon-opacity) 43%, var(--water-opacity) 57%)',
    },

    '.card-bg-dragon-electric': {
      background: 'linear-gradient(137deg, var(--dragon-opacity) 43%, var(--electric-opacity) 57%)',
    },

    '.card-bg-dragon-grass': {
      background: 'linear-gradient(137deg, var(--dragon-opacity) 43%, var(--grass-opacity) 57%)',
    },

    '.card-bg-dragon-ice': {
      background: 'linear-gradient(137deg, var(--dragon-opacity) 43%, var(--ice-opacity) 57%)',
    },

    '.card-bg-dragon-fighting': {
      background: 'linear-gradient(137deg, var(--dragon-opacity) 43%, var(--fighting-opacity) 57%)',
    },

    '.card-bg-dragon-poison': {
      background: 'linear-gradient(137deg, var(--dragon-opacity) 43%, var(--poison-opacity) 57%)',
    },

    '.card-bg-dragon-ground': {
      background: 'linear-gradient(137deg, var(--dragon-opacity) 43%, var(--ground-opacity) 57%)',
    },

    '.card-bg-dragon-flying': {
      background: 'linear-gradient(137deg, var(--dragon-opacity) 43%, var(--flying-opacity) 57%)',
    },

    '.card-bg-dragon-psychic': {
      background: 'linear-gradient(137deg, var(--dragon-opacity) 43%, var(--psychic-opacity) 57%)',
    },

    '.card-bg-dragon-bug': {
      background: 'linear-gradient(137deg, var(--dragon-opacity) 43%, var(--bug-opacity) 57%)',
    },

    '.card-bg-dragon-rock': {
      background: 'linear-gradient(137deg, var(--dragon-opacity) 43%, var(--rock-opacity) 57%)',
    },

    '.card-bg-dragon-ghost': {
      background: 'linear-gradient(137deg, var(--dragon-opacity) 43%, var(--ghost-opacity) 57%)',
    },

    '.card-bg-dragon-dark': {
      background: 'linear-gradient(137deg, var(--dragon-opacity) 43%, var(--dark-opacity) 57%)',
    },

    '.card-bg-dragon-steel': {
      background: 'linear-gradient(137deg, var(--dragon-opacity) 43%, var(--steel-opacity) 57%)',
    },

    '.card-bg-dragon-fairy': {
      background: 'linear-gradient(137deg, var(--dragon-opacity) 43%, var(--fairy-opacity) 57%)',
    },

    '.card-bg-dark-normal': {
      background: 'linear-gradient(137deg, var(--dark-opacity) 43%, var(--normal-opacity) 57%)',
    },

    '.card-bg-dark-fire': {
      background: 'linear-gradient(137deg, var(--dark-opacity) 43%, var(--fire-opacity) 57%)',
    },

    '.card-bg-dark-water': {
      background: 'linear-gradient(137deg, var(--dark-opacity) 43%, var(--water-opacity) 57%)',
    },

    '.card-bg-dark-electric': {
      background: 'linear-gradient(137deg, var(--dark-opacity) 43%, var(--electric-opacity) 57%)',
    },

    '.card-bg-dark-grass': {
      background: 'linear-gradient(137deg, var(--dark-opacity) 43%, var(--grass-opacity) 57%)',
    },

    '.card-bg-dark-ice': {
      background: 'linear-gradient(137deg, var(--dark-opacity) 43%, var(--ice-opacity) 57%)',
    },

    '.card-bg-dark-fighting': {
      background: 'linear-gradient(137deg, var(--dark-opacity) 43%, var(--fighting-opacity) 57%)',
    },

    '.card-bg-dark-poison': {
      background: 'linear-gradient(137deg, var(--dark-opacity) 43%, var(--poison-opacity) 57%)',
    },

    '.card-bg-dark-ground': {
      background: 'linear-gradient(137deg, var(--dark-opacity) 43%, var(--ground-opacity) 57%)',
    },

    '.card-bg-dark-flying': {
      background: 'linear-gradient(137deg, var(--dark-opacity) 43%, var(--flying-opacity) 57%)',
    },

    '.card-bg-dark-psychic': {
      background: 'linear-gradient(137deg, var(--dark-opacity) 43%, var(--psychic-opacity) 57%)',
    },

    '.card-bg-dark-bug': {
      background: 'linear-gradient(137deg, var(--dark-opacity) 43%, var(--bug-opacity) 57%)',
    },

    '.card-bg-dark-rock': {
      background: 'linear-gradient(137deg, var(--dark-opacity) 43%, var(--rock-opacity) 57%)',
    },

    '.card-bg-dark-ghost': {
      background: 'linear-gradient(137deg, var(--dark-opacity) 43%, var(--ghost-opacity) 57%)',
    },

    '.card-bg-dark-dragon': {
      background: 'linear-gradient(137deg, var(--dark-opacity) 43%, var(--dragon-opacity) 57%)',
    },

    '.card-bg-dark-steel': {
      background: 'linear-gradient(137deg, var(--dark-opacity) 43%, var(--steel-opacity) 57%)',
    },

    '.card-bg-dark-fairy': {
      background: 'linear-gradient(137deg, var(--dark-opacity) 43%, var(--fairy-opacity) 57%)',
    },

    '.card-bg-steel-normal': {
      background: 'linear-gradient(137deg, var(--steel-opacity) 43%, var(--normal-opacity) 57%)',
    },

    '.card-bg-steel-fire': {
      background: 'linear-gradient(137deg, var(--steel-opacity) 43%, var(--fire-opacity) 57%)',
    },

    '.card-bg-steel-water': {
      background: 'linear-gradient(137deg, var(--steel-opacity) 43%, var(--water-opacity) 57%)',
    },

    '.card-bg-steel-electric': {
      background: 'linear-gradient(137deg, var(--steel-opacity) 43%, var(--electric-opacity) 57%)',
    },

    '.card-bg-steel-grass': {
      background: 'linear-gradient(137deg, var(--steel-opacity) 43%, var(--grass-opacity) 57%)',
    },

    '.card-bg-steel-ice': {
      background: 'linear-gradient(137deg, var(--steel-opacity) 43%, var(--ice-opacity) 57%)',
    },

    '.card-bg-steel-fighting': {
      background: 'linear-gradient(137deg, var(--steel-opacity) 43%, var(--fighting-opacity) 57%)',
    },

    '.card-bg-steel-poison': {
      background: 'linear-gradient(137deg, var(--steel-opacity) 43%, var(--poison-opacity) 57%)',
    },

    '.card-bg-steel-ground': {
      background: 'linear-gradient(137deg, var(--steel-opacity) 43%, var(--ground-opacity) 57%)',
    },

    '.card-bg-steel-flying': {
      background: 'linear-gradient(137deg, var(--steel-opacity) 43%, var(--flying-opacity) 57%)',
    },

    '.card-bg-steel-psychic': {
      background: 'linear-gradient(137deg, var(--steel-opacity) 43%, var(--psychic-opacity) 57%)',
    },

    '.card-bg-steel-bug': {
      background: 'linear-gradient(137deg, var(--steel-opacity) 43%, var(--bug-opacity) 57%)',
    },

    '.card-bg-steel-rock': {
      background: 'linear-gradient(137deg, var(--steel-opacity) 43%, var(--rock-opacity) 57%)',
    },

    '.card-bg-steel-ghost': {
      background: 'linear-gradient(137deg, var(--steel-opacity) 43%, var(--ghost-opacity) 57%)',
    },

    '.card-bg-steel-dragon': {
      background: 'linear-gradient(137deg, var(--steel-opacity) 43%, var(--dragon-opacity) 57%)',
    },

    '.card-bg-steel-dark': {
      background: 'linear-gradient(137deg, var(--steel-opacity) 43%, var(--dark-opacity) 57%)',
    },

    '.card-bg-steel-fairy': {
      background: 'linear-gradient(137deg, var(--steel-opacity) 43%, var(--fairy-opacity) 57%)',
    },

    '.card-bg-fairy-normal': {
      background: 'linear-gradient(137deg, var(--fairy-opacity) 43%, var(--normal-opacity) 57%)',
    },

    '.card-bg-fairy-fire': {
      background: 'linear-gradient(137deg, var(--fairy-opacity) 43%, var(--fire-opacity) 57%)',
    },

    '.card-bg-fairy-water': {
      background: 'linear-gradient(137deg, var(--fairy-opacity) 43%, var(--water-opacity) 57%)',
    },

    '.card-bg-fairy-electric': {
      background: 'linear-gradient(137deg, var(--fairy-opacity) 43%, var(--electric-opacity) 57%)',
    },

    '.card-bg-fairy-grass': {
      background: 'linear-gradient(137deg, var(--fairy-opacity) 43%, var(--grass-opacity) 57%)',
    },

    '.card-bg-fairy-ice': {
      background: 'linear-gradient(137deg, var(--fairy-opacity) 43%, var(--ice-opacity) 57%)',
    },

    '.card-bg-fairy-fighting': {
      background: 'linear-gradient(137deg, var(--fairy-opacity) 43%, var(--fighting-opacity) 57%)',
    },

    '.card-bg-fairy-poison': {
      background: 'linear-gradient(137deg, var(--fairy-opacity) 43%, var(--poison-opacity) 57%)',
    },

    '.card-bg-fairy-ground': {
      background: 'linear-gradient(137deg, var(--fairy-opacity) 43%, var(--ground-opacity) 57%)',
    },

    '.card-bg-fairy-flying': {
      background: 'linear-gradient(137deg, var(--fairy-opacity) 43%, var(--flying-opacity) 57%)',
    },

    '.card-bg-fairy-psychic': {
      background: 'linear-gradient(137deg, var(--fairy-opacity) 43%, var(--psychic-opacity) 57%)',
    },

    '.card-bg-fairy-bug': {
      background: 'linear-gradient(137deg, var(--fairy-opacity) 43%, var(--bug-opacity) 57%)',
    },

    '.card-bg-fairy-rock': {
      background: 'linear-gradient(137deg, var(--fairy-opacity) 43%, var(--rock-opacity) 57%)',
    },

    '.card-bg-fairy-ghost': {
      background: 'linear-gradient(137deg, var(--fairy-opacity) 43%, var(--ghost-opacity) 57%)',
    },

    '.card-bg-fairy-dragon': {
      background: 'linear-gradient(137deg, var(--fairy-opacity) 43%, var(--dragon-opacity) 57%)',
    },

    '.card-bg-fairy-dark': {
      background: 'linear-gradient(137deg, var(--fairy-opacity) 43%, var(--dark-opacity) 57%)',
    },

    '.card-bg-fairy-steel': {
      background: 'linear-gradient(137deg, var(--fairy-opacity) 43%, var(--steel-opacity) 57%)',
    },

  }

  addUtilities(newUtilities, {
    variants: ['responsive', 'hover'],
  })
}