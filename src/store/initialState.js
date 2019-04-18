export default {
	auth: {
		token: null,
		message: null,
		error: null,
		isFetching: false,
	},
	user: {
		data: null,
		message: null,
		error: null,
		isFetching: false,
	},
	movie: [
		{
			data: [],
			error: null,
			isFetching: false,
		},
	],
	actors: [
		{
			data: [],
			error: null,
			isFetching: false,
		},
	],
	movie_by_id: {
		data: null,
		error: null,
		isFetching: false,
	},
	session: [
		{
			data: [],
			error: null,
			isFetching: false,
		},
	],
	session_by_movie_id: {
		data: null,
		error: null,
		isFetching: false,
	},
	curSession: {
		data: null,
	},
	roomNames: {
		data: null,
		error: null,
		isFetching: false,
	},
	places: {
		places: [],
		error: false,
		isFetching: false,
		initial: true,
	},
	tickets: {
		purchased: [],
		notPurchased: [],
    },
    




    
	adminAuth: {
		token: null,
		user: null,
		error: null,
	},
	adminPanel: {
		user: {
			name: null,
			role: null,
		},
		movie: {
			movie: null,
			error: null,
		},
		addMovie: {
			posterLink: null,
			movie: null,
			error: null,
		},
		dellMovie: {
			movie: null,
			error: null,
		},
		getMovie: {
			movie: null,
			error: null,
		},
		getRoom: {
			room: null,
			error: null,
		},
		getUser: {
			user: null,
			role: null,
			error: null,
		},
		postSession: {
			session: null,
			message: null,
			error: null,
		},
		putMovie: {
			movie: null,
			message: null,
			error: null,
		},
	},
}
