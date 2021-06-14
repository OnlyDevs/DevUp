const { UserModel } = require('./models');

const fakeUsers = [
  {
    username: 'Mark Zuckerberg',
    bio: 'made a thing',
    languages: 'lizard',
    profileImgUrl:
      'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401',
  },
  {
    username: 'Galileo Galilei',
    bio: 'Made a telescope or something',
    languages: 'Italian',
    profileImgUrl:
      'https://www.randomlists.com/img/people/galileo_galilei.webp',
  },
  {
    username: 'Elon Musk',
    bio: 'sapce',
    languages: 'twitter',
    profileImgUrl: 'https://i.insider.com/60c735c26d855e0018157c77?width=700',
  },
  {
    username: 'Mlon Eusk',
    bio: 'MARES',
    languages: 'DOGE',
    profileImgUrl:
      'https://c.ndtvimg.com/2021-02/4lo9ita_elon-musk-dogecoin-meme_625x300_04_February_21.jpg',
  },
  {
    username: 'Buttercup Cumbersnatch',
    bio: 'MR DOCTOR',
    languages: 'THE ARCANE ARTS',
    profileImgUrl:
      'https://www.deccanherald.com/sites/dh/files/articleimages/2020/07/20/benedict-1595248231.jpg',
  },
  {
    username: 'Queen Lizzy II',
    bio: 'Her royal highness',
    languages: 'IDK english i guess',
    profileImgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Queen_Elizabeth_II_in_March_2015.jpg/1200px-Queen_Elizabeth_II_in_March_2015.jpg',
  },
];

const fake = async () => {
  for (const user of fakeUsers) {
    await UserModel.create(user);
  }
};

// fake();
