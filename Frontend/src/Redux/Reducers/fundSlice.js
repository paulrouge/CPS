import { createSlice } from '@reduxjs/toolkit';
import { IconConverter } from 'icon-sdk-js';

const initialState = {
  cpfRemainingFunds: 0,
  cpfScoreAddress: null,

  cpsTreasuryScoreAddress: null,

  expectedGrant: { icx: 0, bnUSD: 0 },
  sponsorReward: { icx: 0, bnUSD: 0 },
  sponsorBond: { icx: 0, bnUSD: 0 },

  withDrawAmountSponsorReward: { icx: 0, bnUSD: 0 },
  withDrawAmountProposalGrant: { icx: 0, bnUSD: 0 },
  sponsorBondReward: { icx: 0, bnUSD: 0 },
  bnUSDScoreAddress: null
};

const fundSlice = createSlice({
  name: 'fund',
  initialState,
  reducers: {
    fetchCPFScoreAddressRequest() {
      return;
    },
    fetchCPFScoreAddressSuccess(state, action) {
      state.cpfScoreAddress = action.payload.response;

      return;
    },
    fetchCPFScoreAddressFailure() {
      return;
    },

    fetchCPSTreasuryScoreAddressRequest() {
      return;
    },
    fetchCPSTreasuryScoreAddressSuccess(state, action) {
      state.cpsTreasuryScoreAddress = action.payload.response;

      return;
    },
    fetchCPSTreasuryScoreAddressFailure() {
      return;
    },

    fetchCPFRemainingFundRequest() {
      return;
    },
    fetchCPFRemainingFundSuccess(state, action) {
      state.cpfRemainingFunds = {
        icx: IconConverter.toBigNumber(
          action.payload.response.ICX,
        ).dividedBy(10 ** 18), bnUSD: IconConverter.toBigNumber(
          action.payload.response.bnUSD).dividedBy(10 ** 18)
      }
      // state.cpfScoreAddress = action.payload.response;

      return;
    },
    fetchCPFRemainingFundFailure() {
      return;
    },

    fetchExpectedGrantRequest() {
      return;
    },
    fetchExpectedGrantSuccess(state, action) {
      if (action.payload.response.type === 'proposalGrant') {
        state.expectedGrant = {
          icx: action.payload.response.total_amount.ICX
            ? IconConverter.toBigNumber(
              action.payload.response.total_amount.ICX,
            ).dividedBy(10 ** 18)
            : 0,
          bnUSD: action.payload.response.total_amount.bnUSD
            ? IconConverter.toBigNumber(
              action.payload.response.total_amount.bnUSD,
            ).dividedBy(10 ** 18)
            : 0
        };
        state.withDrawAmountProposalGrant = {
          icx: action.payload.response
            .withdraw_amount_icx
            ? IconConverter.toBigNumber(
              action.payload.response.withdraw_amount_icx,
            ).dividedBy(10 ** 18)
            : 0,
          bnUSD: action.payload.response
            .withdraw_amount_bnusd
            ? IconConverter.toBigNumber(
              action.payload.response.withdraw_amount_bnusd,
            ).dividedBy(10 ** 18)
            : 0
        };
      } else {
        state.sponsorReward = {
          icx: action.payload.response.total_amount.ICX
            ? IconConverter.toBigNumber(
              action.payload.response.total_amount.ICX,
            ).dividedBy(10 ** 18)
            : 0,
          bnUSD: action.payload.response.total_amount.bnUSD
            ? IconConverter.toBigNumber(
              action.payload.response.total_amount.bnUSD,
            ).dividedBy(10 ** 18)
            : 0
        }
        state.sponsorBond = {
          icx: action.payload.response.total_sponsor_bond.ICX
            ? IconConverter.toBigNumber(
              action.payload.response.total_sponsor_bond.ICX,
            ).dividedBy(10 ** 18)
            : 0,
          bnUSD: action.payload.response.total_sponsor_bond.bnUSD
            ? IconConverter.toBigNumber(
              action.payload.response.total_sponsor_bond.bnUSD,
            ).dividedBy(10 ** 18)
            : 0
        }
        state.withDrawAmountSponsorReward = {
          icx: action.payload.response
            .withdraw_amount_icx
            ? IconConverter.toBigNumber(
              action.payload.response.withdraw_amount_icx,
            ).dividedBy(10 ** 18)
            : 0,
          bnUSD: action.payload.response
            .withdraw_amount_bnusd
            ? IconConverter.toBigNumber(
              action.payload.response.withdraw_amount_bnusd,
            ).dividedBy(10 ** 18)
            : 0
        };
      }

      // state.cpfScoreAddress = action.payload.response;

      return;
    },
    fetchExpectedGrantFailure() {
      return;
    },
    claimReward() {
      return;
    },
    claimSponsorBondReward() {
      return;
    },
    fetchSponsorBondRequest(state) {
      return;
    },
    fetchSponsorBondSuccess(state, action) {
      console.log('Sponsor', action);
      state.sponsorBondReward = {
        icx: action.payload.ICX
          ? IconConverter.toBigNumber(action.payload.ICX).dividedBy(10 ** 18)
          : 0,
        bnUSD: action.payload.bnUSD
          ? IconConverter.toBigNumber(action.payload.bnUSD).dividedBy(10 ** 18)
          : 0
      };
    },
    fetchSponsorBondFailure() {
      return;
    },
    fetchbnUSDAddressRequest(state) {
      return;
    },
    fetchbnUSDAddressSuccess(state, action) {
      console.log('bnUSD Score', action);
      state.bnUSDScoreAddress = action.payload
    },
    fetchbnUSDAddressFailure() {
      return;
    },
  },

  extraReducers: {
    'account/logout': (state, action) => {
      state.expectedGrant = 0;
      state.sponsorBond = 0;
      state.sponsorBondReward = { icx: 0, bnUSD: 0 }

    },
  },
});

export const {
  fetchCPFScoreAddressRequest,
  fetchCPFScoreAddressSuccess,
  fetchCPFScoreAddressFailure,
  fetchCPFRemainingFundRequest,
  fetchCPFRemainingFundSuccess,
  fetchCPFRemainingFundFailure,
  fetchExpectedGrantRequest,
  fetchExpectedGrantSuccess,
  fetchExpectedGrantFailure,
  fetchCPSTreasuryScoreAddressRequest,
  fetchCPSTreasuryScoreAddressSuccess,
  fetchCPSTreasuryScoreAddressFailure,
  claimReward,
  claimSponsorBondReward,
  fetchSponsorBondRequest,
  fetchSponsorBondSuccess,
  fetchSponsorBondFailure,
  fetchbnUSDAddressRequest,
  fetchbnUSDAddressSuccess,
  fetchbnUSDAddressFailure
} = fundSlice.actions;
export default fundSlice.reducer;
