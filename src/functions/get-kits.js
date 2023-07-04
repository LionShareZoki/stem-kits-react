import Spencer from '../assets/Spencer.png';
import Jayd from '../assets/Jay-d.png';
import Nibble from '../assets/Nibble.png';

export default async function getKits(setKits) {
  const images = [Spencer, Jayd, Nibble];
  const additionalCardsCount = 3;
  const generateRandomHeading = () => {
    const adjectives = [
      'Amazing',
      'Incredible',
      'Fantastic',
      'Awesome',
      'Marvelous',
    ];
    const nouns = ['Product', 'Item', 'Gadget', 'Tool', 'Device'];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${randomAdjective} ${randomNoun}`;
  };

  const generateRandomText = () => {
    const texts = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Vestibulum ac leo in dolor commodo dignissim.',
      'Quisque sed mauris euismod, rutrum ante et, luctus ex.',
      'Fusce fringilla diam eu nulla lacinia, id ultricies risus dignissim.',
      'Sed quis metus vel ligula convallis eleifend sed vel sem.',
    ];
    const randomText = texts[Math.floor(Math.random() * texts.length)];
    return randomText;
  };

  const generateRandomPrice = () => {
    const minPrice = 500;
    const maxPrice = 1500;
    const randomPrice = Math.random() * (maxPrice - minPrice) + minPrice;
    return randomPrice.toFixed(0);
  };

  const generateRandomYears = () => {
    const minYears = 5;
    const maxYears = 16;
    const randomYears = Math.floor(
      Math.random() * (maxYears - minYears + 1) + minYears,
    );
    return `${randomYears}`;
  };

  const newCards = Array.from({ length: additionalCardsCount }, () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    const colors = ['#e3384d', '#fed600', '#00bed6'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const randomOldPrice = generateRandomPrice();
    const randomNewPrice = (
      parseFloat(randomOldPrice.substring(2))
        * (Math.random() * 0.2 + 0.7)
    ).toFixed(2);
    const discountPercentage = Math.round(
      (1 - randomNewPrice / parseFloat(randomOldPrice.substring(2)))
        * 100,
    ).toFixed(0);

    return {
      image: randomImage,
      title: generateRandomHeading(),
      description: generateRandomText(),
      price: randomOldPrice,
      discount: discountPercentage / 100,
      button: 'Shop now',
      ages: generateRandomYears(),
      color: randomColor,
    };
  });

  return new Promise((resolve) => {
    setKits((prevCards) => {
      resolve();
      return [...prevCards, ...newCards];
    });
  });
}
