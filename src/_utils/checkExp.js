import jwt from "jwt-decode";
import moment from "moment";

export const jwtDecode = token => {
	// const decodeObj = jwt(token);

	if (token) {
		const decodeObj = jwt(token);

		console.log(" --- decodeObj --- ", decodeObj);
		console.log(" --- decodeObj --- ", moment(decodeObj.exp * 1000).format('dddd, DD MM YYYY, HH:mm:ss'));
		console.log(' --- jwt --- ', moment().isSameOrBefore(decodeObj.exp * 1000));

		return moment().isSameOrBefore(decodeObj.exp * 1000);
	}
	else {
		return false
    }
    
};
        export const checkExp = token => {
            const decodeObj = jwt(token)
            return moment().isSameOrBefore(decodeObj.exp * 1000)
        }
        
        export const takeId = token => {
            const decodeObj = jwt(token)
            return decodeObj.id
        }
