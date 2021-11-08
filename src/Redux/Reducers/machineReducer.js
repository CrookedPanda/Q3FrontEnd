import { ActionTypes } from "../Contants/action-types"

const initialState = {
    machines:[    
        {
        "name": "C3",
        "components": [
            "245, 0",
            "292, 0",
            "291, 290",
            "245, 241",
            "291, 290",
            "292, 290",
            "245, 267",
            "271, 267",
            "271, 267",
            "270, 269",
            "291, 290",
            "245, 267",
            "292, 290",
            "245, 241",
            "291, 290",
            "292, 290",
            "245, 277",
            "608, 606",
            "292, 290",
            "291, 290",
            "608, 290"
        ],
        "uptime": [
            {
                "startTime": "00:00",
                "uptime": 0,
                "downtime": 30
            },
            {
                "startTime": "00:30",
                "uptime": 0,
                "downtime": 30
            },
            {
                "startTime": "01:00",
                "uptime": 0,
                "downtime": 30
            },
            {
                "startTime": "01:30",
                "uptime": 0,
                "downtime": 30
            },
            {
                "startTime": "02:00",
                "uptime": 0,
                "downtime": 30
            },
            {
                "startTime": "02:30",
                "uptime": 0,
                "downtime": 30
            },
            {
                "startTime": "03:00",
                "uptime": 0,
                "downtime": 30
            },
            {
                "startTime": "03:30",
                "uptime": 0,
                "downtime": 30
            },
            {
                "startTime": "04:00",
                "uptime": 0,
                "downtime": 30
            },
            {
                "startTime": "04:30",
                "uptime": 0,
                "downtime": 30
            },
            {
                "startTime": "05:00",
                "uptime": 0,
                "downtime": 30
            },
            {
                "startTime": "05:30",
                "uptime": 0,
                "downtime": 30
            },
            {
                "startTime": "06:00",
                "uptime": 0,
                "downtime": 30
            },
            {
                "startTime": "06:30",
                "uptime": 0,
                "downtime": 30
            },
            {
                "startTime": "07:00",
                "uptime": 0,
                "downtime": 30
            },
            {
                "startTime": "07:30",
                "uptime": 0,
                "downtime": 30
            },
            {
                "startTime": "08:00",
                "uptime": 0,
                "downtime": 30
            },
            {
                "startTime": "08:30",
                "uptime": 0,
                "downtime": 30
            },
            {
                "startTime": "09:00",
                "uptime": 0,
                "downtime": 30
            },
            {
                "startTime": "09:30",
                "uptime": 0,
                "downtime": 30
            },
            {
                "startTime": "10:00",
                "uptime": 0,
                "downtime": 30
            },
            {
                "startTime": "10:30",
                "uptime": 0,
                "downtime": 30
            },
            {
                "startTime": "11:00",
                "uptime": 0,
                "downtime": 30
            },
            {
                "startTime": "11:30",
                "uptime": 0,
                "downtime": 30
            },
            {
                "startTime": "12:00",
                "uptime": 0,
                "downtime": 30
            },
            {
                "startTime": "12:30",
                "uptime": 0,
                "downtime": 30
            },
            {
                "startTime": "13:00",
                "uptime": 0,
                "downtime": 30
            },
            {
                "startTime": "13:30",
                "uptime": 0,
                "downtime": 30
            },
            {
                "startTime": "14:00",
                "uptime": 0,
                "downtime": 30
            },
            {
                "startTime": "14:30",
                "uptime": 0,
                "downtime": 30
            },
            {
                "startTime": "15:00",
                "uptime": 0,
                "downtime": 30
            },
            {
                "startTime": "15:30",
                "uptime": 0,
                "downtime": 30
            },
            {
                "startTime": "16:00",
                "uptime": 0,
                "downtime": 30
            },
            {
                "startTime": "16:30",
                "uptime": 0,
                "downtime": 30
            },
            {
                "startTime": "17:00",
                "uptime": 9,
                "downtime": 21
            },
            {
                "startTime": "17:30",
                "uptime": 30,
                "downtime": 0
            },
            {
                "startTime": "18:00",
                "uptime": 30,
                "downtime": 0
            },
            {
                "startTime": "18:30",
                "uptime": 30,
                "downtime": 0
            },
            {
                "startTime": "19:00",
                "uptime": 30,
                "downtime": 0
            },
            {
                "startTime": "19:30",
                "uptime": 30,
                "downtime": 0
            },
            {
                "startTime": "20:00",
                "uptime": 30,
                "downtime": 0
            },
            {
                "startTime": "20:30",
                "uptime": 30,
                "downtime": 0
            },
            {
                "startTime": "21:00",
                "uptime": 30,
                "downtime": 0
            },
            {
                "startTime": "21:30",
                "uptime": 30,
                "downtime": 0
            },
            {
                "startTime": "22:00",
                "uptime": 30,
                "downtime": 0
            },
            {
                "startTime": "22:30",
                "uptime": 30,
                "downtime": 0
            },
            {
                "startTime": "23:00",
                "uptime": 30,
                "downtime": 0
            },
            {
                "startTime": "23:30",
                "uptime": 23,
                "downtime": 7
            }
        ]
    },]
}

export const machineReducer = (state = initialState,{type,payload}) => {
    switch (type) {
        case ActionTypes.GET_MACHINES:
            return state;
        default:
            return state;
    }
}