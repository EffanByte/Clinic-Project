import React from 'react';

const HistoryTable = () => {
  return (
    <div class='d-flex justify-content-center align-items-center pt-3 vh-100'>
        <table class='table w-75'>
      <thead>
        <tr>
          <th>Serial No.</th>
          <th>Appointment Date</th>
          <th>Appointment Package</th>
          <th>Prescription</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2024-05-02</td>
          <td>Standard Checkup</td>
          <td>Aspirin, 100mg, 1 tablet daily</td>
        </tr>
        <tr>
          <td>2</td>
          <td>2024-05-05</td>
          <td>Complete Physical</td>
          <td>Vitamin D supplements, 1000IU, once a week</td>
        </tr>
        <tr>
          <td>3</td>
          <td>2024-05-10</td>
          <td>Dental Cleaning</td>
          <td>No prescription</td>
        </tr>
      </tbody>
    </table>
    </div>
    
  );
};

export default HistoryTable;
