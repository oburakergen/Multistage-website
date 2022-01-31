/*
 * Copyright (c) 2021-2021/12/24 Burak ERGEN
 */
const router = require('express').Router();
const country = require('../../controller/address/country.controller');
const city = require('../../controller/address/city.controller');
const town = require('../../controller/address/town.controller');
const district = require('../../controller/address/district.controller');
const neighborhood = require('../../controller/address/neighborhood.controller');
const taxOffice = require('../../controller/address/taxOffice.controller');

// country
router.post('/country/create', country.create);
router.get('/country/all', country.findAll);
router.post('/country/search/:id', country.findOne);
router.put('/country/update/:id', country.update);
router.put('/country/update-all', country.updateAll);
router.delete('/country/delete', country.delete);
router.delete('/country/delete-all', country.deleteAll);
router.post('/country/child', country.child);
// city
router.post('/city/create', city.create);
router.get('/city/all', city.findAll);
router.post('/city/search/:id', city.findOne);
router.put('/city/update/:id', city.update);
router.put('/city/update-all', city.updateAll);
router.delete('/city/delete', city.delete);
router.delete('/city/delete-all', city.deleteAll);
router.post('/city/child', city.child);
// town
router.post('/town/create', town.create);
router.get('/town/all', town.findAll);
router.post('/town/search/:id', town.findOne);
router.put('/town/update/:id', town.update);
router.put('/town/update-all', town.updateAll);
router.delete('/town/delete', town.delete);
router.delete('/town/delete-all', town.deleteAll);
router.post('/town/child', town.child);
// // vergiDairesi
router.post('/district/create', district.create);
router.get('/district/all', district.findAll);
router.post('/district/search/:id', district.findOne);
router.put('/district/update/:id', district.update);
router.put('/district/update-all', district.updateAll);
router.delete('/district/delete', district.delete);
router.delete('/district/delete-all', district.deleteAll);
router.post('/district/child', district.child);
// // neighborhood
router.post('/neighborhood/create', neighborhood.create);
router.get('/neighborhood/all', neighborhood.findAll);
router.post('/neighborhood/search/:id', neighborhood.findOne);
router.put('/neighborhood/update/:id', neighborhood.update);
router.put('/neighborhood/update-all', neighborhood.updateAll);
router.delete('/neighborhood/delete', neighborhood.delete);
router.delete('/neighborhood/delete-all', neighborhood.deleteAll);
router.post('/neighborhood/child', neighborhood.child);
// // neighborhood
router.post('/tax-office/create', taxOffice.create);
router.get('/tax-office/all', taxOffice.findAll);
router.post('/tax-office/search/:id', taxOffice.findOne);
router.put('/tax-office/update/:id', taxOffice.update);
router.put('/tax-office/update-all', taxOffice.updateAll);
router.delete('/tax-office/delete', taxOffice.delete);
router.delete('/tax-office/delete-all', taxOffice.deleteAll);
router.post('/tax-office/child', taxOffice.child);

module.exports = router;
