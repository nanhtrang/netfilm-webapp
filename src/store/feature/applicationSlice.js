import {createSlice} from "@reduxjs/toolkit";
import i18n from "../../plugins/i18n";

const applicationSlice = createSlice({
  name: 'applicationSlice',
  initialState: {
    lang: i18n.language
  },
  reducers: {
    updateLang: (state, action) => {
      state.lang = action.payload
    }
  }
})

export const {updateLang} = applicationSlice.actions
export default applicationSlice.reducer