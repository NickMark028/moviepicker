/*
	isActive is set to true for every collections/documents
*/

const showtimes = {
    "id": String,
    "movieTheaters": String,
    "startTime": Timestamp,
    "endTime": Timestamp,
    "showDate": Timestamp,
    "isCanceled": Boolean,
    "movies": [
        {
            "id": String,
            "createdAt": Timestamp,
            "isActive": Boolean,
        }
    ]
    "createdAt": Timestamp,
    "isActive": Boolean,
}

const movies = {
    "id": String,
    "name": String,
    "poster": [ String ],		// List of URL images (Use Cloud storage)
    "trailer": String,			// URL video (Use Cloud storage)
    "movieContent": String,
    "genre": [ String ],		// comedy, horror, ...
    "length": Number,			// length in seconds
    "createdAt": Timestamp,
    "isActive": Boolean,
}

const tickets = {
    "id": String,				// use for qrCode too
    "memberId": String,
    "price": Number,
    "movieId": String,
    "movieTheaterId": String,
    "auditoriumsId": String,
    "seatId": String,
    "createdAt": Timestamp,
    "isActive": Boolean,
}

const movieTheaters = {
    "id": String,
    "name": String,
    "address": String,
    "auditoriums": [
        {
            "id": String,
            "type": String,
            "seats": [
                {
                    "id": String,
                    "name": String,
                    "type": String,
                    "createdAt": Timestamp,
                    "isActive": Boolean
                }
            ],
            "createdAt": Timestamp,
            "isActive": Boolean,
        }
    ],
    "staffId": String
    "createdAt": Timestamp,
    "isActive": Boolean,
}

const staffs = {
    "id": String,				// ID này trùng ID của user trong authentication
    "type": String,
    "account": {
        "name": String,
        "birthday": Date,
        "address": String,
        "idCard": String,		// CMND
        "phone": String,		// xxxx-xxx-xxx
        "sex": String,			// "Male" / "Female"
        "email": String,
    },
    "createdAt": Timestamp,
    "isActive": Boolean,
}

const members = {
    "id": String,				// ID này trùng ID của user trong authentication
	"account": {
        "name": String,
        "birthday": Date,
        "address": String,
        "idCard": String,		// CMND
        "phone": String,		// xxxx-xxx-xxx
        "sex": String,			// "Male" / "Female"
        "email": String,
    },
    "bankName": String,
    "bankAccountNumber": String,
    "createdAt": Timestamp,
    "IsActive": Boolean
}
