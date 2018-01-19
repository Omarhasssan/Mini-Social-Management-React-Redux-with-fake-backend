export default function(state='HIDE',action)
{
	switch(action.type){
		case'TOGGLE_MENU':
			return action.payload;
		default:
			return state;
	}
}