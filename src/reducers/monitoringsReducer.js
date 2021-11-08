import { types } from "../types/types";



const initialState = {
    data:[],
    monitoringSelected:{
        id:'',
        matter:'',
        assignedMonitor:'',
        date:'',
        classroom:''
    },
};


export const monitoringsReducer = (state = initialState, action) => {
    switch(action.type){
        case types.getallMonitoring:
            return{
                ...state,
                data: action.payload
            }

        case types.addNewMonitoring:
            return{
                ...state,
                data: [
                    ...state.data,
                    action.payload
                ]
            }

        case types.setActiveMonitoring:
            return{
                ...state,
                monitoringSelected: action.payload
            }

        case types.clearActiveMonitoring:
            return{
                ...state,
                monitoringSelected: initialState.monitoringSelected
            }

        case types.updateMonitoring:
            const {id,matter,assignedMonitor,date,classroom} = action.payload;
            return{
                ...state,
                data: state.data.map((data)=>{
                    if(data.id === id) {
                        return{
                            id,
                            matter,
                            assignedMonitor,
                            date,
                            classroom
                        }
                    } else{
                        return data
                    }
                })
            }

        case types.deleteMonitoring:
            return{
                ...state,
                data: state.data.filter(
                    monitoring =>monitoring.id !== action.payload
                )
            }

        default:
            return state;
    }
}
