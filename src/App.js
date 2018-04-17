import React, { Component } from 'react';
import { ReactiveBase, SingleList } from '@appbaseio/reactivesearch';
import { ReactiveMap } from '@appbaseio/reactivemaps';

import './App.css';

class App extends Component {
  render() {
		return (
			<ReactiveBase
				app="earthquake"
				credentials="OrXIHcgHn:d539c6e7-ed14-4407-8214-c227b0600d8e"
				type="places"
				mapKey="AIzaSyBQdVcKCe0q_vOBDUvJYpzwGpt_d_uTj4Q"
			>
				<div
					style={{
						width: '100%',
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between'
					}}
				>
					<SingleList
						title="Places"
						componentId="places"
						dataField="place.raw"
						size={50}
						showSearch={true}
						style={{
							width: '25%',
							padding: 20
						}}
					/>

					<ReactiveMap
						componentId="map"
						dataField="location"
						react={{
							and: "places"
						}}
						onData={result => ({
							label: result.mag
						})}
						style={{
							width: '70%'
						}}
					/>
				</div>
			</ReactiveBase>
		);
	}
}

export default App;
