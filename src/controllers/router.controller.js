const home = (req, res) => {
    res.render('pages/index')
}

const courses = (req, res) => {
    res.render('pages/courses')
}

const about = (req, res) => {
    res.render('pages/about')
}

const contact = (req, res) => {
    res.render('pages/contact')
}

const category = (req, res) => {
    res.render('pages/category')
}

const community = (req, res) => {
    res.render('pages/blog')
} 

const communityDetails = (req, res) => {
    res.render('pages/blog_details')
}


module.exports = {
    home, courses, about, contact, category, community, communityDetails
}