export function alert  (state='',action)
{
	switch(action.type)
	{
		case 'ALERT_SUCCESS':
			return action.msg
		case 'ALERT_FAILURE':
			return action.msg

		case 'CLEAR':
			return {}
		default:
			return state;
	}
}