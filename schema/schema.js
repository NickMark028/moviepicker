const Showtime = {
    "id": String,
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

const Movie = {
    "id": String,
    "name": String,
    "poster": String,
    "video": String,
    "trailer": String,
    "movieContent": String,
    "genre": [ String ],
    "length": Number,
    "createdAt": Timestamp,
    "isActive": Boolean,
}

const Ticket = {
    "id": String,
    "qrCode": String,
    "hasPaid": Boolean,
    "price": Number,
    "movieId": String,
    "movieTheaterId": String,
    "auditoriumsId": String,
    "seatId": String,
    "createdAt": Timestamp,
    "isActive": Boolean,
}

const MovieTheater = {
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
    "isActive": Boolean
}

const Staff = {
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

const Member = {
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

const Booking = {
    "id": String,
    "createdAt": Timestamp,
    "isActive": Boolean,
    "memberId": String,
    "ticketId": String,
}
