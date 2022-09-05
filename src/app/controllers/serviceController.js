class ServiceController {
    index(req, res) {
        res.render('dich-vu')
    }
}

module.exports = new ServiceController()
