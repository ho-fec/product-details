const faker = require('faker');
const { Product, mongoose } = require('./index');
let imageCounter = 0;
faker.seed(42);

const randInt = (low, high) => {
  return Math.floor(Math.random() * (high - low) + low);
};
for (let i = 0; i < 1000; i++) {
  const newProduct = {};
  newProduct.id = i;
  newProduct.name = faker.commerce.productName();
  newProduct.breadcrumbs = [];
  const breadcrumbCount = randInt(2, 4);
  for (let i = 0; i < breadcrumbCount; i++) {
    let crumb = faker.lorem.word();
    crumb = crumb[0].toUpperCase() + crumb.slice(1);
    newProduct.breadcrumbs.push(crumb);
  }
  newProduct.description = faker.lorem
    .lines(1)
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ')
    .slice(0, -1);
  newProduct.size = faker.lorem.word();
  newProduct.item_number = randInt(10000000, 99999999);
  newProduct.price = faker.commerce.price();
  newProduct.details = faker.lorem.paragraphs();
  newProduct.how_to_use = faker.lorem.paragraphs();
  newProduct.ingredients = faker.lorem.paragraphs();
  newProduct.about_the_brand = faker.lorem.paragraphs();
  newProduct.shipping_returns = faker.lorem.paragraphs();
  newProduct.exclusive = faker.random.boolean();
  newProduct.average_rating = Math.random() * 5;
  newProduct.review_count = randInt(0, 5000);
  newProduct.loves_count = randInt(0, 50000);
  newProduct.media = [];
  const imageCount = randInt(1, 5);
  for (let i = 0; i < imageCount; i++) {
    let mediaObj = {};
    mediaObj.type = 'image';
    mediaObj.url = `https://picsum.photos/1920?image=${imageCounter}`;
    imageCounter++;
    newProduct.media.push(mediaObj);
  }
  // const videoCount = randInt(0, 3);
  // for (let i = 0; i < videoCount; i++) {
  //   let mediaObj = {};
  //   mediaObj.type = 'image';
  //   mediaObj.url =
  //     'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
  //   newProduct.media.push(mediaObj);
  // }
  const newProductDoc = new Product(newProduct);
  newProductDoc.save();
}

console.log('data generation complete');
