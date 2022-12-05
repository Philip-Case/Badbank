import { createContext, useContext } from 'react';

const ctx = {
    "accounts": [
        {
            "id": 0,
            "name": "Michael Milken",
            "email": "junkbonds@mit.edu",
            "balance": 0,
            "password": "shhhhhhh",
            "transactionHistory": [],
            "loggedin": false
        }
    ]
}

const AccountContext = createContext(ctx);

export default AccountContext;