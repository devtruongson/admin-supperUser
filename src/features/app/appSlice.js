import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getNotifyService } from '../../services/notifyService';
import { HandleApi } from '../../services/HandleApi';

const initState = {
    notifications: [],
    metaNotifications: null,
    linksNotification: null,
};

export const getNotify = createAsyncThunk('app/getNotify', async (params) => {
    const { page = 1, pageSize = 10 } = params;
    try {
        const Res = await HandleApi(getNotifyService, {
            page,
            pageSize,
        });
        return Res;
    } catch (error) {
        console.log(error);
    }
});

export const appSlice = createSlice({
    initialState: initState,
    name: 'app',
    reducers: {
        viewNotifiAction(state, action) {
            state.notifications.map((item) => {
                if (item.id === action.payload.id) {
                    item.is_view = true;
                }
                return item;
            });
        },
    },
    extraReducers: (builder) => {
        const { fulfilled } = getNotify;
        builder.addCase(fulfilled, (state, action) => {
            const notification = [...state.notifications, ...action.payload.items];
            state.notifications = notification;
            state.metaNotifications = action.payload.meta;
            state.linksNotification = action.payload.links;
        });
    },
});

// Action creators are generated for each case reducer function
export const { viewNotifiAction } = appSlice.actions;

export default appSlice.reducer;
