/**
 * Handles everything related to signIn page
 */

function index(req, res) {
	res.render('signUp', {});
}

function add(req, res) {
	var sql = 'insert into user(email_id,first_name,last_name,pwd) values ('
			+ req.params.emailId + ',' + req.params.firstName + ','
			+ req.params.lastName + ',' + req.params.pwd + ')';
	mysqlController.insertData(sql);
}

exports.index = index;
exports.add = add;