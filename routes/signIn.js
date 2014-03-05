/**
 * Handles everything related to signIn page
 */

function index(req, res) {
	res.render('signIn', {});
	var emailId = req.param('emailId');
	var pwd = req.param('password');
	console.log("emailId = " + emailId + " password =" + pwd) ;
}

function validate(req,res){
	var emailId = req.param('emailId');
	var pwd = req.param('password');
	console.log("emailId = " + emailId + " password =" + pwd) ;
}

exports.index = index;
exports.validate = validate;