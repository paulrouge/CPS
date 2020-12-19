import React, { useEffect, useState } from 'react';
import { Modal, Button, Col, Row, Container, Badge, ButtonGroup } from 'react-bootstrap';
import { Header, Address, DetailsTable, Description, MilestoneTable, ListTitle } from '../../UI/DetailsModal';
import styles from './DetailsModal.module.css';
import ProgressBar from '../../UI/ProgressBar';
import ProgressText from '../../UI/ProgressText';
import { FetchProposalDetailRequest, fetchProposalDetailRequest, approveSponserRequest, rejectSponsorRequest, voteProposal, fetchVoteResultRequest } from 'Redux/Reducers/proposalSlice';
import { fetchProgressReportByProposalRequest } from 'Redux/Reducers/progressReportSlice';
import { connect } from 'react-redux';
import ProgressReportList from 'Components/Card/ProgressReportList';
import { proposalStatusMapping } from '../../../Constants';
import VoteList from './VoteList';
import RichTextEditor from 'Components/RichTextEditor';
import ConfirmationModal from 'Components/UI/ConfirmationModal';
import { getProposalApprovedPercentage, getProposalApprovedVotersPercentage,
  getProposalRejectedPercentage, getProposalRejectedVotersPercentage } from 'Selectors';
import { icxFormat } from 'helpers';
import DetailsModalPR from 'Components/Card/DetailsModalProgressReport';
import IconService from 'icon-sdk-js';
import ProgressBarCombined from 'Components/Card/ProgressBarCombined';
import { fetchPrepsRequest } from 'Redux/Reducers/prepsSlice';

function DetailsModal(props) {

  const voteOptions = ['Approve', 'Reject', 'Abstain'];
  const [vote, setVote] = useState(voteOptions[0]);
  const [voteReason, setVoteReason] = useState('');
  const [sponsorConfirmationShow, setSponsorConfirmationShow] = React.useState(false);
  const [sponsorVote, setSponsorVote] = useState('');
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedProgressReport, setSelectedProgressReport] = React.useState();

  const [voteConfirmationShow, setVoteConfirmationShow] = React.useState(false);


  const { proposalDetail, proposal, sponsorRequest = false, approveSponserRequest, rejectSponsorRequest, voting = false, voteProposal, progressReportByProposal, votesByProposal, fetchVoteResultRequest, approvedPercentage,
    fetchProgressReportByProposalRequest, period, remainingTime, approvedVoterPercentage, fetchProposalDetail, walletAddress, rejectedPercentage, rejectedVoterPercentage, fetchPrepsRequest, preps, ...remainingProps } = props;

    const status = proposalStatusMapping.find(mapping => mapping.status === proposal?._status)?.name

    const prepName = proposalDetail?.sponserPrepName ? proposalDetail?.sponserPrepName : preps.find(prep => prep.address == proposalDetail?.sponserPrep)?.name;
    
    const onClickProgressReport = (porgressReport) => {
      setModalShow(true);
      setSelectedProgressReport(porgressReport);
  }

  useEffect(() => {
    fetchPrepsRequest();
  }, [])

  useEffect(() => {
    props.proposal && props.fetchProposalDetail(
      {
        hash: props.proposal.ipfsHash
      }
    );


    if (status === 'Active' || status === 'Completed' || status === 'Paused') {
      props.proposal && fetchProgressReportByProposalRequest({
        proposalKey: props.proposal.ipfsKey
      })
    }


  }, [props.proposal])

  useEffect(() => {
    if (status === 'Voting') {
      // alert("Voting");
      props.proposal && fetchVoteResultRequest({
        proposalKey: props.proposal.ipfsKey
      });
    }
  }, [props.proposal, props.show])

  const onSubmitVote = () => {
    voteProposal(
      {
        vote,
        voteReason,
        ipfsKey: proposal.ipfsKey,

      }
    )
  }

  const onClickApproveSponsorRequest = () => {
    const {IconConverter} = IconService
    approveSponserRequest(
      {
        ipfsKey: proposal.ipfsKey,
        sponsorBond: IconConverter.toBigNumber(proposalDetail?.totalBudget).dividedBy(10)
      }
    );
    // props.onHide();
  }

  const onClickRejectSponsorRequest = () => {
    rejectSponsorRequest(
      {
        ipfsKey: proposal.ipfsKey,
      }
    );
    // props.onHide();

  }

  return (
    <Modal
      {...remainingProps}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className={styles.modalHeader}>
        <Container fluid className={styles.container}>
          <Row>
            <Col sm="12">
              <Header>
                {proposalDetail && proposalDetail.projectName || 'N/A'}
              </Header>
            </Col>
          </Row>
          <Row>

            <Col sm="12">

              <Address>
                {proposal?._contributor_address || 'N/A'}
              </Address>
            </Col>
          </Row>
          <Row style={{ alignItems: 'center' }}>
            <Col lg="1" xs="12">
              <Badge variant={proposalStatusMapping.find((mapping) => {
                return (mapping.name === status)
              })?.badgeColor}>{status}</Badge>{' '}
            </Col>

            {
              ((selectedTab) => {
                // console.log(props.selectedTab);
                if (['Active', 'Paused'].includes(status))
                  return (
                    <>
                      <Col lg="3" xs="12">

                        <ProgressBar
                          percentage={proposal?.completedPercentage} />
                      </Col>

                      <Col lg="8" xs="12" className={styles.progressTextContainer}>
                        {

                          <ProgressText>
                            {proposal?.completedPercentage ? `${proposal?.completedPercentage.toFixed()}` : 0}% Completed
                          </ProgressText>
                        }

                      </Col>
                    </>
                  )
                if (['Voting'].includes(status))
                  return (
                    <>
                      {/* <Col xs="12"> */}
                      <Col lg="3" xs="12">

                        {/* <ProgressBar
                          percentage={approvedPercentage} /> */}


                    <ProgressBarCombined 
                          approvedPercentage = {approvedPercentage}
                          rejectedPercentage = {rejectedPercentage}
                          />
                      </Col>

                      <Col lg="8" xs="12" className={styles.progressTextContainer}>
                        {

                          <ProgressText>
                            Stake- {approvedPercentage ? `${approvedPercentage.toFixed()}` : 0}% approved, {rejectedPercentage ? `${rejectedPercentage.toFixed()}` : 0}% rejected
                            </ProgressText>
                        }

                      </Col>
                      {/* </Col> */}
                      <Col lg='1' xs='12'></Col>
                      <Col lg="3" xs="12">

                        {/* <ProgressBar
                          percentage={approvedVoterPercentage} /> */}

                      <ProgressBarCombined 
                          approvedPercentage = {approvedVoterPercentage}
                          rejectedPercentage = {rejectedVoterPercentage}
                          />
                      </Col>

                      <Col lg="8" xs="12" className={styles.progressTextContainer}>
                        {

                          <ProgressText>
                            Voter count- {approvedVoterPercentage ? `${approvedVoterPercentage.toFixed()}` : 0}% approved, {rejectedVoterPercentage ? `${rejectedVoterPercentage.toFixed()}` : 0}% rejected
                          </ProgressText>
                        }

                      </Col>
                    </>
                  )
                else
                  return null;
              }
              )()

            }

          </Row>
        </Container>

      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        <Row>
          <Col lg="8" xs="12">
            {/* <div dangerouslySetInnerHTML={{ __html: description }} /> */}
            <Description description={(proposalDetail && proposalDetail.description) || '<span>No Description</span>'} />
          </Col>

          {/* <Col lg="4" className = "d-none d-lg-block"> */}
          <Col lg="4" xs="12">
            <Col xs="12" style = {{
                  paddingLeft: '0px',
                  paddingRight: '0px'
                }}>
              <DetailsTable
                title={"Project Details"}
                data={
                  [
                    {
                      key: 'Category',
                      value: proposalDetail?.category || 'N/A'
                    },
                    {
                      key: 'Project Duration',
                      value: `${proposalDetail?.projectDuration} months` || 'N/A'
                    },
                    {
                      key: 'Total Budget',
                      value: `${icxFormat(proposalDetail?.totalBudget)} ICX` || 'N/A'
                    },
                    {
                      key: 'Sponsor Prep',
                      value: prepName ? prepName : `${proposalDetail?.sponserPrep?.slice(0, 6)}...` || 'N/A'
                    },
                    {
                      key: 'Team Name',
                      value: `${proposalDetail?.teamName}` || 'N/A'
                    },
                    {
                      key: 'Team Email',
                      value: `${proposalDetail?.teamEmail}` || 'N/A'
                    },
                    {
                      key: 'Team Size',
                      value: `${proposalDetail?.teamSize}` || 'N/A'
                    },
                  ]
                }


              />
            </Col>
            {
              (proposalDetail?.milestones?.length > 0) &&
              <Col xs="12" style = {{
                paddingLeft: '0px',
                paddingRight: '0px'
              }}>
                <MilestoneTable
                  milestones={proposalDetail?.milestones}
                  style = {{
                    paddingLeft: '0px',
                    paddingRight: '0px'
                  }} />
              </Col>
            }
          </Col>
        </Row>

        {
          sponsorRequest && (status === 'Pending') && (period === 'APPLICATION') && (remainingTime > 0) &&
          <Row style={{ justifyContent: 'center' }}>
            <Button variant="success" onClick={onClickApproveSponsorRequest}
              onClick={() => {
                setSponsorConfirmationShow(true);
                setSponsorVote('approve')
              }}>Approve</Button>
            <Button variant="danger" className={styles.rejectButton} onClick={onClickRejectSponsorRequest}
              onClick={() => {
                setSponsorConfirmationShow(true);
                setSponsorVote('reject')
              }}>Reject</Button>

          </Row>
        }

        {
          voting && (period === 'VOTING') && (remainingTime > 0) &&
          <>
          {
            !votesByProposal.some(vote => vote.sponsorAddress === walletAddress) ?
            <>
            <Row style={{ justifyContent: 'center' }}>
              <ButtonGroup aria-label="Basic example">

                {
                  voteOptions.map(voteOption =>
                    <Button variant={vote === voteOption ? 'success' : 'light'} onClick={() => setVote(voteOption)}>{voteOption}</Button>
                  )

                }
              </ButtonGroup>


            </Row>
            <Row>
              <Col xs="12">
                <span>Explain in brief the reason behind your decision</span>
              </Col>

              <Col xs="12">
                <RichTextEditor
                  required
                  onChange={(data) =>
                    setVoteReason(
                      data
                    )} />
              </Col>

            </Row>

            <Row style={{ justifyContent: 'center' }}>
              <Button variant="primary" onClick={() => setVoteConfirmationShow(true)} style={{ marginTop: '10px', width: '150px' }}>Submit Vote</Button>

            </Row>
            </> :
            <>
            <p style = {{color: '#262626', textAlign: 'center'}}>You have already voted for this proposal</p>
            </>
          }
          </>
        }

        {
          // !sponsorRequest &&
          <Row>
            <Col xs="12">
              {
                (status === 'Active' || status === 'Completed' || status === 'Paused') ?
                  (
                    <>
                      <ListTitle>Progress Reports</ListTitle>
                      <ProgressReportList
                        projectReports={progressReportByProposal}
                        onClickProgressReport={onClickProgressReport}
                        isModal
                        />
                    </>
                  ) :
                  (status === 'Voting') ?
                    <>
                      <ListTitle>VOTES</ListTitle>
                      <VoteList
                        votes={votesByProposal} />
                    </> :
                    null
              }

            </Col>
          </Row>
        }

        <ConfirmationModal
          show={sponsorConfirmationShow}
          onHide={() => setSponsorConfirmationShow(false)}
          heading={sponsorVote === 'approve' ? 'Sponsor Request Approval Confirmation' : 'Sponsor Request Rejection Confirmation'}
          onConfirm={sponsorVote === 'approve' ?
            onClickApproveSponsorRequest : onClickRejectSponsorRequest} >
          {
            (sponsorVote === 'approve') ?
              <>
                <div>Are you sure you want to approve the sponsor request?</div>
                <div style={{ color: 'red' }}>You will need to transfer {icxFormat((proposalDetail?.totalBudget?? 0) * 0.1, true)} ICX for sponsor bond.</div>
              </> :
              <span>Are you sure you want to reject the sponsor request?</span>
          }

        </ConfirmationModal>

        <ConfirmationModal
          show={voteConfirmationShow}
          onHide={() => setVoteConfirmationShow(false)}
          heading={'Vote Confirmation'}
          onConfirm={onSubmitVote} >
          Are you sure you want to {vote.toLowerCase()} the proposal?
        </ConfirmationModal>

        <DetailsModalPR
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                progressReport={selectedProgressReport}
                                // status={selectedTab}
                            />  

      </Modal.Body>
    </Modal>
  );
}

const mapStateToProps = state => (
  {
    proposalDetail: state.proposals.proposalDetail,
    progressReportByProposal: state.progressReport.progressReportByProposal,
    votesByProposal: state.proposals.votesByProposal,
    approvedPercentage: getProposalApprovedPercentage(state),
    approvedVoterPercentage: getProposalApprovedVotersPercentage(state),

    rejectedPercentage: getProposalRejectedPercentage(state),
    rejectedVoterPercentage: getProposalRejectedVotersPercentage(state),

    period: state.period.period,
    remainingTime: state.period.remainingTime,
    walletAddress: state.account.address,

    preps: state.preps.preps,

  }
)

const mapDispatchToProps = (dispatch) => (
  {
    fetchProposalDetail: payload => dispatch(fetchProposalDetailRequest(payload)),
    approveSponserRequest: payload => dispatch(approveSponserRequest(payload)),
    rejectSponsorRequest: payload => dispatch(rejectSponsorRequest(payload)),
    voteProposal: payload => dispatch(voteProposal(payload)),
    fetchVoteResultRequest: payload => dispatch(fetchVoteResultRequest(payload)),
    fetchProgressReportByProposalRequest: payload => dispatch(fetchProgressReportByProposalRequest(payload)),
    fetchPrepsRequest: payload => dispatch(fetchPrepsRequest(payload)),

  }
)

export default connect(mapStateToProps, mapDispatchToProps)(DetailsModal);