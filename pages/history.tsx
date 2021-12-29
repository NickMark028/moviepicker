
import { Booking } from "../src/components/booking/booking";
import { Header } from "@components";
import { ListTicket } from "../src/components/listTicket/listticket"


const Book: React.FC = () => {
    return (
        <>
            <Header />
           
          <div className="bodymargin container" style={{marginTop: '60px'}} >
          <ListTicket />
          </div>

           
        </>
    );
};

export default Book;
