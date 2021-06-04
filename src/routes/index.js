const {Router} = require('express')
const router = Router()
const routerController = require('../controllers/router.controller')

router.get('/', routerController.home)
router.get('/courses', routerController.courses)
router.get('/about', routerController.about)
router.get('/contact', routerController.contact)
router.get('/category', routerController.category)
router.get('/community', routerController.community)
router.get('/community/:id', routerController.communityDetails)
router.get('/courses/:id', routerController.courseDetails)
router.get('/course/category/:id', routerController.courseOrderByCategory)
router.get('/login', routerController.login)
router.get('/search', routerController.search)


module.exports = router