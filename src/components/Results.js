const Results = ({ results }) => {
    if (!results) return <p>No results to display.</p>;
  
    return (
      <div>
        <h2>Analysis Results:</h2>
        <p>Total Revenue 5Cr Flag: {results.flags.TOTAL_REVENUE_5CR_FLAG}</p>
        <p>Borrowing to Revenue Flag: {results.flags.BORROWING_TO_REVENUE_FLAG}</p>
        <p>ISCR Flag: {results.flags.ISCR_FLAG}</p>
      </div>
    );
  };

  export default Results;