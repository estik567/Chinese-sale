import produce from "immer"

const initialState = {
    donations: [{ donator: 'sara',passwordDonator:111, passwordItem: 50,countTickets:1}]
}
export const donationsReducer = produce((state, action) => {
    switch (action.type) {
        case 'addDonation':
            state.donations.push(action.payload)
            break
    }
}, initialState)