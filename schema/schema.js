const Showtime = {
    "id": String,
    "startTime": Datetime,
    "endTime": Datetime,
    "showDate": Date,
    "isCanceled": Boolean,
    "createdAt": Datetime,
    "isActive": Boolean,
    "movies": [
        {
            "id": String,
            "createdAt": Datetime,
            "isActive": Boolean,
        }
    ]
}

const Movie = {
    "id": String,
    "name": String,
    "poster": String,
    "video": String,
    "trailer": String,
    "movieContent": String,
    "movieType": [ String ],
    "length": Number
}

const Ticket = {
    "id": String,
    "qrCode": String,
    "hasPaid": Boolean,
    "price": Number,
    "createdAt": Datetime,
    "isActive": Boolean,
    "movieId": String,
    "seatId": String,
    "promotionId": String
}

const MovieTheater = {
    "id": String,
    "name": String,
    "address": String,
    "createdAt": Datetime,
    "isActive": Boolean,
    "auditoriums": [
        {
            "id": String,
            "type": String,
            "createdAt": Datetime,
            "isActive": Boolean,
            "seats": [
                {
                    "id": String,
                    "name": String,
                    "type": String,
                    "createdAt": Datetime,
                    "isActive": Boolean
                }
            ]
        }
    ],
    "staffId": String
}

const Staff = {
    "id": String,
    "createdAt": Datetime,
    "isActive": Boolean,
    "type": String,
    "account": {
        "id": String,
        "name": String,
        "birthday": Date,
        "address": String,
        "idCard": String,		// CMND
        "phone": String,
        "sex": String,
        "email": String,
        "password": String,
        "createdAt": Datetime,
        "isActive": Boolean,
        "member": {
            "bankName": String,
            "bankAccountNumber": String,
            "createdAt": Datetime,
            "IsActive": Boolean
        }
    }
}

const Booking = {
    "id": String,
    "createdAt": Datetime,
    "isActive": Boolean,
    "accountId": String,
    "ticketId": String,
}

const Promotion = {
    "id": String,
    "name": String,
    "rercentReduction": String,
    "conditionApply": String,
    "content": String,
    "createdAt": Datetime,
    "isActive": Boolean,
    "staffId": String
}
