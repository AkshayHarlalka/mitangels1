function init() {
Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/179iJopQ1Zc2TmGZ5HVtkyiN4DQ4kzqEaFgeB08vx9_Q/pubhtml',
callback: function(data, tabletop) {
console.log(data)
},
simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)
