import { types } from "../types/types";



const initialState = {
    data:[],
    monitorSelected:{
        id:'',
        names:'',
        lastsNames:'',
        academicProgram:'',
        semester:'',
        identificationCard:'',
        contactInformation:''
    },
};


export const monitorsReducer = (state = initialState, action) => {
    switch(action.type){
        case types.getallMonitor:
            return{
                ...state,
                data: action.payload
            }

        case types.addNewMonitor:
            return{
                ...state,
                data: [
                    ...state.data,
                    action.payload
                ]
            }

        case types.setActiveMonitor:
            return{
                ...state,
                monitorSelected: action.payload
            }

        case types.clearActiveMonitor:
            return{
                ...state,
                monitorSelected: initialState.monitorSelected
            }

        case types.updateMonitor:
            const {id,names,lastsNames,academicProgram,semester,identificationCard,contactInformation} = action.payload;
            return{
                ...state,
                data: state.data.map((data)=>{
                    if(data.id === id) {
                        return{
                            id,
                            names,
                            lastsNames,
                            academicProgram,
                            semester,
                            identificationCard,
                            contactInformation
                        }
                    } else{
                        return data
                    }
                })
            }

        case types.deleteMonitor:
            return{
                ...state,
                data: state.data.filter(
                    monitor =>monitor.id !== action.payload
                )
            }

        default:
            return state;
    }
}