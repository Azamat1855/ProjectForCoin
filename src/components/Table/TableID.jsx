import React from 'react';
import { useParams } from 'react-router-dom';

const TableID = () => {
    const { id } = useParams();

    return (
        <div>
            <h2>Report ID: {id}</h2>
            {/* Display the details of the report with this ID */}
        </div>
    );
};

export default TableID;
