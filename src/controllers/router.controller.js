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

const courseDetails = (req, res) => {
    res.render('pages/course_details')
}

const courseOrderByCategory = (req, res) => {
    let category = req.params.id
    res.render('pages/course_orderby_category')
}

const login = (req, res) => {
    res.render('pages/login')
}

const search = (req, res) => {
    let query = req.query.q

    console.log(query)
    res.render('pages/search_result')
}


module.exports = {
    home, courses, about, contact, category, community, 
    communityDetails, courseDetails, courseOrderByCategory,
    login, search
}