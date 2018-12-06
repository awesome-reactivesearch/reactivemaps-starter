import React, { Component } from 'react';
import {
	ReactiveBase,
	SingleList,
	SelectedFilters,
} from '@appbaseio/reactivesearch';
import { ReactiveMap } from '@appbaseio/reactivemaps';

import './App.css';

class App extends Component {
  render() {
		return (
			<ReactiveBase
				app="earthquakes"
				credentials="dshr057Nz:e18bbbbe-5d55-4234-a17e-4d64fb2222c7"
				mapKey="AIzaSyBQdVcKCe0q_vOBDUvJYpzwGpt_d_uTj4Q"
			>
				<div className="row">
					<div className="col">
						<SingleList
							title="Places"
							componentId="places"
							dataField="place.raw"
							size={50}
							showSearch
						/>
					</div>
					<div className="col">
						<SelectedFilters />
						<ReactiveMap
							componentId="map"
							dataField="location"
							react={{
								and: 'places',
							}}
							onData={result => ({
								label: result.mag,
							})}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}

export default App;
