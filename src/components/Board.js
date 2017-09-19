import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as boardActions from '../actions/actions';

class Board extends Component {
	static propTypes = {
		
	}


	render(){
		const {addTask} = this.props.boardActions;
		const header = this.props.tasksHeaders.map((header, index) => {
			return (
			  <th key={index}>					
				    {header}
					<span onClick={() => addTask({task: 'add task'}, 'ADD_TASK')}>+</span>
				</th>
			)
		})
		return (
			<section className="o-wrapper board-wrapper">
				<table className="o-wrapper board-table">
				  <thead>
						<tr>	
						  {header}
						</tr>
					</thead>
					<tbody>	
						<tr>
							<td>
								yo
							</td>
							<td>
								yo
							</td>
							<td>
								yo
							</td>
							<td>
								yo
							</td>
						</tr>						
					</tbody>				
				</table>
				
			</section>
		)
	}
}


function mapDispatchToProps(dispatch) {
  return {
    boardActions: bindActionCreators(boardActions, dispatch),
  }
}

function mapStateToProps(state) {
	console.log(state, 'is state')
	return {
		tasksHeaders: state.tasks.taskHeaders,
		taskItems: state.tasks.taskItems,
				
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);

