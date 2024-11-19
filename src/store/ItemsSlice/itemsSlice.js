import produce from "immer"
let id=5;
export const GetId=() =>{return id++};
const initialState = {

    items: [
        { id:0, name: 'רכב', price: 50 ,description: "description"},
        { id:1,name: 'IRobot', price: 35, description: "description"},
        { id:2,name: 'שיפוץ לבית', price: 45 ,description: "description"},
        { id:3,name: 'פאה', price: 30 ,description: "description"},
        { id:4,name: 'פליימוביל', price: 20 ,description: "description"}],

}
export const itemsReducer = produce((state, action) => {
    switch (action.type) {
       
        case 'addItem':
            state.items.push(action.payload)
            break
       case 'setItem':
       state.items.forEach(element => {
           if(element.id===action.payload.id){
                 element.name=action.payload.name;
           element.price=action.payload.price;
           element.description=action.payload.description;
           }
         

       });
      
    }
}, initialState)