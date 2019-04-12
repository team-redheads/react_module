export default {
    auth: {
        token: null,
        message: null,
        error: null,
        isFetching: false
    },
    movie: [
        {
            data: [],
            error: null,
            isFetching: false
        },
    ],
    movie_by_id: {
        data: null,
        error: null,
        isFetching: false
    },
    session: [
        {
            data: [],
            error: null,
            isFetching: false
        },
    ],
    session_by_movie_id: {
        data: null,
        error: null,
        isFetching: false
    },
    curSession: {
      data: null
    },
    roomNames: {
        data: null,
        error: null,
        isFetching: false
    },
};
