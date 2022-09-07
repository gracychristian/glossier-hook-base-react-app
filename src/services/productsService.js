const products = [
  {
    _id: 1,
    name: "Nykaa So Creme! Creamy Matte Lipstick",
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/3/23790c58904245710927_0.jpg",
    shades: [
      {
        id: 1,
        img: "https://images-static.nykaa.com/media/icons/8904245711030_walkthewalk.jpg?tr=w-50,h-50",
        price: 254,
      },
      {
        id: 2,
        img: "https://images-static.nykaa.com/media/icons/8904245711054_tgif.jpg?tr=w-50,h-50",
        price: 239,
      },
      {
        id: 3,
        img: "https://images-static.nykaa.com/media/icons/8904245711054_tgif.jpg?tr=w-50,h-50",
        price: 254,
      },
    ],
    price: 239,
    popularity: 8,
    liked: true,
  },
  {
    _id: 2,
    name: "Kay Beauty Matte Drama Long Stay Lipstick",
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/c/8cd4cf5kay_beautylpk_1.jpg",
    shades: [
      {
        id: 1,
        img: "https://images-static.nykaa.com/media/icons/8904330901421_muse.jpg?tr=w-50,h-50",
        price: 999,
      },
      {
        id: 2,
        img: "https://images-static.nykaa.com/media/icons/8904330901384_debut.jpg?tr=w-50,h-50",
        price: 999,
      },
      {
        id: 3,
        img: "https://images-static.nykaa.com/media/icons/8904330901575_backstage.jpg?tr=w-50,h-50",
        price: 999,
      },
    ],
    price: 999,
    popularity: 8,
  },
  {
    _id: 3,
    name: "M.A.C Retro Matte Lipstick - Ruby Woo",
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/d/cd037fb773602040605_0.jpg",
    shades: [
      {
        id: 1,
        img: "https://images-static.nykaa.com/media/icons/macmatt_runwayhit.jpg?tr=w-50,h-50",
        price: 1750,
      },
      {
        id: 2,
        img: "https://images-static.nykaa.com/media/icons/macrm_rubywoo.jpg?tr=w-50,h-50",
        price: 1750,
      },
      {
        id: 3,
        img: "https://images-static.nykaa.com/media/icons/773602671724_rubywoowooyougirl.jpg?tr=w-50,h-50",
        price: 1750,
      },
    ],
    price: 1750,
    popularity: 10,
  },
  {
    _id: 4,
    name: "Insight Cosmetics 24 Hrs Non Transfer Matte Lipstick (ll-03)",
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/1/61a93858904207506575_1.jpg",
    shades: [
      {
        id: 1,
        img: "https://images-static.nykaa.com/media/icons/8904207506704_bloodlust.jpg?tr=w-50,h-50",
        price: 220,
      },
      {
        id: 2,
        img: "https://images-static.nykaa.com/media/icons/8904207506636_staybasic.jpg?tr=w-50,h-50",
        price: 240,
      },
      {
        id: 3,
        img: "https://images-static.nykaa.com/media/icons/8904207506582_bitch.jpg?tr=w-50,h-50",
        price: 220,
      },
    ],
    price: 220,
    popularity: 5,
  },
  {
    _id: 5,
    name: "Maybelline New York Color Sensational Creamy Matte Lipstick",
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/1/41554429930-b_1.jpg",
    shades: [
      {
        id: 1,
        img: "https://images-static.nykaa.com/media/icons/6902395752363_3brooklynbare.jpg?tr=w-50,h-50",
        price: 299,
      },
      {
        id: 2,
        img: "https://images-static.nykaa.com/media/icons/6902395704591_630flamingfuchsia.jpg?tr=w-50,h-50",
        price: 299,
      },
      {
        id: 3,
        img: "https://images-static.nykaa.com/media/icons/6902395796923_818-dynamicbrick.jpg?tr=w-50,h-50",
        price: 239,
      },
    ],
    price: 150,
    popularity: 7,
  },
  {
    _id: 6,
    name: "Faces Canada Ultime Pro Hd Intense Matte Lips + Primer",
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8903380001877_7.jpg",
    shades: [
      {
        id: 1,
        img: "https://images-static.nykaa.com/media/icons/8903380001990_13scandalous.jpg?tr=w-50,h-50",
        price: 599,
      },
      {
        id: 2,
        img: "https://images-static.nykaa.com/media/icons/8903380004533_flamingo.jpg?tr=w-50,h-50",
        price: 529,
      },
      {
        id: 3,
        img: "https://images-static.nykaa.com/media/icons/8903380001914_05dashofpink.jpg?tr=w-50,h-50",
        price: 549,
      },
    ],
    price: 559,
    popularity: 9,
  },
  {
    _id: 7,
    name: "SUGAR Cosmetics Matte Attack Transferproof Lipstick",
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/4/c44b190SGR_MATPL_1.jpg",
    shades: [
      {
        id: 1,
        img: "https://images-static.nykaa.com/media/icons/8904320702311_05tanhalenchocolatebrown.jpg?tr=w-50,h-50",
        price: 634,
      },
      {
        id: 2,
        img: "https://images-static.nykaa.com/media/icons/8904320702328_06springcrimsoncrimsonred.jpg?tr=w-50,h-50",
        price: 646,
      },
      {
        id: 3,
        img: "https://images-static.nykaa.com/media/icons/8904320702298_03thegrandberriesdarkberry.jpg?tr=w-50,h-50",
        price: 699,
      },
    ],
    price: 664,
    popularity: 7,
  },
  {
    _id: 8,
    name: "NYX Professional Makeup Powder Puff Lippie Cream",
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/0/800897148300.1_1.jpg",
    shades: [
      {
        id: 1,
        img: "https://images-static.nykaa.com/media/icons/800897140434_squadgoals.jpg?tr=w-50,h-50",
        price: 650,
      },
      {
        id: 2,
        img: "https://images-static.nykaa.com/media/icons/800897148294_moody.jpg?tr=w-50,h-50",
        price: 640,
      },
      {
        id: 3,
        img: "https://images-static.nykaa.com/media/icons/800897140557_popquiz.jpg?tr=w-50,h-50",
        price: 680,
      },
    ],
    price: 650,
    popularity: 10,
  },
  {
    _id: 9,
    name: "Kay Beauty Matteinee Matte Lip Crayon Lipstick -Scripted",
    img: "https://images-static.nykaa.com/media/catalog/product/c/3/c3730158904330900134_1.jpg?tr=w-344,h-344,cm-pad_resize",
    shades: [
      {
        id: 1,
        img: "https://images-static.nykaa.com/media/icons/890433090010302_countdown.jpg?tr=w-50,h-50",
        price: 769,
      },
      {
        id: 2,
        img: "https://images-static.nykaa.com/media/icons/890433090023302_theafterparty.jpg?tr=w-50,h-50",
        price: 680,
      },
      {
        id: 3,
        img: "https://images-static.nykaa.com/media/icons/890433090014102_fashionista.jpg?tr=w-50,h-50",
        price: 660,
      },
    ],
    price: 679,
    popularity: 7,
  },
  {
    _id: 10,
    name: "Lakme Lip Love Chapstick SPF 15",
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/d/6d3d21a24921_h-8901030811340.jpg",
    shades: [
      {
        id: 1,
        img: "https://images-static.nykaa.com/media/icons/890433090010302_countdown.jpg?tr=w-50,h-50",
        price: 130,
      },
      {
        id: 2,
        img: "https://images-static.nykaa.com/media/icons/8901030714009_purlipcare.jpg?tr=w-50,h-50",
        price: 110,
      },
      {
        id: 3,
        img: "https://images-static.nykaa.com/media/icons/8901030713965_mango.jpg?tr=w-50,h-50",
        price: 140,
      },
    ],
    price: 135,
    popularity: 8,
  },
  {
    _id: 11,
    name: "Swiss Beauty HD Matte Lipstick",
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/3/f3018a68904325012323_1.jpg",
    shades: [
      {
        id: 1,
        img: "https://images-static.nykaa.com/media/icons/8904325012279_19darkbrown.jpg?tr=w-50,h-50",
        price: 239,
      },
      {
        id: 2,
        img: "https://images-static.nykaa.com/media/icons/8904325012149_06plumhouse.jpg?tr=w-50,h-50",
        price: 250,
      },
      {
        id: 3,
        img: "https://images-static.nykaa.com/media/icons/8904325012309_22brandyharrington.jpg?tr=w-50,h-50",
        price: 224,
      },
    ],
    price: 224,
    popularity: 9,
  },
  {
    _id: 12,
    name: "Masaba By Nykaa Lipstick",
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/0/6/0640fd18904245708733_1.jpg",
    shades: [
      {
        id: 1,
        img: "https://images-static.nykaa.com/media/icons/8904245708795_cantdeal.jpg?tr=w-50,h-50",
        price: 449,
      },
      {
        id: 2,
        img: "https://images-static.nykaa.com/media/icons/8904245708818_pataka.jpg?tr=w-50,h-50",
        price: 479,
      },
      {
        id: 3,
        img: "https://images-static.nykaa.com/media/icons/8904245708726_kaleingmesoftly.jpg?tr=w-50,h-50",
        price: 509,
      },
    ],
    price: 417,
    popularity: 7,
  },
  {
    _id: 13,
    name: "Lakme 9to5 Primer + Matte Lip Color",
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/d/6d8255224972_s1-8901030815942.jpg",
    shades: [
      {
        id: 1,
        img: "https://images-static.nykaa.com/media/icons/8901030816000_roseday.jpg?tr=w-50,h-50",
        price: 420,
      },
      {
        id: 2,
        img: "https://images-static.nykaa.com/media/icons/8901030815980_dustypink.jpg?tr=w-50,h-50",
        price: 479,
      },
      {
        id: 3,
        img: "https://images-static.nykaa.com/media/icons/8901030816062_brickblush.jpg?tr=w-50,h-50",
        price: 400,
      },
    ],
    price: 545,
    popularity: 8,
  },
  {
    _id: 14,
    name: "Nykaa Matte-ilicious Lip Crayon Lipstick",
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8904245702205_1_1_1.jpg",
    shades: [
      {
        id: 1,
        img: "https://images-static.nykaa.com/media/icons/dmrll_perfectplum.jpg?tr=w-50,h-50",
        price: 699,
      },
      {
        id: 2,
        img: "https://images-static.nykaa.com/media/icons/nykpt_callmescarlet.jpg?tr=w-50,h-50",
        price: 650,
      },
      {
        id: 3,
        img: "https://images-static.nykaa.com/media/icons/dmrlll_pinkonfleek.jpg?tr=w-50,h-50",
        price: 610,
      },
    ],
    price: 595,
    popularity: 9,
  },
  {
    _id: 15,
    name: "Lakme Absolute Matte Melt Mini Liquid Lip Color",
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/8/3892a2a29024_h-8901030832673.jpg",
    shades: [
      {
        id: 1,
        img: "https://images-static.nykaa.com/media/icons/8901030832727_nomadpink.jpg?tr=w-50,h-50",
        price: 330,
      },
      {
        id: 2,
        img: "https://images-static.nykaa.com/media/icons/8901030832758_coralcamp.jpg?tr=w-50,h-50",
        price: 380,
      },
      {
        id: 3,
        img: "https://images-static.nykaa.com/media/icons/8901030832741_brownsouvenir.jpg?tr=w-50,h-50",
        price: 400,
      },
    ],
    price: 350,
    popularity: 10,
  },
  {
    _id: 16,
    name: "Nykaa Matte Luxe Lipstick",
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/e/4e310c58904245710064_0.jpg",
    shades: [
      {
        id: 1,
        img: "https://images-static.nykaa.com/media/icons/8904245710071_pilatesberry.jpg?tr=w-50,h-50",
        price: 789,
      },
      {
        id: 2,
        img: "https://images-static.nykaa.com/media/icons/8904245710040_jagerbombrustynude.jpg?tr=w-50,h-50",
        price: 799,
      },
      {
        id: 3,
        img: "https://images-static.nykaa.com/media/icons/8904245710033_artisanalcoffeedeepwarmnude.jpg?tr=w-50,h-50",
        price: 750,
      },
    ],
    price: 799,
    popularity: 9,
  },
];

export function getProducts() {
  return products;
}
