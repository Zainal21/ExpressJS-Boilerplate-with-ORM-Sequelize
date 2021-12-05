/** @format */

module.exports = {
	JSONFormatter: ({ action, res_body }, res) => {
		switch (action) {
			case "SUCCESS":
				res.status(200).json({
					status: 200,
					success: true,
					response: res_body,
				});
				break;
			case "BAD_REQUEST":
				res.status(400).json({
					status: 400,
					success: false,
					response: res_body,
				});
				break;
			default:
				res.status(404).json({
					status: 404,
					success: false,
					response: "Data not found",
				});
				break;
		}
	},
};
