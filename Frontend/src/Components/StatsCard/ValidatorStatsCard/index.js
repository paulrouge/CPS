import React from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import prepsSlice from 'Redux/Reducers/prepsSlice';

import styles from '../StatsCard.module.scss';
const ValidatorStatsCard = ({ preps, count1, count2 }) => {
  let [prepList, setPrepList] = React.useState([]);

  React.useEffect(() => {
    let prepList = preps?.slice();
    prepList = prepList?.sort(function (a, b) {
      if (a?.prep?.name?.toLowerCase() < b?.prep?.name?.toLowerCase())
        return -1;
      if (a?.prep?.name?.toLowerCase() > b?.prep?.name?.toLowerCase()) return 1;
      return 0;
    });
    setPrepList(prepList);
  }, [preps]);

  const type = 'checkbox';
  return (
    <Table striped bordered hover className={styles.validatorTable}>
      <thead>
        <tr>
          <th>S.N.</th>
          <th>Validator Name</th>
          <th>Remaining Proposals</th>
          <th>Remaining Progress Reports</th>
          <th>Priority Voting</th>
        </tr>
      </thead>
      <tbody>
        {prepList?.map((prep, i) => (
          <tr>
            <td>{i + 1}</td>
            <td>{prep.prep.name}</td>
            <td>{prep.proposalRemaining}</td>
            <td>{prep.progressReportRemaining}</td>
            <td>
              {/* <Form.Check
                checked={Boolean(Number(prep.priorityVoting))}
                onClick={() => {
                  return false;
                }}
                type={type}
              /> */}
              {Boolean(Number(prep.priorityVoting)) ? 'Voted' : 'Not Voted'}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ValidatorStatsCard;
