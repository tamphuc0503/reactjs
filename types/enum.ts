enum TransactionStatus {
    Successfull,
    Failed,
    Pending,
    Canceled,
    Rejected
}
enum Subscriptions {
    a = 'Free',
    b = 'Basic',
    c = 'Premium',
    d = 'Pro'
}
enum Prices {
    a = 100,
    b = 200,
    c = 300,
    d = 400
}

export { TransactionStatus, Subscriptions, Prices };