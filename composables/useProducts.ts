export function useProducts() {
  const products = [
    {
      title: 'Long Sleeeved Patterned Flannel Shirt',
      image: '/images/tops/LongSleevePatternedFlannelShirt.jpeg',
      priceNow: '$50',
      priceWas: '$60',
      category: 'tops',
    },
    {
      title: '40s & Shorties Text Logo Tee',
      image: '/images/tops/40sShortiesTextLogoTee.jpeg',
      priceNow: '$40',
      priceWas: '$45',
      category: 'tops',
    },
    {
      title: 'Long Sleeeved Patterned Flannel Shirt',
      image: '/images/tops/LongSleevePatternedFlannelShirt2.jpeg',
      priceNow: '$40',
      priceWas: '$45',
      category: 'tops',
    },
    {
      title: 'Southern Jacquard Flannel Shirt',
      image: '/images/tops/SouthwesternJacquardFlannelShirt.jpeg',
      priceNow: '$40',
      priceWas: '$45',
      category: 'tops',
    },
    {
      title: 'Boardies&reg; Refresher Swim Short',
      image: '/images/shorts/BoardiesRefresherSwimShort.jpeg',
      priceNow: '$40',
      priceWas: '$45',
      category: 'shorts',
    },
    {
      title: 'Lucien Stripe Knit Volley Short',
      image: '/images/shorts/LucienStripeKnitVolleyShort.jpeg',
      priceNow: '$40',
      priceWas: '$45',
      category: 'shorts',
    },
    {
      title: 'Andy Warhol Patterned Boxer Brief',
      image: '/images/accesories/CalvinKleinXAndyWarholPatternedBoxerBrief.jpeg',
      priceNow: '$40',
      priceWas: '$45',
      category: 'accesories',
    },
    {
      title: 'Vibes Sports Stock',
      image: '/images/accesories/VibesSportsStock.jpeg',
      priceNow: '$40',
      priceWas: '$45',
      category: 'accesories',
    },
  ];

  function shuffle(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffledProducts = shuffle([...products]);

  return { products: shuffledProducts };
}
