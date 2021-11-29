const Showtime = {
    "ID_Showtimes": String,
    "StarTime": Datetime,
    "EndTime": Datetime,
    "ShowDate": Date,
    "IsCancel": Boolean,
    "CreatedAt": Datetime,
    "IsActive": Boolean,
    "Movies": [
        {
            "ID_Movie": String,
            "CreatedAt": Datetime,
            "IsActive": Boolean,
        }
    ]
}

const Movie = {
    "ID_Movie": String,
    "NameMovie": String,
    "Poster": String,
    "Video": String,
    "Trailer": String,
    "MovieContent": String,
    "MovieType": [String],
    "MovieLenght": String
}

const Ticket = {
    "ID_Ticket": String,
    "QR": String,
    "IsPay": Boolean,
    "Price": String,
    "CreatedAt": String,
    "IsActive": Boolean,
    "MovieID_Movie": String,
    "SeatID_Seat": String,
    "PromotionID_Promotion": String
}

const Movietheater = {
    "ID_MovieTheater": String,
    "MovieTheaterName": String,
    "Address": String,
    "CreatedAt": String,
    "IsActive": Boolean,
    "Auditorium": [
        {
            "ID_Auditorium": String,
            "AuditoriumType": String,
            "CreatedAt": String,
            "IsActive": Boolean,
            "Seat": [
                {
                    "ID_Seat": String,
                    "SeatName": String,
                    "Seattype": String,
                    "CreatedAt": String,
                    "IsActive": Boolean
                }
            ]
        }
    ],
    "Staff": [
        {
            "ID_Staff": String,
            "CreatedAt": String,
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
                "CreatedAt": String,
                "IsActive": Boolean,
                "Member": {
                    "BankName": String,
                    "BankAccountNumber": String,
                    "CreatedAt": String,
                    "IsActive": Boolean
                }
            }
        }
    ]
}

const Booking = {
    "ID_Booking" : String,
    "CreatedAt": String,
    "IsActive": Boolean,
    "ID_Account": String,
    "ID_Ticket" : String,
}

const Promotion = {
    "ID_Promotion" : String, 
    "PromotionName" : String, 
    "PercentReduction" : String,
    "ConditionApply" : String,
    "PromotionContent" : String,
    "CreatedAt": String,
    "IsActive": Boolean,
    "ID_Staff" : String
}