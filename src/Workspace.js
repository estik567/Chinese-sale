import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import DonationForm from "./DonationForm";
import LogIn from "./Login";
import ShowAllDonation from "./ShowAllDonation";
import UpdatePersonalDetails from "./UpdatePersonalDetails";
import Items from "./Items";
import { addItem } from "./store/ItemsSlice/itemsAction";
import AddItem from "./AddItem"

export default function WorkSpace() {
        return (
                <>
                        <Switch>
                                <Route path="/Items">
                                        <Items />
                                </Route>
                                <Route path="/DonationForm">
                                        <DonationForm />
                                </Route>
                                <Route path="/UpdatePersonalDetails">
                                        <UpdatePersonalDetails />
                                </Route>
                                <Route path="/ShowAllDonations">
                                        <ShowAllDonation />
                                </Route>
                                <Route path="/LogIn">
                                        <LogIn />
                                </Route>
                                <Route path="/UpdatePersonalDetails">
                                        <UpdatePersonalDetails />
                                </Route>
                                <Route path="/AddItem">
                                        <AddItem />
                                </Route>
                        </Switch>
                </>
        )
}