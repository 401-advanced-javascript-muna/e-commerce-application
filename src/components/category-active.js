import React from 'react';
import { connect } from 'react-redux';
import { categories } from '../store/category.js';

const VotesCounter = props => {
  console.log('props',props);
  return (
    <section>
      <ul>
        
        {props.categories.category.map(cat => {
          return (
            <li onClick={() => props.category(cat.name)} key={cat.name}>
              {cat.name} - {cat.displayName}             </li>
          );
        })}
      </ul>

    </section>
  );
};

const mapStateToProps = state => ({
  counter: state.counter,
});


const mapDispatchToProps = {  categories};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VotesCounter);
