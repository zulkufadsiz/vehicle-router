import _ from 'lodash';

const initialState = {
    searchText: '',
    data: [],
    selectedRow: {},
    fetching: false,
    fetched: false,
    error: null,
    visible: false,
    dropDown: {},
    selectedKey: ['1'],
    childrenDrawer: false,
    insertId: null,
    onChangedData: {},
    resetFields: false,
    filterType: 1,
    saleAction: '',
    saleId: '',
    purchaseAction: '',
    purchaseId: '',
    getById: {},
    openKeys: ['sub0'],
    credit: [],
    recentSales: [],
    recentPurchase: [],
    creditAlert: [],
    dropPaymentTerm: [],
    clientCreditLimit: [],
    creditAlertByPercent: [],
    pContract: '',
    sContract: '',
    selectedCredit: {},
    selectedPayment: {},
    disableCreditButton: false,
    payment: [],
    childrenDrawer2: false,
    dueDateAlert: [],
    dueDateAlertWeek: [],
    indents: [],
    eta: null,
    etd: null,
    days: null,
    duedatebase: 'ETA',
    dateresult: null,
    totalprice: '',
    productsTblData: [],
    productItm: {},
    loading: false,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_DATA': {
            return {
                ...state,
                fetching: true,
            };
        }

        case 'FETCH_DATA_REJECTED': {
            return {
                ...state,
                fetching: false,
                error: action.payload,
            };
        }

        case 'FETCH_DATA_FULFILLED': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                data: action.payload,
            };
        }
        case 'FETCH_SELECTED_FULFILLED': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                selectedRow: action.payload,
            };
        }

        case 'HANDLE_CHANGE': {
            return {
                ...state,
                selectedRow: {
                    ...state.selectedRow,
                    [action.name]: action.payload,
                },
            };
        }

        case 'SELECT_NONE': {
            return {
                ...state,
                selectedRow: action.payload,
            };
        }
        case 'TABLE_RELOAD': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                data: action.payload,
            };
        }

        case 'CRUD_DATA_ERROR': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: action.payload,
            };
        }

        case 'SET_DRAWER': {
            return {
                ...state,
                visible: action.payload,
            };
        }

        case 'DROPDOWN_VALUES': {
            return {
                ...state,
                dropDown: {
                    ...state.dropDown,
                    [action.name]: action.payload,
                },
            };
        }

        case 'SELECTED_KEY': {
            return {
                ...state,
                selectedKey: action.payload,
            };
        }

        case 'CHILDREN_DRAWER': {
            return {
                ...state,
                childrenDrawer: action.payload,
            };
        }

        case 'CHILDREN_DRAWER2': {
            return {
                ...state,
                childrenDrawer2: action.payload,
            };
        }

        case 'INSERTED_ID': {
            return {
                ...state,
                dropDown: {
                    ...state.dropDown,
                    [action.name]: [...state.dropDown[action.name], action.payload],
                },
            };
        }

        case 'ON_CHANGED_DATA': {
            return {
                ...state,
                onChangedData: action.payload,
            };
        }

        case 'RESET_FIELDS': {
            return {
                ...state,
                resetFields: action.payload,
            };
        }

        case 'FILTER_TYPE': {
            return {
                ...state,
                filterType: action.payload,
            };
        }

        case 'PURCHASE_ACTION': {
            return {
                ...state,
                purchaseAction: action.payload,
            };
        }

        case 'PURCHASE_ID': {
            return {
                ...state,
                purchaseId: action.payload,
            };
        }

        case 'SALE_ACTION': {
            return {
                ...state,
                saleAction: action.payload,
            };
        }

        case 'SALE_ID': {
            return {
                ...state,
                saleId: action.payload,
            };
        }

        case 'GET_BY_ID': {
            return {
                ...state,
                getById: action.payload,
            };
        }

        case 'ADD_ELEMENT_CREDIT_LIST': {
            return {
                ...state,
                selectedRow: {
                    ...state.selectedRow,
                    credit: [...state.selectedRow.credit, action.payload],
                },
            };
        }

        case 'UPDATE_ELEMENT_CREDIT_LIST': {
            const { id } = action.payload;
            const newCredit = [...state.selectedRow.credit];
            const updateCredit = newCredit.findIndex(object => object.id === id);
            newCredit[updateCredit] = action.payload;

            return {
                ...state,
                selectedRow: {
                    ...state.selectedRow,
                    credit: newCredit,
                },
            };
        }
        case 'DELETE_ELEMENT_CREDIT_LIST': {
            return {
                ...state,

                selectedRow: {
                    ...state.selectedRow,
                    credit: [...state.selectedRow.credit.filter(credit => credit.id !== action.payload)],
                },
            };
        }

        case 'ADD_ELEMENT_PAYMENT_LIST': {
            return {
                ...state,
                selectedRow: {
                    ...state.selectedRow,
                    payment: [...state.selectedRow.payment, action.payload],
                },
            };
        }

        case 'UPDATE_ELEMENT_PAYMENT_LIST': {
            const { id } = action.payload;
            const newPayment = [...state.selectedRow.payment];
            const updatePayment = newPayment.findIndex(object => object.id === id);
            newPayment[updatePayment] = action.payload;

            return {
                ...state,
                selectedRow: {
                    ...state.selectedRow,
                    payment: newPayment,
                },
            };
        }
        case 'DELETE_ELEMENT_PAYMENT_LIST': {
            return {
                ...state,

                selectedRow: {
                    ...state.selectedRow,
                    payment: [...state.selectedRow.payment.filter(payment => payment.id !== action.payload)],
                },
            };
        }

        case 'SUB_MENU_OPENED': {
            return {
                ...state,
                openKeys: [action.payload],
            };
        }

        case 'CREDITS': {
            return {
                ...state,
                credit: action.payload,
            };
        }

        case 'ADD_DATA': {
            return {
                ...state,
                data: [...state.data, action.payload],
            };
        }

        case 'UPDATE_DATA': {
            const { id } = action.payload;
            const newData = [...state.data];
            const updateData = newData.findIndex(object => object.id === id);
            newData[updateData] = action.payload;

            return {
                ...state,
                data: newData,
            };
        }

        case 'DELETE_DATA': {
            return {
                ...state,
                data: state.data.filter(object => object.id !== action.payload),
            };
        }

        case 'ADD_DROPDOWN_CREDITS': {
            return {
                ...state,
                ...state.selectedRow,
                credit: [...state.credit, action.payload],
            };
        }
        case 'DELETE_DROPDOWN_CREDITS': {
            return {
                ...state,
                credit: state.credit.filter(credit => credit.id !== action.payload),
            };
        }

        case 'RECENT_SALES': {
            return {
                ...state,
                recentSales: action.payload,
            };
        }

        case 'RECENT_PURCHASES': {
            return {
                ...state,
                recentPurchase: action.payload,
            };
        }

        case 'CREDIT_ALERT': {
            return {
                ...state,
                creditAlert: action.payload,
            };
        }

        case 'CREDIT_ALERT_BY_PERCENT': {
            return {
                ...state,
                creditAlertByPercent: action.payload,
            };
        }

        case 'DROPDOWN_PAYMENT_TERMS': {
            return {
                ...state,
                dropPaymentTerm: action.payload,
            };
        }

        case 'RESET_DROPDOWN_PAYMENT_TERMS': {
            return {
                ...state,
                dropPaymentTerm: action.payload,
            };
        }

        case 'CLIENT_CREDIT_LIMIT': {
            var result = false;
            action.payload[0] ? (result = false) : (result = true);

            return {
                ...state,
                clientCreditLimit: action.payload,
                disableCreditButton: result,
            };
        }

        case 'RESET_CLIENT_CREDIT_LIMIT': {
            return {
                ...state,
                clientCreditLimit: action.payload,
                disableCreditButton: false,
            };
        }

        case 'SALE_PAYMENT': {
            return {
                ...state,
                payment: action.payload,
            };
        }

        case 'RESET_SALE_PAYMENT': {
            return {
                ...state,
                payment: action.payload,
            };
        }

        case 'GET_PURCHASE_CONTRACT': {
            return {
                ...state,
                pContract: action.payload,
            };
        }
        case 'GET_SALE_CONTRACT': {
            return {
                ...state,
                sContract: action.payload,
            };
        }

        case 'SELECTED_CREDIT': {
            return {
                ...state,
                selectedCredit: action.payload,
            };
        }

        case 'SELECTED_PAYMENT': {
            return {
                ...state,
                selectedPayment: action.payload,
            };
        }

        case 'DAYS': {
            return {
                ...state,
                days: action.payload,
            };
        }

        case 'ETA': {
            return {
                ...state,
                eta: action.payload,
            };
        }

        case 'ETD': {
            return {
                ...state,
                etd: action.payload,
            };
        }
        case 'DUEDATEBASE': {
            return {
                ...state,
                duedatebase: action.payload,
            };
        }

        case 'DATE_RESULT': {
            return {
                ...state,
                dateresult: action.payload,
            };
        }

        case 'RESET_DATE': {
            return {
                ...state,
                eta: null,
                select: '',
                days: null,
                result: 'ETA',
                etd: null,
            };
        }

        case 'REMOVE_REMARKS': {
            const filter = state.selectedRow.remarks;
            return {
                ...state,
                selectedRow: {
                    ...state.selectedRow,
                    remarks: [...state.selectedRow.remarks.filter(rem => rem !== filter[action.payload])],
                },
            };
        }

        case 'SET_CONTRACT': {
            const { id, isContracted } = action.payload;
            const newData = [...state.data];
            const updateData = newData.findIndex(object => object.id === id);
            newData[updateData] = { ...newData[updateData], isContracted: isContracted };
            return {
                ...state,
                data: newData,
            };
        }

        case 'SORT_DATA_DATE': {
            const newData = state.data;
            let sortedArray = _.sortBy(newData, function (o) {
                return Date.parse(o.createdAt);
            });
            //const sorted = newData.sort(sortFunction);

            return {
                ...state,
                data: sortedArray,
            };
        }

        case 'GET_ORIGIN': {
            return {
                ...state,
                origin: action.payload,
            };
        }

        case 'SALE_DUE_DATE_ALERT': {
            return {
                ...state,
                dueDateAlert: action.payload,
            };
        }

        case 'SALE_DUE_DATE_ALERT_WEEK': {
            return {
                ...state,
                dueDateAlertWeek: action.payload,
            };
        }

        case 'EXPORT_INDENT': {
            return {
                ...state,
                indents: action.payload,
            };
        }

        case 'RESET_INDENT': {
            return {
                ...state,
                indents: [],
            };
        }

        case 'TOTAL_PRICE': {
            return {
                ...state,
                totalprice: action.payload,
            };
        }

        case 'RESET_TOTAL_PRICE': {
            return {
                ...state,
                totalprice: '',
            };
        }

        case 'SET_PRODUCT_ITEM': {
            return {
                ...state,
                productItm: action.payload,
            };
        }

        case 'SET_PRODUCT_TBL_DATA': {
            return {
                ...state,
                productsTblData: [...action.payload],
            };
        }

        case 'ADD_PRODUCT_TO_TBL': {
            return {
                ...state,
                productItm: initialState.productItm,
                productsTblData: [...state.productsTblData, action.payload],
            };
        }

        case 'ADD_PRODUCT_TO_SELECTEDROW': {
            return {
                ...state,
                selectedRow: {
                    basket: [...state.selectedRow.basket, action.payload],
                },
            };
        }

        case 'REMOVE_PRODUCT_TO_SELECTEDROW': {
            return {
                ...state,
                selectedRow: {
                    basket: [...action.payload],
                },
            };
        }

        case 'REMOVE_PRODUCT_TO_ON_CHANGED_DATA': {
            return {
                ...state,
                onChangedData: {
                    basket: [...action.payload],
                },
            };
        }

        case 'UPDATE_PRODUCT_IN_TBL': {
            const basketOnChangedData =
                state.onChangedData && state.onChangedData.basket
                    ? state.onChangedData.basket.filter(item => item.id !== action.payload.id)
                    : [];

            const basketSelectedRow =
                state.selectedRow && state.selectedRow.basket
                    ? state.selectedRow.basket.filter(item => item.id !== action.payload.id)
                    : [];

            basketSelectedRow.push(action.payload);
            basketOnChangedData.push(action.payload);

            return {
                ...state,
                productItm: initialState.productItm,
                productsTblData: initialState.productsTblData,
                selectedRow: {
                    ...state.selectedRow,
                    basket: [...basketSelectedRow],
                },
                onChangedData: {
                    ...state.onChangedData,
                    basket: [...basketOnChangedData],
                },
            };
        }
        case 'UPDATE_PRODUCT_TO_TBL': {
            const productsTableData = [...state.productsTblData];
            const id = action.payload.id;
            const newProductTableData = productsTableData.filter(item => item.id !== id);
            return {
                ...state,
                productItm: initialState.productItm,
                productsTblData: [...newProductTableData, action.payload],
            };
        }

        case 'RESET_PRODUCTS_IN_TBL': {
            return {
                ...state,
                productItm: initialState.productItm,
                productsTblData: initialState.productsTblData,
            };
        }

        case 'REMOVE_PRODUCT_FROM_TBL': {
            return {
                ...state,
                productsTblData: [...action.payload],
            };
        }

        case 'LOADING': {
            return {
                ...state,
                loading: action.payload,
            };
        }

        default:
            return state;
    }
}
