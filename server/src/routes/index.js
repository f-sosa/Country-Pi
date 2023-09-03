const { Router } = require("express");
const router = Router();
const getCountry = require("../controllers/getCountries");
const getActivities = require("../controllers/getActivities");
const getCountriesByCountry = require("../controllers/getCountriesByCountry");
const getCountriesName = require("../controllers/getCountryName");
const postActivity = require("../controllers/postActivities");


router.get("/countries", getCountry);
router.get("/activities", getActivities);
router.get("/countries/name", getCountriesName);
router.get("/countries/:idPais", getCountriesByCountry);
router.post("/activities", postActivity);

module.exports = router;
