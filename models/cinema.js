const Cinema = function (films) {
  this.films = films;
};
Cinema.prototype.filmTitles = function () {
  return this.films.map((film) => {
    return film.title;
  })
};
Cinema.prototype.findFilm = function (title) {
  return this.films.find((film) => {
    return film.title === title;
  })
};
Cinema.prototype.findByGenre = function (genre) {
  return this.films.filter((film) => {
    return film.genre === genre;
  })
};
Cinema.prototype.checkByYear = function (year) {
  return this.films.some((film) => {
    return film.year === year;
  })
};
Cinema.prototype.checkAllLength = function (length) {
  return this.films.every(( film) => {
    return film.length > length;
  })
};
Cinema.prototype.totalRunTime = function () {
  return this.films.reduce((total, film) => {
    return total + film.length;
  }, 0)
};
Cinema.prototype.filmsByYear = function (year) {
  return this.films.filter((film) => {
    return film.year === year;
  })
};

Cinema.prototype.filmsByProperty = function (property, value) {
  return this.films.filter((film) => {
    return film[property] === value;
  })
};

module.exports = Cinema;
