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
    "Name": String,
    "Address": String,
    "CreatedAt": Datetime,
    "IsActive": Boolean,
    "Auditorium": [
        {
            "ID_Auditorium": String,
            "AuditoriumType": String,
            "CreatedAt": Datetime,
            "IsActive": Boolean,
            "Seat": [
                {
                    "ID_Seat": String,
                    "SeatName": String,
                    "Seattype": String,
                    "CreatedAt": Datetime,
                    "IsActive": Boolean
                }
            ]
        }
    ],
    "ID_Staff": String
}

const Staff = {
    "ID_Staff": String,
    "CreatedAt": Datetime,
    "IsActive": Boolean,
    "StaffType": String,
    "Account": {
        "ID_Account": String,
        "Name": String,
        "Birthday": Date,
        "Address": String,
        "CMND": String,
        "Phone": String,
        "Sex": String,
        "Email": String,
        "Password": String,
        "CreatedAt": Datetime,
        "IsActive": Boolean,
        "Member": {
            "BankName": String,
            "BankAccountNumber": String,
            "CreatedAt": Datetime,
            "IsActive": Boolean
        }
    }
}

const Booking = {
    "ID_Booking": String,
    "CreatedAt": Datetime,
    "IsActive": Boolean,
    "ID_Account": String,
    "ID_Ticket": String,
}

const Promotion = {
    "ID_Promotion": String,
    "PromotionName": String,
    "PercentReduction": String,
    "ConditionApply": String,
    "PromotionContent": String,
    "CreatedAt": Datetime,
    "IsActive": Boolean,
    "ID_Staff": String
}