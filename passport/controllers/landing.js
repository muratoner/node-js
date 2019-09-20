const models = require('../models')

exports.get_landing = function (req, res, next) {
    models.Lead.findAll().then(leads => {
        res.render('landing', { title: 'Express', leads: leads, user: req.user })
    })
}

exports.show_leads = function (req, res, next) {
    models.Lead.findAll().then(leads => {
        res.render('lead\\leads', { title: 'Getting All Leads', leads: leads })
    })
}

exports.show_lead = function (req, res, next) {
    models.Lead.findOne({
        where: {
            id: req.params.lead_id
        }
    }).then(lead => {
        res.render('lead\\lead', { title: 'Getting All Leads', lead: lead })
    })
}

exports.show_edit_lead = function (req, res, next) {
    models.Lead.findOne({
        where: {
            id: req.params.lead_id
        }
    }).then(lead => {
        res.render('lead\\edit_lead', { title: 'Edit Lead', lead: lead })
    })
}

exports.edit_lead = function (req, res, next) {
    console.log('Posted lead name:', req.body.lead_email)

    return models.Lead.update({
        email: req.body.lead_email
    }, {
        where: {
            id: req.params.lead_id
        }
    }).then(_ => {
        res.redirect('/lead/' + req.params.lead_id)
    })
}

exports.delete_lead = function (req, res, next) {
    console.log('Posted lead id:', req.body.lead_id)
    return models.Lead.destroy({
        where: {
            id: req.params.lead_id
        }
    }).then(_ => {
        res.redirect('/leads')
    })
}

exports.delete_lead_josn = function (req, res, next) {
    return models.Lead.destroy({
        where: {
            id: req.params.lead_id
        }
    }).then(_ => {
        res.send({ message: 'Successfully deleted.' })
    })
}

exports.submit_lead = function (req, res, next) {
    console.log('Posted lead name : ', req.body.lead_email)
    return models.Lead.create({
        email: req.body.lead_email
    }).then(_ => {
        res.redirect('/leads')
    })
}