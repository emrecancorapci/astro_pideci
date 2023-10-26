import kahvaltiImg from '../images/kahvalti.jpg';
import gozlemeImg from '../images/gozleme.jpg';
import kahveImg from '../images/kahve.jpg';
import milkshakeImg from '../images/milkshake.jpg';
import pideImg from '../images/pide.jpg';
import salataImg from '../images/salata.jpg';
import tatliImg from '../images/tatli.jpg';
import sogukImg from '../images/soguk_icecek.jpg';
import sicakImg from '../images/sicak_icecek.jpg';
import omletImg from '../images/omletler.jpg';
import cipsImg from '../images/cips.jpg';
import izgaraImg from '../images/izgara.jpg';

export const products = [
  {
    name: 'Kahvaltılar',
    image: kahvaltiImg,
    options: [
      'Serpme Kahvaltı (2 kişilik) 500 TL',
      'Hızlı Kahvaltı (Tek kişilik) 200 TL',
      'Sucuk Tava 115 TL',
      'Sahanda Yumurta 90 TL',
      'Menemen 115 TL',
      'Börek Sepeti (4 Sigara, 2 Muska) 70 TL',
    ],
  },
  {
    name: 'Omletler',
    image: omletImg,
    options: ['Sade 90 TL', 'Peynirli 100 TL', 'Kaşarlı 110 TL', 'Omlet Sefası 120 TL'],
  },
  {
    name: 'Gözlemeler',
    image: gozlemeImg,
    options: ['Peynirli 115 TL', 'Patatesli 135 TL', 'Kaşarlı 125 TL', 'Kıymalı 160 TL'],
  },
  {
    name: 'Izgara',
    image: izgaraImg,
    options: ['Izgara Köfte 180 TL'],
  },
  {
    name: 'Pideler',
    image: pideImg,
    options: [
      'Kıymalı 160 TL',
      'Kıymalı Üstü Kaşarlı 175 TL',
      'Kuşbaşılı 175 TL',
      'Kuşbaşılı Üstü Kaşarlı 190 TL',
      'Karışık 170 TL',
      'Karışık Üstü Kaşarlı 185 TL',
      'Kapalı Kıymalı 175 TL ',
      'Kaşarlı 160 TL',
      'Develi Peynirlisi 160 TL',
      'Sucuklu 190 TL',
      'Cevizli 175 TL',
    ],
  },
  {
    name: 'Salatalar',
    image: salataImg,
    options: ['Mevsim Salata 75TL', 'Çoban Salata 75 TL'],
  },
  {
    name: 'Cips',
    image: cipsImg,
    options: ['Cips 75 TL'],
  },
  {
    name: 'Tatlılar',
    image: tatliImg,
    options: ['Browni Pasta Dilim 120 TL', 'Cheesecake Dilim 130 TL', 'Sufle 105 TL'],
  },
  {
    name: 'Kahveler',
    image: kahveImg,
    options: [
      'Türk Kahvesi 35 TL',
      'Filtre Kahve (Iced/Hot) 60 TL',
      'Espresso (Iced/Hot) 45 TL',
      'Americano (Iced/Hot) 60 TL',
      'Latte (Iced/Hot) 70 TL',
      'White Chocolate Mocha (Iced/Hot) 80 TL',
      'Caramel Macchiato (Iced/Hot) 80 TL',
    ],
  },
  {
    name: 'Sıcak İçecekler',
    image: sicakImg,
    options: [
      'Çay (Bardak) 20 TL',
      'Çay (Kupa) 30 TL',
      'Kış Çayı 60 TL',
      'Papatya Çayı 50 TL',
      'Ihlamur 55 TL',
      'Yeşil Çay 55 TL',
      'Ada Çayı 50 TL',
      'Melisa Çayı 50 TL',
      'Sıcak Çikolata 65 TL',
      'Salep 65 TL',
      '1 Pot Çay (10 Bardak) 175 TL',
    ],
  },
  {
    name: 'Milkshake',
    image: milkshakeImg,
    options: ['Muzlu 75 TL', 'Çilekli 75 TL', 'Çikolatalı 75 TL'],
  },
  {
    name: 'Soğuk İçecekler',
    image: sogukImg,
    options: [
      'Taze Portakal Suyu 75 TL',
      'Limonata 50 TL',
      'Churchill 35 TL',
      'Ayran 25 TL',
      'Pepsi 35 TL',
      'Pepsi Max 35 TL',
      'Yedigün 35 TL',
      'Ice Tea (Şeftali, Mango, Limon) 35 TL',
      'Gazoz 35 TL',
      'Meyve Suyu (Vişne, Şeftali) 35 TL',
      'Şalgam 30 TL',
      'Soda 20 TL',
      'Su 15 TL',
    ],
  },
];
