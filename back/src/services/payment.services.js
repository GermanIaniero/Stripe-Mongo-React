import Stripe from "stripe";

const key = 'sk_test_51OIA2TSBifViMUfGTy9YBUmw0hDJdafnTv0yiBSBme9Kc3UYiEBNF1sZW0TltbkQILtyhaiup8GslrXwu1zONLof00OmZXril9'


export default class PaymentService {
    constructor() {
        this.stripe = new Stripe (key)
    }
    
    createPaymentIntent = async (data) => {
        const paymentIntent = await this.stripe.paymentIntents.create (data)

        return paymentIntent
    }    
}