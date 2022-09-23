class IntroductionController {
    index(req, res) {
        res.render('gioi-thieu')
    }
}

module.exports = new IntroductionController()
