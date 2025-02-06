import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  openFullScreenView: false,
  fullScreenPostData: null,
  openCompanyBottomSheet: false,
  openCompanySponsoredBottomSheet: false,
  openUserBottomSheet: false,
  bottomSheetData: null,
  bottomSheetForUserRemoval: false,
  openMessageModal: false,
  blockUserPostAccount: false,
  openChatModal: false,
  eventLocation: '',
  focusOnSpecificPost: null,
  selectContactToSendCompanyProfile: false,
};

export const postSlice = createSlice({
  name: 'userDataSlice',
  initialState,
  reducers: {
    setOpenFullScreenView: (state, action) => {
      state.openFullScreenView = action.payload;
    },
    setFullScreenPostData: (state, action) => {
      state.fullScreenPostData = action.payload;
    },
    setOpenCompanyBottomSheet: (state, action) => {
      state.openCompanyBottomSheet = action.payload;
    },
    setOpenCompanySponsoredBottomSheet: (state, action) => {
      state.openCompanySponsoredBottomSheet = action.payload;
    },
    setOpenUserBottomSheet: (state, action) => {
      state.openUserBottomSheet = action.payload;
    },
    setOpenBottomSheetToRemoveUser: (state, action) => {
      state.bottomSheetForUserRemoval = action.payload;
    },
    setBottomSheetData: (state, action) => {
      state.bottomSheetData = action.payload;
    },
    setOpenMessageModal: (state, action) => {
      state.openMessageModal = action.payload;
    },
    setOpenBlockUserPostAccount: (state, action) => {
      state.blockUserPostAccount = action.payload;
    },
    setOpenChatModal: (state, action) => {
      state.openChatModal = action.payload;
    },
    setEventLocation: (state, action) => {
      state.eventLocation = action.payload;
    },
    setFocusOnSpecificPost: (state, action) => {
      state.focusOnSpecificPost = action.payload;
    },
    setSelectContactToSendCompanyProfile: (state, action) => {
      state.selectContactToSendCompanyProfile = action.payload;
    },
  },
});

export const {
  setOpenFullScreenView,
  setFullScreenPostData,
  setBottomSheetData,
  setOpenCompanyBottomSheet,
  setOpenUserBottomSheet,
  setOpenCompanySponsoredBottomSheet,
  setOpenBottomSheetToRemoveUser,
  setOpenMessageModal,
  setOpenBlockUserPostAccount,
  setOpenChatModal,
  setEventLocation,
  setFocusOnSpecificPost,
  setSelectContactToSendCompanyProfile,
} = postSlice.actions;

export default postSlice.reducer;
