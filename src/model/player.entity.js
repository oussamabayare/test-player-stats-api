class Player {
  constructor({ id, firstname, lastname, shortname, sex, country, picture, data }) {
    (this.id = id), (this.firstname = firstname);
    this.lastname = lastname;
    this.shortname = shortname;
    this.sex = sex;
    this.country = country;
    this.picture = picture;
    this.data = data;
  }
}

module.exports = Player;
