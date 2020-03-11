import React from 'react';
import { connect } from 'react-redux';

const Status = props => {
  return <section>{props.active}</section>;
};

const mapStateToProps = state => ({
  
});

export default connect(mapStateToProps)(Status);
