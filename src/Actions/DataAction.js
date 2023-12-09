import axios from 'axios';


export const pickupData = (partition, allTickets, groupOrderValue) => async (containerDis) => {
    try {
        containerDis({ type: 'SELECT_DATA_REQUEST' })

        let arr = [], selectedData = [];
        let tempSetVal = new Set();
        let user = false;

        if (partition === 'status') {
            allTickets.forEach((elem) => {
                tempSetVal.add(elem.status);
            })

            arr = [...tempSetVal];

            arr.forEach((elem, index) => {
                let arr = allTickets.filter((fElem) => {
                    return elem === fElem.status;
                })
                selectedData.push({
                    [index]: {
                        title: elem,
                        value: arr
                    }
                })
            })
        } else if (partition === 'user') {
            user = true;
            allTickets?.allUser?.forEach((elem, index) => {
                arr = allTickets?.allTickets?.filter((Felem) => {
                    return elem.id === Felem.userId;
                })

                selectedData.push({
                    [index]: {
                        title: elem.name,
                        value: arr
                    }
                })
            })
        } else {
            let prior_list = ["No priority", "Low", "Medium", "High", "Urgent"];

            prior_list.forEach((elem, index) => {
                arr = allTickets.filter((fElem) => {
                    return index === fElem.priority;
                })
                selectedData.push({
                    [index]: {
                        title: elem,
                        value: arr,
                    }
                })
            })
        }
        
        if (groupOrderValue === "priority") {
            selectedData.forEach((elem, index) => {
                elem[index]?.value?.sort((a, b) => b.priority - a.priority)
            })
        }
        if (groupOrderValue === "title") {
            selectedData.forEach((elem, index) => {
                elem[index]?.value?.sort((a, b) => a.title.localeCompare(b.title))
            })
        }


        containerDis({ type: 'SELECT_DATA_SUCCESS', payload: { selectedData, user } });

    } catch (error) {
        containerDis({ type: 'SELECT_DATA_FAILURE', payload: error.message })
    }
}



export const dataRetrieval = () => async (containerDis) => {
    try {
        containerDis({ type: 'DATA_REQUEST' })

        const { data } = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment");

        containerDis({ type: 'DATA_SUCCESS', payload: data });

    } catch (error) {
        containerDis({ type: 'DATA_FAILURE' })
    }
}
