import { IAppState } from './IAppState';

const initialState:IAppState = {
    courses:[
        {
            id:1,
            name:"Building app with redux(local)",
            topic:"redux"
        },
        {
            id:2,
            name:"Building app with angular(local)",
            topic:"angular"
        },
        {
            id:3,
            name:"Building app with angular and redux",
            topic:"angular and redux"
        }
    ]
}

export function reducer(state=initialState, action){
    return state;
}