export const alertActions = {
	success,
	err,
	clear
}

function success (msg)
{
	return{type:'ALERT_SUCCESS',
		msg}
}
function err (msg)
{
	return{type:'ALERT_FAILURE',
		msg}
}
function clear (msg)
{
	return{type:'CLEAR',
		msg}
}