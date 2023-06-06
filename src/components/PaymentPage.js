import { useState } from "react";
import Pay from "./Pay";
import Buy from "./Buy";
import Done from './Done'

const PaymentPage = () => {

    const [isloading, setisloading] = useState(false);

    const [toBuy, settoBuy] = useState(true);

    const uponPay = () => {
        setisloading(true);
        // settoBuy(false);
    }

    const success = () => {
        setisloading(false);
        settoBuy(false);

    }



    console.log(uponPay);

    return (
        <>
            {toBuy && <Buy uponPay={uponPay} />}
            {isloading && <Pay success={success} />}
            {!toBuy && !isloading && <Done/>}
        </>
    )
}

export default PaymentPage
