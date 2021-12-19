var express = require('express');
var router = express.Router();

var slides = [
  '/images/slide-01.jpg',
  '/images/slide-02.jpg',
  '/images/slide-03.jpg',
  '/images/slide-04.jpg',
  '/images/slide-05.jpg',
  '/images/slide-06.jpg',
  '/images/slide-07.jpg'
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Можно ехать',
    customer: { name: 'К.Бессмертный', phone: '+7 (999) 222-22-22' },
    vehicle: { type: 'Автомобиль', model: 'Toyota Land Cruiser 300', plate: 'A 777 AA 777' },
    contractor: { name: 'OOO "Авось"', technician: 'Ф.Криворуких' },
    slides,
    notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: '14 000 RUR',
    time: { workstart: '17.12.2021 11:30', workend: '20.12.2021 11:30'},
    ts: Date()
  });
});

module.exports = router;
